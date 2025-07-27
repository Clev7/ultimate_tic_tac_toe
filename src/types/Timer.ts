// frame rendered individually.
export enum TimerMode {
  PENDING = "Pending",
  TIMEOUT = "Timeout",
  IN_PROGRESS = "In Progress",
  UNINITIALIZED = "Uninitialized",
  PAUSED = "Paused"
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
  init: (initTimeInSeconds: number) => void,
  getTime: () => number,
  addTime: (time: number) => void,
  start: () => void,
  stop: () => void,
  reset: () => void
}