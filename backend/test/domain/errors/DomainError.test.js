import { describe, expect, it } from 'vitest';
import { DomainError } from '../../../src/domain/errors/DomainError.js';
import { ValidationError } from '../../../src/domain/errors/ValidationError.js';
import { BusinessRuleError } from '../../../src/domain/errors/BusinessRuleError.js';

describe('ValidationError', () => {
  it('enthält die Meldung und das betroffene Feld', () => {
    const error = new ValidationError('Der Name fehlt.', { field: 'name' });

    expect(error).toBeInstanceOf(DomainError);
    expect(error.name).toBe('ValidationError');
    expect(error.message).toBe('Der Name fehlt.');
    expect(error.field).toBe('name');
  });

  it('kommt ohne Feld aus', () => {
    expect(new ValidationError('Die Anfrage ist ungültig.').field).toBeUndefined();
  });

  it('behält den ursprünglichen Fehler als Ursache', () => {
    const cause = new SyntaxError('Unexpected end of JSON input');

    expect(new ValidationError('Ungültig.', { cause }).cause).toBe(cause);
  });
});

describe('BusinessRuleError', () => {
  it('ist ein Domänenfehler mit eigenem Namen', () => {
    const error = new BusinessRuleError('Das Projekt ist abgeschlossen.');

    expect(error).toBeInstanceOf(DomainError);
    expect(error.name).toBe('BusinessRuleError');
    expect(error.message).toBe('Das Projekt ist abgeschlossen.');
  });
});
