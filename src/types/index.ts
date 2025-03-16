import { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react";

export type UtttBoard = BoardState[][];

export interface UtttBoardWrapper {
  utttBoard: UtttBoard
  setUtttBoard: Dispatch<SetStateAction<UtttBoard>>
}

export type BoardState = string[];

export interface BoardWrapper {
	utttb: UtttBoardWrapper,
	row: number,
	col: number,
	playerState: Player
}

export interface Player {
  currentPlayer: string,
  setCurrentPlayer: Dispatch<SetStateAction<string>>
}


export interface borderObj {
	borders: string,
	children: ReactNode,
	playerState: Player
}