/**
 * Basisklasse aller fachlichen Fehler.
 * Die Meldung richtet sich an den Benutzer und ist darum auf Deutsch.
 * Die API übersetzt die Unterklassen in HTTP-Status.
 */
export class DomainError extends Error {
  /**
   * @param {string} message Meldung für den Benutzer
   * @param {{ cause?: unknown }} [options] ursprünglicher Fehler, falls vorhanden
   */
  constructor(message, options) {
    super(message, options);
    this.name = new.target.name;
  }
}
