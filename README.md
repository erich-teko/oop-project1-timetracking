# oop-project1-timetracking
TEKO OOP Projektarbeit 1 (JS)

## Voraussetzungen

- Node.js 24 und npm

## Installation und Start

```bash
npm install
npm start
```

Das Backend läuft danach auf <http://localhost:3000>.  
Ob es läuft, zeigt <http://localhost:3000/api/health>.

Für die Entwicklung startet `npm run dev` das Backend neu, sobald sich eine Datei ändert.

Den Port ändert die Umgebungsvariable `PORT`.  
Dafür `backend/.env.example` nach `backend/.env` kopieren und anpassen.

## Tests

```bash
npm test
npm run coverage
```

`npm test` führt alle Tests aus. Sie brauchen keine Datenbank.  
`npm run coverage` zeigt zusätzlich die Abdeckung pro Ordner, also auch für `src/domain`.  
Liegt die Domänenschicht unter 70 % Zeilenabdeckung, schlägt der Befehl fehl (NFR-11).  
Den ausführlichen Bericht öffnet `backend/coverage/index.html` im Browser.

## Codequalität

```bash
npm run lint
```

ESLint prüft das ganze Repository und muss 0 Fehler melden (NFR-13).  
Vor jedem Commit müssen `npm test` und `npm run lint` fehlerfrei laufen.

## Automatische Prüfung

Bei jedem Pull Request auf `main` laufen Lint und Tests mit Abdeckung in GitHub Actions.  
Der Workflow steht in [`.github/workflows/ci.yml`](.github/workflows/ci.yml).  
Ein roter Lauf zeigt den Pull Request als fehlgeschlagen an.

## Visual Studio Code

Am einfachsten öffnet man `oop-project1-timetracking.code-workspace` über Datei → "Arbeitsbereich aus Datei öffnen".  
Wer nur den Ordner öffnet, erhält keine Empfehlungen und keine Konfigurationen.

### Erweiterungen installieren

VS Code schlägt die Erweiterungen nur vor, es installiert sie nicht.  
Ohne die Erweiterung Vitest fehlen die Testansicht und die Buttons zum Starten einzelner Tests.

```bash
code --install-extension dbaeumer.vscode-eslint
```

```bash
code --install-extension vitest.explorer
```

Danach VS Code neu laden: Ctrl+Shift+P, dann "Developer: Reload Window".

| Erweiterung | Nutzen |
|---|---|
| ESLint (`dbaeumer.vscode-eslint`) | Zeigt Lint-Fehler direkt im Code und korrigiert beim Speichern |
| Vitest (`vitest.explorer`) | Testansicht mit dem Reagenzglas-Symbol links, Buttons ▶ neben jedem `describe` und `it` |

Erscheinen die Tests nicht, hilft die Ausgabe unter Ansicht → Ausgabe → "Vitest".

### Starten und Debuggen

In der Ansicht "Ausführen und Debuggen" stehen diese Konfigurationen bereit:

| Konfiguration | Zweck |
|---|---|
| Backend starten (npm run dev) | Startet das Backend mit Neustart bei Änderungen |
| Tests: alle (Vitest) | Führt alle Tests im Debugger aus |
| Tests: aktuelle Datei (Vitest) | Führt die offene Testdatei im Debugger aus |
| Tests: Abdeckung (Vitest) | Erzeugt den Abdeckungsbericht |

Haltepunkte greifen in allen Konfigurationen.

## Aufbau

Das Repository ist ein npm-Workspace.  
Alle Befehle laufen im Hauptverzeichnis.

| Ordner | Inhalt |
|---|---|
| `backend/src/api` | REST-API mit Express: Routen und Middleware |
| `backend/src/services` | Anwendungsfälle, laden und speichern über Repositories |
| `backend/src/domain` | Domänenklassen mit den Fachregeln, ohne Express und Prisma |
| `backend/src/repositories` | Datenzugriff, der einzige Ort mit Prisma (NFR-12) |
| `backend/src/app.js` | Composition Root: erzeugt und verbindet alle Objekte |
| `backend/src/server.js` | Startet den Server |

Die Regeln zur Architektur stehen in [`AGENTS.md`](AGENTS.md), Kapitel 3.

## Fehler der API

Fehler kommen immer im selben JSON-Format zurück:

```json
{ "error": { "message": "Der Name fehlt.", "field": "name" } }
```

`field` fehlt, wenn der Fehler kein Eingabefeld betrifft.

| Fehler | HTTP-Status |
|---|---|
| `ValidationError`: ungültige Eingabe oder ungültiges JSON | 400 |
| Unbekannte Adresse | 404 |
| `BusinessRuleError`: Verletzung einer Fachregel | 409 |
| Unerwarteter Fehler, ohne technische Details (NFR-03) | 500 |

## Dokumentation

Die Projektdokumentation liegt im Ordner [`docs`](docs/README.md).

## KI-Vorgaben

Die Vorgaben für KI-Assistenten stehen in [`AGENTS.md`](AGENTS.md).  
Claude Code liest sie über `CLAUDE.md`, GitHub Copilot über `.github/copilot-instructions.md`.
