import { ChessClock, ChessClockData, ChessClockMode } from "@/types/ChessClock";
import { useTimer } from "./useTimer";
import { Player } from "@/types";
import { useState } from "react";
import { useTurn } from "./useTurn";

export function useChessClock(
  p1InitTime: number,
  p2InitTime?: number,
  incrementInSeconds?: number,
  delayInSeconds?: number,
) {
  const { NOT_STARTED, IN_PROGRESS, PAUSED, P1_TIMEOUT, P2_TIMEOUT } = ChessClockMode;

  const p1Timer = useTimer(p1InitTime);

  // Allows for one value to be passed instead
  const p2Timer = useTimer(p2InitTime ?? p1InitTime);

  const [turn, toggleTurn] = useTurn(Player.X, Player.O);
  const [mode, setMode] = useState(NOT_STARTED);

  // Not sure if I'll need this, but I might as well have them around here
  const [increment, setIncrement] = useState(incrementInSeconds ?? 0);
  const [delay, setDelay] = useState(delayInSeconds ?? 0);

  const chessClock: ChessClockData = {
    p1Timer,
    p2Timer,
    increment,
    delay,
    turn,
    mode,
  };

  function start(): void {
    if (mode != NOT_STARTED) {
      console.log("Invalid mode: " + mode);
      return;
    }

    // Apply delay if there is one
    setTimeout(() => {
      p1Timer.start();
      setMode(IN_PROGRESS);
    }, delay ?? 0);
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

    if (turn === Player.X) {
      p1Timer.stop();
      p2Timer.addTime(increment);
      p2Timer.start();
    } else {
      p2Timer.stop();
      p1Timer.addTime(increment);
      p1Timer.start();
    }
  }

  function getTimes(): [number, number] {
    return [p1Timer.getTime(), p2Timer.getTime()]
  }

  return {
    data: chessClock,
    start,
    stop,
    reset,
    passTurn,
    getTimes
  };
}
