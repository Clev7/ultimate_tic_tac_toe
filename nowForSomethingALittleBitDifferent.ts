export function init(initTimeInSeconds: number) {
  let startTime: number | null = null;
  let pauseStamp: number | null = null;
  let totalPauseTime = 0;
  let mode = "PENDING";

  function toggleTimer() {
    if (mode === "TIMEOUT") return;

    // PENDING: About to start or unpause the timer
    if (mode === "PENDING") {
      if (startTime == null) {
        startTime = Date.now();
      } else {
        totalPauseTime += Date.now() - pauseStamp!;
        // pauseStamp is now stale. Set to null
        pauseStamp = null;
      }
      mode = "IN_PROGRESS";
    } else {
      // By this point, since we're pausing again, there
      // shouldn't be any more calculation of pause time
      pauseStamp = Date.now();
    }
  }

  function getTime(): number {
    if (startTime == null) {
      return -1;
    }

    return Date.now() - startTime + totalPauseTime;
  }

  function passTurn(): void {
    if (startTime == null) {
      console.log("Game hasn't started yet");
      return;
    }
  }
}
