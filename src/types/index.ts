import { ReactNode } from "react";

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

export interface BoardProps {
	board: BoardState,
	makeMove: () => void
}

export interface TileProps {
	children: ReactNode,
	onClick: () => void
}