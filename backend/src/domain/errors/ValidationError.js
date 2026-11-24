import { DomainError } from './DomainError.js';

/**
 * Eine Eingabe ist ungültig, zum Beispiel zu kurz oder im falschen Format.
 * Die API antwortet mit HTTP 400.
 */
export class ValidationError extends DomainError {
  #field;

  /**
   * @param {string} message Meldung für den Benutzer
   * @param {{ field?: string, cause?: unknown }} [options]
   *   field: betroffenes Eingabefeld, damit das Frontend den Fehler dort anzeigt (NFR-03)
   */
  constructor(message, { field, cause } = {}) {
    super(message, { cause });
    this.#field = field;
  }

  /** @returns {string | undefined} das betroffene Feld, falls bekannt */
  get field() {
    return this.#field;
  }
}
