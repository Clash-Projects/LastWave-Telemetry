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
