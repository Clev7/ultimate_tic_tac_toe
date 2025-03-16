import { Dispatch, SetStateAction, ReactNode } from "react";

export type UtttBoard = BoardState[][];

export interface UtttBoardWrapper {
  utttBoard: UtttBoard,
  setUtttBoard: Dispatch<SetStateAction<UtttBoard>>
}

export type BoardState = string[];

export interface BoardWrapper {
	utttb: UtttBoardWrapper,
	Row: number,
	Col: number,
	playerState: Player
}

export interface Player {
  currentPlayer: string,
  setCurrentPlayer: Dispatch<SetStateAction<string>>
}

export interface TileWrapper {
	Row: number,
	Col: number,
	row: number,
	col: number,
	borders: string,
	children: ReactNode,
	playerState: Player,
}