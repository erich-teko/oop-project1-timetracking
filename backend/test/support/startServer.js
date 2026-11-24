/**
 * Startet eine Express-App auf einem freien Port für Integrationstests.
 * Die Tests sprechen die App über das eingebaute fetch an.
 */
export function startServer(app) {
  return new Promise((resolve) => {
    const server = app.listen(0, () => {
      const { port } = server.address();
      resolve({
        baseUrl: `http://localhost:${port}`,
        close: () => new Promise((done) => server.close(done)),
      });
    });
  });
}
