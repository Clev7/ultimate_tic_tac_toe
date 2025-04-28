// frame rendered individually.
export enum TimerMode {
  PENDING = "Pending",
  TIMEOUT = "Timeout",
  IN_PROGRESS = "In Progress",
}

export interface TimerData {
  startStamp: number | null;
  pauseStamp: number | null;
  totalPauseTime: number;
  mode: TimerMode;
  initTime: number;
}

export interface Timer {
  data: TimerData,
  getTime: () => number,
  addTime: (time: number) => void,
  start: () => void,
  stop: () => void,
  reset: () => void
}

