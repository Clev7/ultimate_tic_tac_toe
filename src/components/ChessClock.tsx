import { Player } from "@/types";
import { ChessClockMode, ChessClockProps } from "@/types/ChessClock";
import * as time from "@/utils/time";
import styles from "@/styles/chessclock.module.css";

export function ChessClock(props: ChessClockProps) {
  const { p1Time, p2Time, delay, turn, increment, mode, onError, passTurn, start, stop, reset } =
    props;

  const p1ParsedTime = time.parseTime(p1Time);

  if (p1ParsedTime == null) {
    onError("Invalid time for Player 1");
    return;
  }

  const p2ParsedTime = p2Time ? time.parseTime(p2Time) : p1ParsedTime;

  if (p2ParsedTime == null) {
    onError("Invalid time for Player 2");
    return;
  }

  console.log(`props: ${JSON.stringify(props)}`);
  console.log("========================================")

  return (
    <div className={styles.container}>
     {/* TODO: Add functionality to unpause the clock and put it on this button*/}
      <button onClick={start} id={styles.startGameBtn}>
        Start Game
      </button>
      <button onClick={stop} id={styles.stopGameBtn}>
        Stop Game
      </button>
      <button
        onClick={turn == Player.X ? passTurn : () => {}}
        className={styles.label}
        id={turn == Player.X ? styles.hasTurn : ""}
      >
        {time.formatTime(p1ParsedTime)}
      </button>
      <div id={styles.togglePauseButton}>{mode}</div>
      <button
        onClick={turn == Player.O ? passTurn : () => {}}
        className={styles.label}
        id={turn == Player.O ? styles.hasTurn : ""}
      >
        {time.formatTime(p2ParsedTime)}
      </button>
    </div>
  );
}