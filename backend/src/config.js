/**
 * Liest die Einstellungen aus den Umgebungsvariablen.
 * Fehlt eine Variable, gilt der Standardwert für die lokale Entwicklung.
 * Ein ungültiger Wert bricht den Start mit einer klaren Meldung ab.
 */
const DEFAULT_PORT = 3000;
const MIN_PORT = 1;
const MAX_PORT = 65535;

export function loadConfig(env = process.env) {
  return {
    port: parsePort(env.PORT),
  };
}

function parsePort(value) {
  if (value === undefined || value.trim() === '') {
    return DEFAULT_PORT;
  }

  const port = Number(value);
  if (!Number.isInteger(port) || port < MIN_PORT || port > MAX_PORT) {
    throw new Error(`PORT muss eine ganze Zahl von ${MIN_PORT} bis ${MAX_PORT} sein, erhalten: "${value}".`);
  }
  return port;
}
