import { useState } from "react";

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

export function useTimer(initTimeInSeconds: number) {
  let [timer, setTimer] = useState({
    startStamp: null,
    pauseStamp: null,
    totalPauseTime: 0,
    mode: TimerMode.PENDING,
    initTime: initTimeInSeconds,
  } as Timer); // You need the cast otherwise your keys are no longer nullable

  // I think this needs to be converted into a useRef or a useMemo.
  // hmmmm which one?
  function getTime(timer: Timer): number {
    if (timer.startStamp == null) {
      return -1;
    }

    console.log("startStamp is " + timer.startStamp);

    return Date.now() - timer.startStamp + timer.totalPauseTime;
  }

  function toggleTimer() {
    setTimer(timer => {
      if (timer.mode === TimerMode.TIMEOUT) {
        console.log("Timer already timed out");
        return timer;
      }

      // Deep clones the timer
      let res: Timer = structuredClone(timer);

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

    })
  }


  function resetTimer(timer: Timer): void {
    setTimer(timer => {
      let res: Timer = structuredClone(timer);
      res.startStamp = null;
      res.pauseStamp = null;
      res.totalPauseTime = 0;
      res.mode = TimerMode.PENDING;

      return res;
    })
  }
}
