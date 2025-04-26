import { ChessClockProps, ClockState, Player } from "@/types";
import { getSeconds, getTime } from "@/utils/ChessClock";
import { useEffect, useState } from "react";

const getHMS = (seconds: number) => {};

export function ChessClock(props: ChessClockProps) {
  let { p1StartTime, p2StartTime, delay, increment } = props;

  const [chessClockState, setChessClockState] = useState(ClockState.PENDING);

  const startTime = useRef(Date.now());

  let p1Time = getTime(p1StartTime);
  let p2Time = getTime(p2StartTime);

  if (p1Time == null) {
  }

  let p1TotalSeconds = getSeconds(p1Time);
  let p2TotalSeconds = getSeconds(p2Time);

  return (
    <div>
      Hi There!
      <div></div>
      <div></div>
    </div>
  );
}
