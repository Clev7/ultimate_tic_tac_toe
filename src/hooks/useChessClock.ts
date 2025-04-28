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

  const [currentPlayer, toggleCurrentPlayer] = useTurn(Player.X, Player.O);
  const [mode, setMode] = useState(NOT_STARTED);

  // Not sure if I'll need this, but I might as well have them around here
  const [increment, setIncrement] = useState(incrementInSeconds ?? 0);
  const [delay, setDelay] = useState(delayInSeconds ?? 0);

  const chessClock: ChessClockData = {
    p1Timer,
    p2Timer,
    increment,
    delay,
    currentPlayer: turn,
    mode,
  };

  function startClock() {
    if (chessClock.mode != NOT_STARTED) {
      console.log("Invalid mode");
      return chessClock;
    }

    // Apply delay if there is one
    setTimeout(() => {
      let res: ChessClockData = structuredClone(chessClock);
      res.p1Timer.start();
      return res;
    }, delay ?? 0);

    return res;
  }

  function pauseClock() {

  }

  function resetClock() {}
  function passTurn() {
  }

  return {
    data: chessClock,
    pauseClock
  }
}
