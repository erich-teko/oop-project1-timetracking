import { Clock } from './Clock.js';

/** Clock für den Betrieb: liefert die Zeit des Systems. */
export class SystemClock extends Clock {
  now() {
    // Einzige Stelle, an der die aktuelle Zeit direkt gelesen wird.
    return new Date();
  }
}
