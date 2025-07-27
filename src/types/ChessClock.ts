import { Player } from ".";
import { Timer } from "./Timer";

export enum ChessClockMode {
  NOT_STARTED = "Not started",
  PAUSED = "Paused",
  IN_PROGRESS = "In progress",
  P1_TIMEOUT = "Player 1 Timed out",
  P2_TIMEOUT = "Player 2 Timed out",
  UNINITIALIZED = "Uninitialized"
}

export interface ChessClockData {
  p1Timer: Timer;
  p2Timer: Timer;
  increment?: number;
  delay?: number;
  turn: Player;
  mode: ChessClockMode;
}

export interface ChessClock {
  data: ChessClockData;
  start: () => void;
  stop: () => void;
  reset: () => void;
  passTurn: () => void;
  getTimes: () => [number, number];
}

export interface ChessClockProps {
  p1Time: string;
  p2Time: string;
  increment?: number;
  delay?: number;
  turn: Player;
  mode: ChessClockMode;
  onError: (message: string) => void;
  passTurn: () => void;
  reset: () => void;
  start: () => void;
  stop: () => void;
}