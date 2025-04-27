export interface Timer {
  toggleTimer: () => void;
  getTime: () => number;
  resetTimer: () => void;
}

class ChessClock {
  // # means private
  #startTime: number | null
  #pauseStamp: number | null
  #totalPauseTime: number
  #mode: string

  constructor(initTimeInSeconds: number) {
    this.#startTime = null;
    this.#pauseStamp = null;
    this.#totalPauseTime = 0;
    this.#mode = "PENDING";
  }

  toggleTimer(): void {
    if (this.#mode === "TIMEOUT") return;

    // PENDING: About to start or unpause the timer
    if (this.#mode === "PENDING") {
      if (this.#startTime == null) {
        this.#startTime = Date.now();
      } else {
        this.#totalPauseTime += Date.now() - this.#pauseStamp!;
        // pauseStamp is now stale. Set to null
        this.#pauseStamp = null;
      }
      this.#mode = "IN_PROGRESS";
    } else {
      // By this point, since we're pausing again, there
      // shouldn't be any more calculation of pause time
      this.#pauseStamp = Date.now();
    }
  }

  // Using closures in this way
  // performs the binding more explicitly
  // than using something like "this",
  // whose value can only ever be found out at runtime
  // since functions can't actually be "owned" in Javascript.
  //
  // You could technically use classes too.
  getTime(): number {
    if (startTime == null) {
      return -1;
    }

    console.log("startTime is " + startTime);

    return Date.now() - startTime + this.#totalPauseTime;
  }

  resetTimer(): void {
    console.log("Resetting timer");
    this.#startTime = null;
    this.#pauseStamp = null;
    this.#totalPauseTime = 0;
    this.#mode = "PENDING";
  }
}

const timer: Timer = init(3000);
timer.toggleTimer();

const otherTimer: Timer = init(1000);

const timerGet = timer.getTime;

setTimeout(() => {}, 1000);

let startTime = 50;
(() => {
  timerGet();
})()
