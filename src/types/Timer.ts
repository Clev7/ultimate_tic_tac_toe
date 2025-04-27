// frame rendered individually.
export enum TimerMode {
  PENDING = "Pending",
  TIMEOUT = "Timeout",
  IN_PROGRESS = "In Progress",
}

export interface Timer {
  startStamp: number | null;
  pauseStamp: number | null;
  totalPauseTime: number;
  mode: TimerMode;
  initTime: number;
}
