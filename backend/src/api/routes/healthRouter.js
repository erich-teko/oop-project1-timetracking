import { Router } from 'express';

/**
 * Einfacher Endpoint, mit dem Frontend und Betrieb prüfen,
 * ob das Backend läuft.
 */
export function createHealthRouter() {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({ status: 'ok' });
  });

  return router;
}
