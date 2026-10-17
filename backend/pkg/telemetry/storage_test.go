package telemetry

import (
	"os"
	"path/filepath"
	"testing"
	"time"
)

func TestStoreInMemory(t *testing.T) {
	store, err := NewStore(":memory:")
	if err != nil {
		t.Fatalf("failed to create memory store: %v", err)
	}
	defer store.Close()

	store.RecordPlay("track-1", "Not Like Us", "Kendrick Lamar", "https://cover1.jpg")
	store.RecordPlay("track-1", "Not Like Us", "Kendrick Lamar", "https://cover1.jpg")
	store.RecordPlay("track-2", "Espresso", "Sabrina Carpenter", "https://cover2.jpg")

	if store.GetStreamsToday() != 3 {
		t.Errorf("expected 3 streams today, got %d", store.GetStreamsToday())
	}

	topDaily := store.GetTopSongs(24*time.Hour, 10)
	if len(topDaily) != 2 {
		t.Fatalf("expected 2 top songs, got %d", len(topDaily))
	}

	if topDaily[0].ID != "track-1" || topDaily[0].Plays != 2 {
		t.Errorf("expected track-1 to be #1 with 2 plays, got %+v", topDaily[0])
	}

	if topDaily[1].ID != "track-2" || topDaily[1].Plays != 1 {
		t.Errorf("expected track-2 to be #2 with 1 play, got %+v", topDaily[1])
	}
}

func TestStoreFilePersistenceAndRestart(t *testing.T) {
	tempDir := t.TempDir()

	// 1. Initial session
	store, err := NewStore(tempDir)
	if err != nil {
		t.Fatalf("failed to initialize store in %s: %v", tempDir, err)
	}

	store.RecordPlay("track-a", "Song A", "Artist A", "https://a.jpg")
	store.RecordPlay("track-a", "Song A", "Artist A", "https://a.jpg")
	store.RecordPlay("track-b", "Song B", "Artist B", "https://b.jpg")
	store.UpdateActiveListeners(42)

	if err := store.Close(); err != nil {
		t.Fatalf("failed to close store: %v", err)
	}

	// Verify files exist on disk
	if _, err := os.Stat(filepath.Join(tempDir, "plays.jsonl")); os.IsNotExist(err) {
		t.Fatalf("plays.jsonl does not exist on disk")
	}
	if _, err := os.Stat(filepath.Join(tempDir, "state.json")); os.IsNotExist(err) {
		t.Fatalf("state.json does not exist on disk")
	}

	// 2. Restart session (reopen store from same directory)
	store2, err := NewStore(tempDir)
	if err != nil {
		t.Fatalf("failed to reopen store: %v", err)
	}
	defer store2.Close()

	if store2.GetStreamsToday() != 3 {
		t.Errorf("expected 3 streams today restored from disk, got %d", store2.GetStreamsToday())
	}
	if store2.GetPeakConcurrent() != 42 {
		t.Errorf("expected 42 peak concurrent restored from disk, got %d", store2.GetPeakConcurrent())
	}

	topDaily := store2.GetTopSongs(24*time.Hour, 10)
	if len(topDaily) != 2 {
		t.Fatalf("expected 2 songs restored, got %d", len(topDaily))
	}
	if topDaily[0].ID != "track-a" || topDaily[0].Plays != 2 {
		t.Errorf("unexpected top song: %+v", topDaily[0])
	}
}

func TestStoreCompaction(t *testing.T) {
	tempDir := t.TempDir()
	store, err := NewStore(tempDir)
	if err != nil {
		t.Fatalf("failed to initialize store: %v", err)
	}
	defer store.Close()

	// Add play and run compact
	store.RecordPlay("track-1", "Title", "Artist", "")
	if err := store.CompactLog(); err != nil {
		t.Fatalf("failed to compact log: %v", err)
	}

	top := store.GetTopSongs(24*time.Hour, 10)
	if len(top) != 1 || top[0].ID != "track-1" {
		t.Errorf("expected track-1 after compaction, got %+v", top)
	}
}
