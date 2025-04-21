import { ChessClockProps, Player } from "@/types";
import { useState } from "react";

interface Result {
  hours: number;
  minutes: number;
  seconds: number;
}

const getTime = (time: string): Result | null => {
  const regex =
    /(?=.*(?:^\d{1,2}(?:h|m|s)))^(?:(?<hours>\d{1,2})h)? ?(?:(?<minutes>\d{1,2})m)? ?(?:(?<seconds>\d{1,2})s)?$/gm;

  const match = regex.exec(time);

  if (!match || !match.groups) {
    return null;
  }

  let groups = match.groups;

  let hours = parseInt(groups.hours ?? "0");
  let minutes = parseInt(groups.minutes ?? "0");
  let seconds = parseInt(groups.seconds ?? "0");

  console.log("Here's the time! Tada!");
  console.log(hours, minutes, seconds);

  return {
    hours,
    minutes,
    seconds,
  };
};

const getSeconds = ({ hours, minutes, seconds }: Result): number => {
  return hours * 3600 + minutes * 60 + seconds;
};

const getHMS = (seconds: number) => {};

const useChessClock = (p1StartSeconds: number, p2StartSeconds: number, turn: Player) => {
  const [{ p1Time, p2Time }, setTime] = useState({
    p1Time: p1StartSeconds,
    p2Time: p2StartSeconds,
  });

  const togglePause = () => {};
  const resetGame = () => {
    setTime({ p1Time: p1StartSeconds, p2Time: p2StartSeconds });
  };



  return [{ p1Time, p2time }, {}]
};

export function ChessClock(props: ChessClockProps) {
  let { p1StartTime, p2StartTime, delay, increment } = props;

  let p1Time = getTime(p1StartTime);
  let p2Time = getTime(p2StartTime);

  if (p1Time == null) let p1TotalSeconds = getSeconds(p1Time);
  let p2TotalSeconds = getSeconds(p2Time);

  return (
    <div>
      Hi There!
      <div></div>
      <div></div>
    </div>
  );
}
