import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../../src/app.js';
import { startServer } from '../support/startServer.js';
import packageJson from '../../package.json' with { type: 'json' };

describe('Infoseite des Backends', () => {
  let server;

  beforeAll(async () => {
    server = await startServer(createApp());
  });

  afterAll(() => server.close());

  it('GET /api nennt Name, Version und die verfügbaren Adressen', async () => {
    const response = await fetch(`${server.baseUrl}/api`);

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      name: 'Auftragszeiterfassung für Freelancer – Backend',
      version: packageJson.version,
      endpoints: {
        info: '/api',
        health: '/api/health',
      },
    });
  });

  it('GET / leitet auf die Infoseite /api weiter', async () => {
    const response = await fetch(`${server.baseUrl}/`, { redirect: 'manual' });

    expect(response.status).toBe(302);
    expect(response.headers.get('location')).toBe('/api');
  });
});
