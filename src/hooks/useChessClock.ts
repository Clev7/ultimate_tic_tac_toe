import { ChessClock, ChessClockData, ChessClockMode } from "@/types/ChessClock";
import { useTimer } from "./useTimer";
import { Player } from "@/types";
import { useState } from "react";
import { useTurn } from "./useTurn";

export function useChessClock() {
  const { UNINITIALIZED, NOT_STARTED, IN_PROGRESS, PAUSED, P1_TIMEOUT, P2_TIMEOUT } =
    ChessClockMode;

  const p1Timer = useTimer();

  // Allows for one value to be passed instead
  const p2Timer = useTimer();

  const [turn, toggleTurn] = useTurn(Player.X, Player.O);
  const [mode, setMode] = useState(UNINITIALIZED);

  const DEFAULT_VAL = -1;

  // Not sure if I'll need this, but I might as well have them around here
  const [increment, setIncrement] = useState(DEFAULT_VAL);
  const [delay, setDelay] = useState(DEFAULT_VAL);

  let chessClock: ChessClockData = {
    p1Timer,
    p2Timer,
    increment,
    delay,
    turn,
    mode
  };

  function init(
    p1InitTime: number,
    p2InitTime?: number,
    incrementInSeconds?: number,
    delayInSeconds?: number,
  ) {
    p1Timer.init(p1InitTime);
    p2Timer.init(p2InitTime ?? p1InitTime);
    setIncrement(incrementInSeconds ?? 0);
    setDelay(delayInSeconds ?? 0);
    setMode(NOT_STARTED);
  }

  function start(): void {
    if (mode != NOT_STARTED && mode != PAUSED) {
      console.log("Invalid mode: " + mode);
      return;
    }

    // Apply delay if there is one
    setTimeout(() => {
      p1Timer.start();
      setMode(IN_PROGRESS);
    }, delay ?? 0);
  }

  function resume(): void {
    if (mode != PAUSED) {
      console.log("Invalid mode: " + mode);
      return;
    }

    // Should the delay be reapplied if the game
    // was paused? Probably not. Just do a 3 second countdown.
    // Maybe have a 3 second timer for this? Could be nice
    // for display purposes.

    const COUNTDOWN_MS = 3000;
    if (turn === Player.X) {
      setTimeout(() => {
        p1Timer.start();
        setMode(IN_PROGRESS);
      }, COUNTDOWN_MS);
    } else {
      setTimeout(() => {
        p2Timer.start();
        setMode(IN_PROGRESS);
      }, COUNTDOWN_MS);
    }
  }

  function stop() {
    if (mode != IN_PROGRESS) {
      console.log("Invalid mode: " + mode);
      return;
    }

    p1Timer.stop();
    p2Timer.stop();

    setMode(PAUSED);
  }

  function reset() {
    if (mode == NOT_STARTED) {
      console.log("Clock should be already reset");
      return;
    }

    if (mode == IN_PROGRESS) {
      console.log("You must pause the game first before resetting the clock");
      return;
    }

    // Paused or someone timed out
    p1Timer.reset();
    p2Timer.reset();

    if (turn === Player.O) toggleTurn();

    setMode(NOT_STARTED);
  }

  function passTurn() {
    if (mode != IN_PROGRESS) {
      console.log("Invalid mode: " + mode);
      return;
    }

    console.log("Turn: " + turn);

    if (turn === Player.X) {
      p1Timer.stop();
      p2Timer.addTime(increment);
      setTimeout(() => p2Timer.start(), delay ?? 0);
    } else {
      p2Timer.stop();
      p1Timer.addTime(increment);
      setTimeout(() => p1Timer.start(), delay ?? 0);
    }
  }

  function getTimes(): [number, number] {
    return [p1Timer.getTime(), p2Timer.getTime()];
  }

  return {
    data: chessClock,
    init,
    start,
    stop,
    reset,
    passTurn,
    getTimes,
  };
}