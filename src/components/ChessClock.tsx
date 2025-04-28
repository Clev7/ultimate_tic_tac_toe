import { ChessClockProps, Player } from "@/types";
import * as time from "@/utils/time";
import { useState } from "react";

export function ChessClock(props: ChessClockProps) {
  const { p1Time, p2Time, delay, increment, mode, onError } = props;

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

  // Just for testing for now. Later on we can think
  // of some more complex UI logic
  const p1TotalSeconds = time.getSeconds(p1ParsedTime);
  const p2TotalSeconds = time.getSeconds(p2ParsedTime);

  return (
    <div>
      Chess Clock
      <div>{p1TotalSeconds}</div>
      <div>{p2TotalSeconds}</div>
      <div>
        Increment: {increment}
        <br />
        Delay: {delay}
      </div>
    </div>
  );
}
