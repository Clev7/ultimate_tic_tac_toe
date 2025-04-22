"use client";

import { useChessClock } from "@/hooks/useChessClock";
import { Player } from "@/types";
import { useState } from "react";
import "../globals.css";
import styles from "./test.module.css";

export default function App() {
  // const [{ p1Time, p2Time }, funcs] = useChessClock();
  const [turn, setTurn] = useState(Player.X);

  return (
    <div className={styles.container}>
      <div id={styles.playerAnnouncer}>
        Current Player: {turn}
      </div>
      <div className={styles.label}>Player 1</div>
      <button
        type="button"
        id={styles.turnButton}
        onClick={() => setTurn((turn) => (turn === Player.X ? Player.O : Player.X))}
      >
        Pass Turn
      </button>
      <div className={styles.label}>Player 2</div>
    </div>
  );
}
