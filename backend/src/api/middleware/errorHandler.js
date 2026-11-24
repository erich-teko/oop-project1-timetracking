import { ValidationError } from '../../domain/errors/ValidationError.js';
import { BusinessRuleError } from '../../domain/errors/BusinessRuleError.js';

/**
 * HTTP-Status je Fehlerklasse der Domäne.
 * Ein neuer Fehlertyp braucht nur einen neuen Eintrag, keine neue if-Abfrage.
 */
const STATUS_BY_ERROR_TYPE = new Map([
  [ValidationError, 400],
  [BusinessRuleError, 409],
]);

const INTERNAL_SERVER_ERROR = 500;
const INTERNAL_ERROR_MESSAGE = 'Ein unerwarteter Fehler ist aufgetreten. Bitte später erneut versuchen.';

/**
 * Express-Middleware, die Fehler in eine JSON-Antwort übersetzt.
 *
 * Antwortformat: `{ "error": { "message": "...", "field": "..." } }`.
 * `field` fehlt, wenn der Fehler kein Eingabefeld betrifft.
 * Unerwartete Fehler werden geloggt. Die Antwort enthält keine technischen Details (NFR-03).
 *
 * @param {{ logger: { error: Function } }} dependencies
 */
export function createErrorHandler({ logger }) {
  // Express erkennt Fehler-Middleware an den vier Parametern.
  return (error, req, res, next) => {
    if (res.headersSent) {
      // Die Antwort läuft schon. Nur Express kann die Verbindung noch sauber beenden.
      next(error);
      return;
    }

    const status = statusFor(error);
    if (status === undefined) {
      logger.error(error);
      res.status(INTERNAL_SERVER_ERROR).json({ error: { message: INTERNAL_ERROR_MESSAGE } });
      return;
    }

    res.status(status).json({ error: { message: error.message, field: error.field } });
  };
}

/** @returns {number | undefined} der Status zum Fehler oder undefined, wenn er unbekannt ist */
function statusFor(error) {
  for (const [errorType, status] of STATUS_BY_ERROR_TYPE) {
    if (error instanceof errorType) {
      return status;
    }
  }
  return undefined;
}
