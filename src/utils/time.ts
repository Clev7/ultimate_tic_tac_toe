interface Result {
  hours: number;
  minutes: number;
  seconds: number;
}

export const parseTime = (time: string): Result | null => {
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

export const getSeconds = ({ hours, minutes, seconds }: Result): number => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const getHMS = (totalSeconds: number) => {
  const hours = totalSeconds / 3600;
  const minutes = totalSeconds / 60;
  const seconds = totalSeconds % 3600;

  return [hours, minutes, seconds];
};
