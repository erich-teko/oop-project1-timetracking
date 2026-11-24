import { createApp } from './app.js';
import { loadConfig } from './config.js';

function startServer() {
  const config = loadConfig();
  const app = createApp();

  app.listen(config.port, () => {
    console.log(`Backend läuft auf http://localhost:${config.port}`);
  });
}

try {
  startServer();
} catch (error) {
  // Nur die Meldung zeigen. Ein Stacktrace würde sie bei einem Konfigurationsfehler verdecken.
  console.error(`Das Backend startet nicht. ${error.message}`);
  process.exitCode = 1;
}
