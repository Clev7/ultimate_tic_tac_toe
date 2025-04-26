import { init as initTimer, Timer } from "./Timer";

export enum Turn {
  P1 = "Player 1",
  P2 = "Player 2",
}

interface ChessClock {
  // We're assuming timer1 goes first
  timer1: Timer;
  timer2: Timer;
  turn: Turn;
}

export function resetTimers(chessClock: ChessClock): void {
  chessClock.timer1.resetTimer();
  chessClock.timer2.resetTimer();
}

export function initChessClock(t1StartSeconds: number, t2StartSeconds: number) {
  return {
    timer1: initTimer(t1StartSeconds),
    timer2: initTimer(t2StartSeconds),
    turn: Turn.P1,
  } as ChessClock;
}

export function startClock(chessClock: ChessClock) {
  chessClock.timer1.toggleTimer();
}

export function passTurn(chessClock: ChessClock) {
  const { timer1, timer2 } = chessClock;

  timer1.toggleTimer();
  timer2.toggleTimer();
}

export function togglePauseClock(chessClock: ChessClock): void {
  const { timer1, timer2, turn } = chessClock;

  if (turn == Turn.P1) {
    timer1.toggleTimer();
  } else {
    timer2.toggleTimer();
  }
}
