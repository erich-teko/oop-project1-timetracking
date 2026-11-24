import { Router } from 'express';

/**
 * Infoseite des Backends: nennt Name, Version und die verfügbaren Adressen.
 * Wer das Backend im Browser aufruft, sieht so, dass es läuft und wo es weitergeht.
 *
 * @param {{ name: string, version: string, endpoints: Record<string, string> }} info
 */
export function createInfoRouter({ name, version, endpoints }) {
  const router = Router();

  router.get('/', (req, res) => {
    res.json({ name, version, endpoints });
  });

  return router;
}
