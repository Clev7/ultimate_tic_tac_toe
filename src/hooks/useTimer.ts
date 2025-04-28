import { useState } from "react";
import { TimerMode, Timer, TimerData } from "@/types/Timer";

// TODO: Implement increments and delays
export function useTimer(initTimeInSeconds: number): Timer {
  const { TIMEOUT, IN_PROGRESS, PENDING } = TimerMode;

  const [timer, setTimer] = useState({
    startStamp: null,
    pauseStamp: null,
    totalPauseTime: 0,
    mode: PENDING,
    initTime: initTimeInSeconds,
  } as TimerData); // You need the cast otherwise your keys are no longer nullable

  // I think this needs to be converted into a useRef or a useMemo.
  // hmmmm which one?
  //
  // Apparently neither according to someone on discord
  function getTime(): number {
    if (timer.startStamp == null) {
      return -1;
    }

    console.log("startStamp is " + timer.startStamp);

    return Date.now() - timer.startStamp + timer.totalPauseTime;
  }

  function start() {
    setTimer((timer) => {
      if (timer.mode === TIMEOUT) {
        console.log("Timer already timed out");
        return timer;
      }

      if (timer.mode === IN_PROGRESS) {
        console.log("Timer already started");
        return timer;
      }

      let res: TimerData = structuredClone(timer);

      res.startStamp = Date.now();
      res.mode = IN_PROGRESS;
      return res;
    });
  }

  function stop() {
    setTimer((timer) => {
      if (timer.mode === TIMEOUT) {
        console.log("Timer already timed out");
        return timer;
      }

      if (timer.mode === PENDING) {
        console.log("Timer is not currently counting down");
        return timer;
      }

      let res: TimerData = structuredClone(timer);

      res.pauseStamp = Date.now();
      return res;
    });
  }

  function resetTimer(): void {
    setTimer((timer) => {
      let res: TimerData = structuredClone(timer);
      res.startStamp = null;
      res.pauseStamp = null;
      res.totalPauseTime = 0;
      res.mode = PENDING;

      return res;
    });
  }

  function addTime(time: number): void {
    setTimer((timer) => {
      let res: TimerData = structuredClone(timer);

      if (res.startStamp == null) {
        res.initTime += time;
        return res;
      }

      res.startStamp -= 5;
      return res;
    });
  }

  return {
    data: timer,
    start,
    stop,
    resetTimer,
    getTime,
    addTime,
  };
}
