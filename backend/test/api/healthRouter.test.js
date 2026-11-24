import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../../src/app.js';
import { startServer } from '../support/startServer.js';

describe('GET /api/health', () => {
  let server;

  beforeAll(async () => {
    server = await startServer(createApp());
  });

  afterAll(() => server.close());

  it('meldet, dass das Backend läuft', async () => {
    const response = await fetch(`${server.baseUrl}/api/health`);

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({ status: 'ok' });
  });
});
