import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createApp } from '../../src/app.js';
import { FixedClock } from '../support/FixedClock.js';
import { startServer } from '../support/startServer.js';

describe('App', () => {
  let server;

  beforeAll(async () => {
    const clock = new FixedClock('2026-12-01T10:00:00Z');
    server = await startServer(createApp({ clock }));
  });

  afterAll(() => server.close());

  it('verwendet die übergebene Clock statt der Systemzeit', async () => {
    const response = await fetch(`${server.baseUrl}/api/health`);

    expect(await response.json()).toEqual({ status: 'ok', time: '2026-12-01T10:00:00.000Z' });
  });

  it('antwortet auf ungültiges JSON mit HTTP 400 und einer deutschen Meldung', async () => {
    const response = await fetch(`${server.baseUrl}/api/health`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ "name": ',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: { message: 'Der Inhalt der Anfrage ist kein gültiges JSON.' },
    });
  });

  it('antwortet auf einen zu grossen Inhalt mit HTTP 400 und einer deutschen Meldung', async () => {
    const tooLargeBody = JSON.stringify({ text: 'x'.repeat(200_000) });

    const response = await fetch(`${server.baseUrl}/api/health`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: tooLargeBody,
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: { message: 'Der Inhalt der Anfrage ist zu gross.' },
    });
  });

  it('antwortet auf einen unlesbaren Inhalt mit HTTP 400 und einer allgemeinen Meldung', async () => {
    const response = await fetch(`${server.baseUrl}/api/health`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=latin9' },
      body: '{}',
    });

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: { message: 'Der Inhalt der Anfrage kann nicht gelesen werden.' },
    });
  });

  it('antwortet auf eine unbekannte Adresse mit HTTP 404 und nennt sie ohne Query', async () => {
    const response = await fetch(`${server.baseUrl}/api/unbekannt?token=geheim`);

    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({
      error: { message: 'Die Adresse GET /api/unbekannt gibt es nicht.' },
    });
  });
});
