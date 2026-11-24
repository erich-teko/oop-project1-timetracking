import { Clock } from '../../src/domain/clock/Clock.js';

/**
 * Clock für Tests: liefert immer denselben Zeitpunkt,
 * bis der Test ihn mit `setTo()` ändert.
 */
export class FixedClock extends Clock {
  #time;

  /** @param {Date | string} time Zeitpunkt, z. B. '2026-12-01T10:00:00+01:00' */
  constructor(time) {
    super();
    this.setTo(time);
  }

  setTo(time) {
    this.#time = new Date(time).getTime();
  }

  now() {
    // Immer ein neues Date, damit ein Aufrufer die Zeit nicht verändern kann.
    return new Date(this.#time);
  }
}
