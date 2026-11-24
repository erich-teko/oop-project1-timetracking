import { describe, expect, it, vi } from 'vitest';
import { createDemoUserMiddleware } from '../../../src/api/middleware/demoUser.js';

describe('Platzhalter-Middleware für den Demo-Benutzer', () => {
  it('ordnet jede Anfrage dem Demo-Benutzer zu', () => {
    const request = {};
    const next = vi.fn();

    createDemoUserMiddleware({ userId: 1 })(request, {}, next);

    expect(request.userId).toBe(1);
    expect(next).toHaveBeenCalledOnce();
  });
});
