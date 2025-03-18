import { Dispatch, SetStateAction, ReactNode } from "react";

export type UtttBoard = BoardState[][];
export type BoardState = string[];

export interface IBoard {
	utttBoard: UtttBoard,
	setUtttBoard: Dispatch<SetStateAction<UtttBoard>>,
	currentPlayer: string,
	setCurrentPlayer: Dispatch<SetStateAction<string>>,
	Row: number,
	Col: number,
}

export interface ITile extends IBoard {
	row: number,
	col: number,
	borders: string,
	children: ReactNode,
}
