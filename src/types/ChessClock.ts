import { Player } from ".";
import { Timer } from "./Timer";

/* export enum chessClockState {
  NOT_STARTED = "Not Started",
  PLAYING = "Playing",
  PAUSED = "Paused",
} */

export enum ChessClockMode {
  NOT_STARTED = "Not started",
  PAUSED = "Paused",
  IN_PROGRESS = "In progress",
  P1_TIMEOUT = "Player 1 Timed out",
  P2_TIMEOUT = "Player 2 Timed out"
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
