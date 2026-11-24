import { Router } from 'express';

/**
 * Einfacher Endpoint, mit dem Frontend und Betrieb prüfen,
 * ob das Backend läuft. Die Zeit stammt aus der injizierten Clock.
 *
 * @param {{ clock: import('../../domain/clock/Clock.js').Clock }} dependencies
 */
export function createHealthRouter({ clock }) {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({ status: 'ok', time: clock.now().toISOString() });
  });

  return router;
}
