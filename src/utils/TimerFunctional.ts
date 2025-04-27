// This approach is probably the closest to functional programming.
// This version involves no mutation. Instead, new objects are created
// and returned. This makes sense since it react saves the state for each
// frame rendered individually.
enum TimerMode {
  PENDING = "Pending",
  TIMEOUT = "Timeout",
  IN_PROGRESS = "In Progress",
}

interface Timer {
  startStamp: number | null;
  pauseStamp: number | null;
  totalPauseTime: number;
  mode: TimerMode;
  initTime: number;
}

export function initTimer(initTimeInSeconds: number): Timer {
  return {
    startStamp: null,
    pauseStamp: null,
    totalPauseTime: 0,
    mode: TimerMode.PENDING,
    initTime: initTimeInSeconds,
  };
}

export function toggleTimer(timer: Timer): Timer {
  if (timer.mode === TimerMode.TIMEOUT) {
    console.log("Timer already timed out");
    return timer;
  }

  let res = structuredClone(timer);

  // PENDING: About to start or unpause the timer
  if (timer.mode === TimerMode.PENDING) {
    if (timer.startStamp == null) {
      res.startStamp = Date.now();
    } else {
      res.totalPauseTime += Date.now() - res.pauseStamp!;
      // pauseStamp is now stale. Set to null
      res.pauseStamp = null;
    }
    res.mode = TimerMode.IN_PROGRESS;
  } else {
    res.pauseStamp = Date.now();
  }

  return res;
}

export function getTime(timer: Timer): number {
  if (timer.startStamp == null) {
    return -1;
  }

  console.log("startStamp is " + timer.startStamp);

  return Date.now() - timer.startStamp + timer.totalPauseTime;
}

// Just syntactic sugar really
function resetTimer(timer: Timer): Timer {
  return initTimer(timer.initTime);
}
