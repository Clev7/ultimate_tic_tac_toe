import { Dispatch, SetStateAction, ReactNode } from "react";

export type UtttBoard = BoardState[][];
export type BoardState = string[];
export type BoardPosition = [Row: number, Col: number]
export enum Player {
	X = "X",
	O = "O"
}

export enum BoardResult {
	XWIN = "X",
	OWIN = "O",
	TIE = "T",
	UNFINISHED = "U"
}

export interface IBoard {
	utttBoard: UtttBoard,
	currentPlayer: Player,
	focusedBoard: BoardPosition,
	boardResults: BoardResult[][],
	setUtttBoard: Dispatch<SetStateAction<UtttBoard>>,
	setCurrentPlayer: Dispatch<SetStateAction<Player>>,
	setFocusedBoard: Dispatch<SetStateAction<BoardPosition>>,
	setBoardResults: Dispatch<SetStateAction<BoardResult[][]>>,
	Row: number,
	Col: number,
}

export interface ITile extends IBoard {
	row: number,
	col: number,
	borders: string,
	children: ReactNode,
}