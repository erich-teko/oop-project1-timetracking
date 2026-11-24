import express from 'express';
import { createHealthRouter } from './api/routes/healthRouter.js';

/**
 * Composition Root: Hier werden alle Objekte erzeugt und verbunden.
 * Klassen erzeugen ihre Abhängigkeiten nie selbst (AGENTS.md, Kapitel 3).
 */
export function createApp() {
  const app = express();

  app.use('/api/health', createHealthRouter());

  return app;
}
