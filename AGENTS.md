# Anweisungen für KI-Assistenten

Diese Datei gilt für alle KI-Werkzeuge im Team, zum Beispiel Claude Code und GitHub Copilot.  
Sie ist die einzige Quelle für die gemeinsamen Vorgaben.  
`CLAUDE.md` und `.github/copilot-instructions.md` verweisen nur hierher.  
Änderungen an den Vorgaben macht das Team in dieser Datei, per Merge Request.

## 1. Projekt

- **Thema:** Auftragszeiterfassung für Freelancer, TEKO Luzern, Modul OOP mit JavaScript, Gruppe 2.
- **Anforderungen:** [docs/L2-anforderungsdokument.md](docs/L2-anforderungsdokument.md). Die Fachregeln FR-xx stehen in Kapitel 5, die User Stories US-xx in Kapitel 6, die NFR in Kapitel 7.
- **Übersicht der Lieferobjekte:** [docs/README.md](docs/README.md).
- **Termine:** T1 = 15.12.2026 (Kernlogik mit Tests), T2 = 03.01.2027 (Abgabe v1.0).

Bei einem Widerspruch gilt das Anforderungsdokument.  
Fehlt dort eine Regel, fragt die KI nach und erfindet keine eigene.

## 2. Technik

| Bereich | Wahl |
|---|---|
| Laufzeit | Node.js 24, ES-Module (`import`/`export`) |
| Backend | Express |
| Frontend | React mit shadcn/ui und Tailwind CSS |
| Datenablage | SQLite mit Prisma 7.x und `@prisma/adapter-better-sqlite3` |
| Authentifizierung | Eigene Umsetzung mit bcrypt und JWT im HttpOnly-Cookie |
| Tests | Vitest |
| Qualität | ESLint, 0 Fehler (NFR-13) |

Wichtig:

- Prisma auf Version 7.x fixieren. `npm install prisma` ohne Version holt eine Vorabversion von Prisma 8.
- Kein Better-Auth. Es greift an der Repository-Schicht vorbei auf die Datenbank zu.
- Neue Abhängigkeiten nur nach Rücksprache mit dem Team. Der Grund kommt in die Commit-Nachricht.

## 3. Architektur

Drei Schichten, Abhängigkeiten zeigen immer nach innen:

```
Frontend (React)  →  REST-API (Express)  →  Services  →  Domäne
                                               ↓
                                         Repositories (Prisma, InMemory)  →  SQLite
```

- **Domäne:** Klassen wie `User`, `Customer`, `Project`, `TimeEntry` und Wertobjekte wie `TimeRange`, `Address`. Sie enthalten die Fachregeln. Sie kennen weder Express noch Prisma.
- **Services:** steuern einen Anwendungsfall, laden und speichern über Repositories.
- **Repositories:** der einzige Ort mit Prisma (NFR-12). Ein Mapper (`toDomain`, `toPersistence`) übersetzt zwischen Datenbank und Domäne. Zu jedem Repository gibt es eine InMemory-Variante für Tests.
- **API:** prüft Eingaben, ruft Services auf und übersetzt Fehler in HTTP-Status. `ValidationError` ergibt 400, `BusinessRuleError` ergibt 409.
- **Frontend:** spricht nur über die REST-API mit dem Backend und enthält keine Fachregeln aus Kapitel 5.
- **Composition Root:** Alle Objekte werden in `app.js` erzeugt und verbunden. Klassen erzeugen ihre Abhängigkeiten nicht selbst.
- **Zeit:** Kein direktes `new Date()` in Domäne und Services. Die aktuelle Zeit kommt über eine injizierte `Clock`. So sind Tests mit festen Zeiten möglich.

## 4. Objektorientierung und SOLID

Die Business-Logik muss objektorientiert sein. Das ist ein Bewertungskriterium.

| Prinzip | Umsetzung im Projekt |
|---|---|
| **S** – Single Responsibility | Eine Klasse hat eine Aufgabe. `TimeRange` rechnet mit Zeitspannen, `TimeEntryService` steuert den Anwendungsfall, das Repository speichert. |
| **O** – Open/Closed | Neue Kundenarten oder Korrekturen kommen als neue Klasse dazu, ohne bestehende `if`/`switch`-Ketten zu erweitern. |
| **L** – Liskov | `CompanyCustomer` und `PrivateCustomer` sind überall einsetzbar, wo `Customer` erwartet wird. Unterklassen verschärfen keine Vorbedingungen. |
| **I** – Interface Segregation | Repositories bieten nur die Methoden an, die ein Service wirklich braucht. Keine Sammelklassen mit allen Abfragen. |
| **D** – Dependency Inversion | Services erhalten Repositories und `Clock` über den Konstruktor. Sie kennen nur die Schnittstelle, nicht Prisma. |

Weitere Regeln:

- Felder sind privat (`#feld`). Zugriff nur über Methoden oder Getter.
- Ein Objekt ist nach dem Konstruktor gültig. Ungültige Werte lösen einen `ValidationError` aus.
- Wertobjekte wie `TimeRange` und `Address` sind unveränderlich.
- Polymorphie statt Typabfragen, zum Beispiel `customer.displayName()` statt `if (customer.type === ...)`.
- Entwurfsmuster nur, wenn sie ein echtes Problem lösen. Im Projekt gesetzt sind Repository, Data Mapper, Command (`CorrectionAction`) und Dependency Injection.
- Bezeichner im Code auf Englisch. Fehlermeldungen für Benutzer auf Deutsch.
- Kleine Methoden, sprechende Namen, keine auskommentierten Codeblöcke, keine Magic Numbers.

## 5. Tests

- Jede Fachregel FR-xx und jedes Akzeptanzkriterium AK-xx.y hat mindestens einen Test.
- Der Testname nennt die ID, zum Beispiel `it('AK-15.2: verwirft einen Eintrag unter einer Minute')`.
- Tests folgen dem Muster Gegeben – Wenn – Dann aus dem Anforderungsdokument und verwenden dessen Beispieldaten.
- Unit-Tests der Domäne laufen ohne Datenbank, mit InMemory-Repositories und einer festen `Clock`.
- Grenzfälle immer mittesten: Mitternacht, Sommerzeit, sich berührende Zeiten, 0 Minuten, 24 Stunden.
- Die Domänenschicht hat mindestens 70 % Zeilenabdeckung (NFR-11).
- Zuerst der Test, dann der Code, wo es sinnvoll ist. Ein Fehler wird zuerst mit einem roten Test nachgewiesen.
- Vor jedem Commit müssen `npm test` und `npm run lint` fehlerfrei laufen.

## 6. Git

### Branches

- Nie direkt auf `main` arbeiten oder committen.
- Jede Arbeit läuft auf einem Feature-Branch: `feature/<ID>-<kurzbeschreibung>`, zum Beispiel `feature/US-15-zeit-stoppen`.
- Ein Branch behandelt ein Thema. Er kommt per Merge Request nach `main`.
- Ein anderes Teammitglied prüft und genehmigt den Merge Request.

### Commits

- Kleine, in sich geschlossene Commits. Jeder Commit lässt sich allein reviewen und lässt die Tests grün.
- Format: Conventional Commits auf Deutsch, `<typ>(<bereich>): <beschreibung>`. Typen: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.
- Die Nachricht nennt die betroffenen IDs, zum Beispiel `feat(zeiterfassung): Zeit stoppen (US-15, FR-19)`.
- Nachbesserungen gehören in den bestehenden Commit, nicht in einen neuen "Fix"-Commit. Vor dem Push mit `git commit --fixup` und `git rebase --autosquash`.
- Ist der Branch schon gepusht, braucht das Umschreiben einen Force-Push. Dafür vorher im Team nachfragen und `--force-with-lease` verwenden.
- Keine `Co-Authored-By`-Zeile und kein anderer KI-Vermerk in Commits. Der KI-Einsatz steht im KI-Logbuch.
- Nie Geheimnisse committen: keine `.env`, keine Passwörter, keine Schlüssel, keine Datenbankdatei.

## 7. Dokumentation und Sprache

- Dokumente liegen als Markdown in `docs/` und sind nach den Lieferobjekten L1–L8 benannt.
- Rechtschreibung nach Schweizer Standard: immer "ss", nie Eszett.
- Anführungszeichen immer gerade ("), nie Guillemets.
- Kurze Sätze, keine langen verketteten Sätze.
- Folgen in Markdown zwei Textzeilen direkt aufeinander, endet die obere mit zwei Leerzeichen. Sonst laufen sie zu einem Absatz zusammen.
- Jede Anforderung hat eine eindeutige ID. Code, Tests und Commits verweisen darauf.
- IDs immer mit Bindestrich und zweistelliger Nummer schreiben, zum Beispiel `US-05`, `E-01`, `AK-15.2`. Die Regeln stehen in [L2, Kapitel 4.2](docs/L2-anforderungsdokument.md#42-abkürzungen-und-ids).

## 8. KI-Logbuch

Jeder KI-Einsatz kommt ins [KI-Logbuch](docs/L7-ki-logbuch.md). Das verlangt der Projektauftrag.

- Ein Eintrag pro Einsatz: Datum, Person, Tool, wofür, was übernommen und was verworfen wurde.
- Die KI schlägt am Ende ihrer Arbeit den passenden Eintrag vor.
- Architektur- und Designentscheide trifft das Team. Sie stehen in den Designentscheiden (L4), nicht nur im Chat.

## 9. Abschluss: Prüfung aus Sicht des Reviewers

Bevor eine Arbeit als fertig gilt, prüft die KI das Ganze nochmals aus Sicht des Reviewers.  
Sie liest dafür den gesamten Diff, nicht nur die letzte Änderung.  
Gefundene Mängel behebt sie, bevor sie die Arbeit übergibt.

Checkliste:

- [ ] **Anforderungen:** Erfüllt die Änderung die betroffenen Stories und Fachregeln vollständig? Fehlt ein Grenzfall?
- [ ] **Architektur:** Liegt jede Logik in der richtigen Schicht? Prisma nur im Repository, keine Fachregeln im Frontend?
- [ ] **SOLID und OOP:** Hat jede Klasse eine Aufgabe? Werden Abhängigkeiten injiziert? Gibt es Typabfragen statt Polymorphie?
- [ ] **Tests:** Gibt es für jede neue Regel einen Test mit ID? Laufen `npm test` und `npm run lint` fehlerfrei?
- [ ] **Fehler:** Liefern ungültige Eingaben 400 und Regelverletzungen 409, mit verständlicher deutscher Meldung?
- [ ] **Sicherheit:** Keine Geheimnisse im Code, kein Zugriff auf fremde Daten (NFR-06), Passwörter nur als Hash?
- [ ] **Git:** Richtiger Branch, kleine Commits mit IDs, keine Fix-Commits, kein KI-Vermerk?
- [ ] **Dokumentation:** Rechtschreibung, Anführungszeichen und Zeilenumbrüche korrekt? Sind README und Dokumente nachgeführt?
- [ ] **KI-Logbuch:** Ist der Eintrag vorbereitet?

Am Schluss meldet die KI, was sie geprüft hat und was offen bleibt.  
Was sie nicht prüfen konnte, nennt sie ausdrücklich.
