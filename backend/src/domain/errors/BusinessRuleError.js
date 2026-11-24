import { DomainError } from './DomainError.js';

/**
 * Eine Aktion verletzt eine Fachregel aus Kapitel 5 von L2,
 * zum Beispiel eine Zeit auf einem abgeschlossenen Projekt.
 * Die API antwortet mit HTTP 409.
 */
export class BusinessRuleError extends DomainError {}
