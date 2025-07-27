import { ChessClockProps, Player } from "@/types";
import * as time from "@/utils/time";
import styles from "@/styles/chessclock.module.css";


export function ChessClock(props: ChessClockProps) {
  const { p1Time, p2Time, delay, turn, increment, mode, onError, passTurn} = props;

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

  // Just for testing for now. Later on we can think
  // of some more complex UI logic
  const p1TotalSeconds = time.getSeconds(p1ParsedTime);
  const p2TotalSeconds = time.getSeconds(p2ParsedTime);

  return (
    <div className={styles.container}>
      <button onClick={turn == Player.X ? passTurn: () => {}} className={styles.label} id={turn == Player.X ? styles.hasTurn : ""}>{time.formatTime(p1ParsedTime)}</button>
      <div id={styles.togglePauseButton}>
        {mode}
      </div>
      <button onClick={turn == Player.O ? passTurn: () => {}} className={styles.label} id={turn == Player.O ? styles.hasTurn : ""}>{time.formatTime(p2ParsedTime)}</button>
    </div>
  );
}