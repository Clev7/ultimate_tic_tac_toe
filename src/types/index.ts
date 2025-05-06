import { ReactNode } from "react";
import { ChessClockMode } from "./ChessClock";

export type UtttBoard = BoardState[][];
export type BoardState = string[];

export enum Player {
  X = "X",
  O = "O",
}

export enum BoardResult {
  XWIN = Player.X,
  OWIN = Player.O,
  TIE = "T",
  UNFINISHED = "U",
}

export interface BoardProps {
  board: BoardState;
  Row: number;
  Col: number;
  makeMove: (R: number, C: number, r: number, c: number) => void;
  isFocused: boolean;
}

export interface TileProps {
  onClick: () => void;
  className: string;
  children: string | ReactNode;
}

export interface HighlightProps {
  children: string;
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
}
