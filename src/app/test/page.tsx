"use client";

import { useChessClock } from "@/hooks/useChessClock";
import { ClockState, Player } from "@/types";
import "../globals.css";
import styles from "./test.module.css";
import { useTurn } from "@/hooks/useTurn";
import { useState } from "react";
import { ChessClock } from "@/components/ChessClock";

export default function App() {

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
