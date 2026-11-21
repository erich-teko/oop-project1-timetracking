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
