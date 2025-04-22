import { Player } from "@/types";
import { useRef, useState } from "react";

export const useChessClock = (
  p1StartSeconds: number,
  p2StartSeconds: number,
  currentPlayer: Player,
  togglePlayer: () => void,
  onTimeout: (currentPlayer: Player) => void,
) => {
  const [p1Time, setP1Time] = useState(p1StartSeconds);
  const [p2Time, setP2Time] = useState(p2StartSeconds);

  // const p1Timer = useRef(
  //   setInterval(() => {
  //     if (p1Time) {
  //       setP1Time(p1Time - 1);
  //     } else {
  //       onTimeout(currentPlayer);
  //     }
  //   }, 1000),
  // );
  // const p2Timer = useRef(
  //   setInterval(() => {
  //     if (p2Time) {
  //       setP2Time(p2Time - 1);
  //     } else {
  //       onTimeout(currentPlayer);
  //     }
  //   }, 1000),
  // );

  const togglePause = () => {
    // Should I start or should I stop?
    // Might need a useRef for that
    // clearInterval(p1Timer.current);
    // clearInterval(p2Timer.current);

    let isPaused = useRef(false);
    let startTime = useRef(Date.now)
  };
  const resetGame = () => {
    clearInterval(p1Timer.current);
    clearInterval(p2Timer.current);

    setP1Time(p1StartSeconds);
    setP2Time(p2StartSeconds);
  };

  return [
    { p1Time, p2Time },
    {
      togglePause,
      resetGame,
    },
  ];
};
