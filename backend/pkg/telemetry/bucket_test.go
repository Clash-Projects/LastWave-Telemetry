package telemetry

import (
	"sync"
	"testing"
	"time"
)

func TestBucketInitialization(t *testing.T) {
	bucket := NewBucket(60 * time.Second)
	snapshot := bucket.GetSnapshot()

	if len(snapshot.Regions) == 0 {
		t.Fatalf("expected non-empty initial regions, got %d", len(snapshot.Regions))
	}

	if snapshot.GlobalKPIs.ActiveListeners <= 0 {
		t.Errorf("expected positive active listeners, got %d", snapshot.GlobalKPIs.ActiveListeners)
	}

	if len(snapshot.DailyTop10) != 10 {
		t.Errorf("expected 10 daily top tracks, got %d", len(snapshot.DailyTop10))
	}
}

func TestRecordPingZeroIPAndAggregation(t *testing.T) {
	bucket := NewBucket(60 * time.Second)

	initialSnap := bucket.GetSnapshot()
	initialStreams := initialSnap.GlobalKPIs.StreamsToday

	// Simulate incoming ping without any IP parameter
	bucket.RecordPing("track-01", "Starboy", "The Weeknd", "in-bom", "")

	updatedSnap := bucket.GetSnapshot()
	if updatedSnap.GlobalKPIs.StreamsToday != initialStreams+1 {
		t.Errorf("expected StreamsToday to increment to %d, got %d", initialStreams+1, updatedSnap.GlobalKPIs.StreamsToday)
	}

	// Verify region listeners
	foundRegion := false
	for _, reg := range updatedSnap.Regions {
		if reg.ID == "in-bom" {
			foundRegion = true
			if len(reg.TopSongs) == 0 {
				t.Errorf("expected region in-bom to have top songs")
			}
			break
		}
	}

	if !foundRegion {
		t.Errorf("region in-bom was not found in snapshot")
	}
}

func TestSimulateTick(t *testing.T) {
	bucket := NewBucket(60 * time.Second)

	snap1 := bucket.GetSnapshot()
	bucket.SimulateTick()
	snap2 := bucket.GetSnapshot()

	if snap2.SyncedAt.Before(snap1.SyncedAt) {
		t.Errorf("expected SyncedAt to advance")
	}

	if snap2.GlobalKPIs.ActiveListeners <= 0 {
		t.Errorf("expected positive active listeners after jitter, got %d", snap2.GlobalKPIs.ActiveListeners)
	}
}

func TestConcurrentPings(t *testing.T) {
	bucket := NewBucket(60 * time.Second)

	var wg sync.WaitGroup
	workers := 50
	pingsPerWorker := 20

	for i := 0; i < workers; i++ {
		wg.Add(1)
		go func(w int) {
			defer wg.Done()
			for j := 0; j < pingsPerWorker; j++ {
				bucket.RecordPing("track-test", "Midnight City", "M83", "in-blr", "")
			}
		}(i)
	}

	wg.Wait()
	snap := bucket.GetSnapshot()
	expectedIncrease := workers * pingsPerWorker
	if snap.GlobalKPIs.StreamsToday < expectedIncrease {
		t.Errorf("expected at least %d streams today, got %d", expectedIncrease, snap.GlobalKPIs.StreamsToday)
	}
}

func TestProductionBucketCleanState(t *testing.T) {
	t.Setenv("ENV", "production")
	bucket := NewBucket(60 * time.Second)
	snap := bucket.GetSnapshot()

	if snap.GlobalKPIs.ActiveListeners != 0 {
		t.Errorf("expected 0 active listeners in production, got %d", snap.GlobalKPIs.ActiveListeners)
	}
	if snap.GlobalKPIs.StreamsToday != 0 {
		t.Errorf("expected 0 streams today in production, got %d", snap.GlobalKPIs.StreamsToday)
	}
	if snap.GlobalKPIs.PeakConcurrent != 0 {
		t.Errorf("expected 0 peak concurrent in production, got %d", snap.GlobalKPIs.PeakConcurrent)
	}
	if len(snap.DailyTop10) != 0 {
		t.Errorf("expected 0 daily top songs in production, got %d", len(snap.DailyTop10))
	}
}

func TestBucketProductionPersistence(t *testing.T) {
	t.Setenv("ENV", "production")
	tempDir := t.TempDir()
	store, err := NewStore(tempDir)
	if err != nil {
		t.Fatalf("failed to create store: %v", err)
	}

	bucket := NewBucket(60*time.Second, store)

	// Stream 3 songs
	bucket.RecordPing("s-1", "Song 1", "Artist 1", "in-bom", "https://cover1.jpg")
	bucket.RecordPing("s-1", "Song 1", "Artist 1", "in-bom", "https://cover1.jpg")
	bucket.RecordPing("s-2", "Song 2", "Artist 2", "in-del", "https://cover2.jpg")

	snap := bucket.GetSnapshot()
	if snap.GlobalKPIs.StreamsToday != 3 {
		t.Errorf("expected 3 streams today, got %d", snap.GlobalKPIs.StreamsToday)
	}
	if len(snap.DailyTop10) != 2 {
		t.Fatalf("expected 2 songs in DailyTop10, got %d", len(snap.DailyTop10))
	}
	if snap.DailyTop10[0].ID != "s-1" || snap.DailyTop10[0].Plays != 2 {
		t.Errorf("expected Song 1 with 2 plays, got %+v", snap.DailyTop10[0])
	}
	if len(snap.WeeklyTop10) != 2 || len(snap.MonthlyTop10) != 2 {
		t.Errorf("expected 2 songs in Weekly and Monthly top 10")
	}

	// Close bucket
	if err := bucket.Close(); err != nil {
		t.Fatalf("failed to close bucket: %v", err)
	}

	// Reopen in a new bucket instance with same directory
	store2, err := NewStore(tempDir)
	if err != nil {
		t.Fatalf("failed to reload store: %v", err)
	}
	bucket2 := NewBucket(60*time.Second, store2)
	defer bucket2.Close()

	snap2 := bucket2.GetSnapshot()
	if snap2.GlobalKPIs.StreamsToday != 3 {
		t.Errorf("expected 3 streams today restored, got %d", snap2.GlobalKPIs.StreamsToday)
	}
	if len(snap2.DailyTop10) != 2 || snap2.DailyTop10[0].ID != "s-1" {
		t.Errorf("expected top songs restored, got %+v", snap2.DailyTop10)
	}
}

