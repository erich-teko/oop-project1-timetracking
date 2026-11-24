import { describe, expect, it, vi } from 'vitest';
import { createErrorHandler } from '../../../src/api/middleware/errorHandler.js';
import { ValidationError } from '../../../src/domain/errors/ValidationError.js';
import { BusinessRuleError } from '../../../src/domain/errors/BusinessRuleError.js';

/** Nachbildung der Express-Antwort, die Status und Inhalt festhält. */
function fakeResponse({ headersSent = false } = {}) {
  return {
    headersSent,
    statusCode: undefined,
    body: undefined,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

function handle(error, response = fakeResponse()) {
  const logger = { error: vi.fn() };
  const next = vi.fn();

  createErrorHandler({ logger })(error, {}, response, next);

  return { response, logger, next };
}

describe('Fehler-Middleware', () => {
  it('übersetzt einen ValidationError in HTTP 400 mit Meldung und Feld', () => {
    const { response } = handle(new ValidationError('Der Name fehlt.', { field: 'name' }));

    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: { message: 'Der Name fehlt.', field: 'name' } });
  });

  it('übersetzt einen BusinessRuleError in HTTP 409 mit Meldung', () => {
    const { response } = handle(new BusinessRuleError('Das Projekt ist abgeschlossen.'));

    expect(response.statusCode).toBe(409);
    expect(response.body).toEqual({ error: { message: 'Das Projekt ist abgeschlossen.' } });
  });

  it('antwortet bei einem unerwarteten Fehler mit HTTP 500 ohne technische Details (NFR-03)', () => {
    const { response, logger } = handle(new TypeError('Cannot read properties of undefined'));

    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({
      error: { message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte später erneut versuchen.' },
    });
    expect(logger.error).toHaveBeenCalledOnce();
  });

  it('überlässt den Fehler Express, wenn die Antwort schon begonnen hat', () => {
    const error = new ValidationError('Der Name fehlt.');

    const { response, next } = handle(error, fakeResponse({ headersSent: true }));

    expect(next).toHaveBeenCalledWith(error);
    expect(response.statusCode).toBeUndefined();
  });
});
