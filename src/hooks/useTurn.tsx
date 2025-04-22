import { useState } from "react";

export const useTurn = (initialState: any, otherState: any) => {
  const [turn, setTurn] = useState(initialState);

  return [
    turn,
    () => setTurn(turn === initialState ? otherState : initialState),
  ];
};
