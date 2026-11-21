# Anweisungen für GitHub Copilot

Die gemeinsamen Vorgaben des Teams stehen in [AGENTS.md](../AGENTS.md) im Hauptverzeichnis.  
Lies diese Datei vollständig und halte dich an alle Regeln darin.

Die wichtigsten Punkte in Kürze:

- Fachliche Grundlage ist [docs/L2-anforderungsdokument.md](../docs/L2-anforderungsdokument.md). Bei Widersprüchen gilt dieses Dokument.
- Drei Schichten. Prisma nur in Repositories, Fachregeln nur in der Domäne, Abhängigkeiten über den Konstruktor.
- SOLID und saubere Objektorientierung: private Felder, Polymorphie statt Typabfragen, unveränderliche Wertobjekte.
- Jede Fachregel und jedes Akzeptanzkriterium hat einen Vitest-Test, dessen Name die ID nennt.
- Nie auf `main` arbeiten. Feature-Branch, kleine Commits nach Conventional Commits auf Deutsch, Nachbesserungen per Fixup statt neuem Commit, kein KI-Vermerk im Commit.
- Schweizer Rechtschreibung mit "ss", gerade Anführungszeichen, zwei Leerzeichen am Ende aufeinanderfolgender Markdown-Zeilen.
- Jeder KI-Einsatz kommt ins [KI-Logbuch](../docs/L7-ki-logbuch.md).
- Zum Schluss alles nochmals aus Sicht des Reviewers prüfen, mit der Checkliste in Kapitel 9 von AGENTS.md.
