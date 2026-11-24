/**
 * Liefert die aktuelle Zeit.
 *
 * Domäne und Services rufen nie direkt `new Date()` auf, sondern erhalten
 * eine Clock über den Konstruktor. So lassen sich Tests mit einer festen
 * Zeit schreiben (AGENTS.md, Kapitel 3).
 *
 * Abstrakte Basisklasse: Unterklassen setzen `now()` um.
 */
export class Clock {
  constructor() {
    if (new.target === Clock) {
      throw new TypeError('Clock ist abstrakt. Bitte eine Unterklasse verwenden.');
    }
  }

  /** @returns {Date} der aktuelle Zeitpunkt */
  now() {
    throw new Error(`${this.constructor.name} muss now() umsetzen.`);
  }
}
