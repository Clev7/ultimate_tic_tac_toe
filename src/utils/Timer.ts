// interface Timer {
//   toggleTimer: () => void;
//   getTime: () => number;
//   resetTimer: () => void;
// }

export function init(initTimeInSeconds: number) {
  let startTime: number | null = null;
  let pauseStamp: number | null = null;
  let totalPauseTime = 0;
  let mode = "PENDING";

  function toggleTimer(): void {
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

  // Using closures in this way
  // performs the binding more explicitly
  // than using something like "this",
  // whose value can only ever be found out at runtime
  // since functions can't actually be "owned" in Javascript.
  //
  // You could technically use classes too.
  function getTime(): number {
    if (startTime == null) {
      return -1;
    }

    console.log("startTime is " + startTime);

    return Date.now() - startTime + totalPauseTime;
  }

  function resetTimer(): void {
    console.log("Resetting timer");
    startTime = null;
    pauseStamp = null;
    totalPauseTime = 0;
    mode = "PENDING";
  }

  return { toggleTimer, getTime, resetTimer } as Timer;
}
