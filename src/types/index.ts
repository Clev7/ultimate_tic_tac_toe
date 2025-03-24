import { Dispatch, SetStateAction, ReactNode } from "react";

export type UtttBoard = BoardState[][];
export type BoardState = string[];
export type BoardPosition = [Row: number, Col: number]
export enum Player {
	X = "X",
	O = "O"
}

export enum BoardResult {
	XWIN = Player.X,
	OWIN = Player.O,
	TIE = "T",
	UNFINISHED = "U"
}

// Do we even need this as an interface?
export interface IGame {
	utttBoard: UtttBoard,
	currentPlayer: Player,
	focusedBoard: BoardPosition,
	boardResults: BoardResult[][], // do we really need this??
}

export interface ITile {
	children: ReactNode,
}