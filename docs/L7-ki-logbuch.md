# L7 – KI-Logbuch

**Projekt:** Freelancer-Zeiterfassung, Gruppe 2

Gemäss Projektblatt halten wir jeden KI-Einsatz fest:

- wofür die KI eingesetzt wurde,
- mit welchem Tool,
- was wir übernommen haben,
- was wir verworfen haben.

Jede Person trägt ihre Einsätze selbst ein.  
Neue Einträge kommen unten in die Tabelle.  
Architektur- und Designentscheide trifft das Team selbst. Sie stehen in den ADR (L4).

## Einträge

| Nr. | Datum | Person | Tool | Wofür | Übernommen | Verworfen |
|---|---|---|---|---|---|---|
| 1 | 18.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Plan für die Anforderungsphase aus Projektblatt, Bewertungsraster und Projektantrag ableiten | Aufteilung in Basis- und Ausbaustufe, Epics, Ideen für Domänenklassen und Entwurfsmuster | PostgreSQL als Datenbank, weil die Vorgabe JSON, SQLite oder MongoDB verlangt |
| 2 | 18.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Fachregeln für Überschneidungen und Zeiten über Mitternacht klären | Fälle A–D, gemeinsame Bestätigung aller Korrekturen, Aufteilung über Mitternacht in den Auswertungen (Variante c) | Automatisches Aufteilen von Einträgen um Mitternacht, Verbot von Einträgen über Mitternacht |
| 3 | 18.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Vergleich Better-Auth und eigene Authentifizierung, Bibliotheken für Zwei-Faktor-Anmeldung | Eigene Authentifizierung mit bcrypt und JWT, TFA als Ausbaustufe mit `otpauth` und `qrcode` | Better-Auth, weil es an der Repository-Schicht vorbei auf die Datenbank zugreift |
| 4 | 19.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Umfang überarbeiten nach Rückmeldung "zu simpel"; SQLite mit Prisma beurteilen | SQLite mit Prisma, Firmen- und Privatkunden als Vererbung, Minuten abschneiden, ein offener Eintrag pro Benutzer | PostgreSQL bei einem Cloud-Anbieter |
| 5 | 19.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | UML-Entitätendiagramm als draw.io-Datei | Klassen, Beziehungen und Multiplizitäten als Entwurf für L3 | – |
| 6 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Anforderungsdokument L2 nach SMART und dieses KI-Logbuch als Markdown erstellen | Entwurf L2 zur Prüfung und Freigabe durch das Team | – |
| 7 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Mindestlänge Benutzername, Passwortregeln und Schutz gegen das Durchprobieren von Passwörtern prüfen | Passwortregel nach NIST SP 800-63B (Variante A) und Sperre nach 5 Fehlversuchen, beides als Annahme zum Review | Zeichenregeln für Passwörter (Varianten B und C), längerer Mindest-Benutzername |
| 8 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Gemeinsame KI-Anweisungen für Claude Code und GitHub Copilot erstellen | `AGENTS.md` als gemeinsame Quelle, `CLAUDE.md` und `.github/copilot-instructions.md` als Verweis | Getrennte, doppelt gepflegte Anweisungen pro Werkzeug |
| 9 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | L2 nach Review überarbeiten | Auftragsbeschreibung, Neuformulierung FR-15, Fall D als Aufteilen, FR-22, automatisches Stoppen beim Start, einheitliche Schreibweise der IDs, Abkürzungsverzeichnis | Geschützter Bindestrich oder IDs ohne Bindestrich gegen den Zeilenumbruch, Tabellen als Listen |
| 10 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | UML-Entitätendiagramm mit dem aktuellen L2 abgleichen | `Project.description`, `CompanyCustomer.contactPerson`, `TimeRange.subtract`, Aufzählung `AbsenceType` | – |
| 11 | 21.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | GitHub-Issues mit Labels und Milestones aus L2 planen | 14 Pakete als fachliche Längsschnitte, Milestones Zwischendemo 1, T1 und T2, bestehendes Board | Erste Fassung mit 51 Issues (eins pro Story und NFR), weil zu feingranular für drei Personen; Issues für L3–L8; neues Board |
| 12 | 22.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | AK-21.1 auf Widerspruch zur Falltabelle prüfen | Korrektur AK-21.1 (Fall C kürzt statt zu löschen), Präzisierung von AK-20.6 | – |
| 13 | 24.11.2026 | Erich Imfeld | Claude Code (Claude Opus 5.5) | Backend-Grundgerüst und Werkzeuge (#56) planen, umsetzen und aus Sicht des Reviewers prüfen | npm-Workspace mit `backend`, Composition Root in `app.js`, abstrakte `Clock` mit `SystemClock` und `FixedClock`, `ValidationError` und `BusinessRuleError` mit Statustabelle in der API, einheitliches Fehlerformat, Demo-Benutzer-Middleware, Vitest mit 70 % Schwelle für `src/domain`, ESLint, GitHub Actions, VS-Code-Konfigurationen zum Starten und Testen, Infoseite unter `/api` mit Weiterleitung von `/`, Bruno-Sammlung für alle Endpunkte, Befunde eines zweiten KI-Reviews (Prüfung von `PORT`, genauere Meldungen bei unlesbarem Inhalt, 404-Meldung ohne Query) | `supertest` als zusätzliche Abhängigkeit, HTTP-Status direkt in den Fehlerklassen, weil die Domäne sonst HTTP kennen würde; aus dem Review: HTTP 405 für falsche Methoden, HTTP 413 und 415 bei zu grossem oder unlesbarem Inhalt (400 mit genauer Meldung genügt), Pflicht-Statusprüfung im Ruleset ohne Rücksprache |
