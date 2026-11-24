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

## Dokumentation

Die Projektdokumentation liegt im Ordner [`docs`](docs/README.md).

## KI-Vorgaben

Die Vorgaben für KI-Assistenten stehen in [`AGENTS.md`](AGENTS.md).  
Claude Code liest sie über `CLAUDE.md`, GitHub Copilot über `.github/copilot-instructions.md`.
