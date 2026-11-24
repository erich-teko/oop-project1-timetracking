import express from 'express';
import { SystemClock } from './domain/clock/SystemClock.js';
import { createJsonBodyParser } from './api/middleware/jsonBodyParser.js';
import { createDemoUserMiddleware } from './api/middleware/demoUser.js';
import { notFoundHandler } from './api/middleware/notFoundHandler.js';
import { createErrorHandler } from './api/middleware/errorHandler.js';
import { createHealthRouter } from './api/routes/healthRouter.js';

/** ID des Demo-Benutzers aus den Seed-Daten (#58). Entfällt mit dem Login aus #64. */
const DEMO_USER_ID = 1;

/**
 * Composition Root: Hier werden alle Objekte erzeugt und verbunden.
 * Klassen erzeugen ihre Abhängigkeiten nie selbst (AGENTS.md, Kapitel 3).
 *
 * Tests ersetzen einzelne Abhängigkeiten, zum Beispiel die Clock durch eine feste Zeit.
 *
 * @param {object} [overrides]
 * @param {import('./domain/clock/Clock.js').Clock} [overrides.clock] Quelle der aktuellen Zeit
 * @param {{ error: Function }} [overrides.logger] Ziel für unerwartete Fehler
 */
export function createApp({ clock = new SystemClock(), logger = console } = {}) {
  const app = express();
  app.disable('x-powered-by');

  app.use(createJsonBodyParser());
  app.use('/api', createDemoUserMiddleware({ userId: DEMO_USER_ID }));

  app.use('/api/health', createHealthRouter({ clock }));

  // Diese beiden stehen immer am Schluss, nach allen Routen.
  app.use(notFoundHandler);
  app.use(createErrorHandler({ logger }));

  return app;
}
