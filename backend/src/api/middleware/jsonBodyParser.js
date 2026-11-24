import express from 'express';
import { ValidationError } from '../../domain/errors/ValidationError.js';

/** Meldung je Fehlerart des Express-Parsers (`error.type`). */
const MESSAGE_BY_PARSER_ERROR = new Map([
  ['entity.parse.failed', 'Der Inhalt der Anfrage ist kein gültiges JSON.'],
  ['entity.too.large', 'Der Inhalt der Anfrage ist zu gross.'],
]);

const UNREADABLE_BODY_MESSAGE = 'Der Inhalt der Anfrage kann nicht gelesen werden.';

/**
 * Liest JSON aus dem Inhalt der Anfrage.
 * Kann Express den Inhalt nicht lesen, entsteht ein ValidationError.
 * So antwortet die Fehler-Middleware mit HTTP 400 und einer deutschen Meldung.
 */
export function createJsonBodyParser() {
  const parseJson = express.json();

  return (req, res, next) => {
    parseJson(req, res, (error) => {
      next(error ? toValidationError(error) : undefined);
    });
  };
}

function toValidationError(error) {
  const message = MESSAGE_BY_PARSER_ERROR.get(error.type) ?? UNREADABLE_BODY_MESSAGE;
  return new ValidationError(message, { cause: error });
}
