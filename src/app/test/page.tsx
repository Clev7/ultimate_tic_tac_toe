"use client";

import { useChessClock } from "@/hooks/useChessClock";
import { ClockState, Player } from "@/types";
import "../globals.css";
import styles from "./test.module.css";
import { useTurn } from "@/hooks/useTurn";
import { useState } from "react";
import { ChessClock } from "@/components/ChessClock";

export default function App() {
  // const [{ p1Time, p2Time }, funcs] = useChessClock();
  const [turn, toggleTurn] = useTurn(Player.X, Player.O);
  const [clockState, setClockState] = useState(ClockState.PENDING);

  return (
    <div className={styles.container}>
      <div id={styles.playerAnnouncer}>Current Player: {turn}</div>
      <div className={styles.label}>Player 1</div>
      <button type="button" id={styles.turnButton} onClick={toggleTurn}>
        Pass Turn
      </button>
      <button type="button" id={styles.togglePauseButton}>
      {clockState}
      </button>
      <div className={styles.label}>Player 2</div>
    </div>
  );
}
