# L2 – Anforderungsdokument

**Projekt:** Freelancer-Zeiterfassung  
**Modul:** Objektorientiertes Programmieren mit JavaScript, TEKO Luzern  
**Team:** Gruppe 2 – Ahmad Yaser Daqiq, Hendrik Ott, Erich Imfeld

| Version | Datum | Stand | Änderung |
|---|---|---|---|
| 0.1 | 21.11.2026 | Entwurf | Erste Fassung für die Abgabe des Entwurfs am 24.11.2026 |

> **Bezug zur Bewertung**
> - D1 User Stories → [Kapitel 6](#6-user-stories)
> - D2 Nicht-funktionale Anforderungen und Abgrenzung → [Kapitel 7](#7-nicht-funktionale-anforderungen) und [Kapitel 3](#3-lieferumfang-und-abgrenzung)

## Inhalt

1. [Ausgangslage und Ziel](#1-ausgangslage-und-ziel)
2. [Anwendung des SMART-Prinzips](#2-anwendung-des-smart-prinzips)
3. [Lieferumfang und Abgrenzung](#3-lieferumfang-und-abgrenzung)
4. [Begriffe](#4-begriffe)
5. [Fachregeln](#5-fachregeln)
6. [User Stories](#6-user-stories)
7. [Nicht-funktionale Anforderungen](#7-nicht-funktionale-anforderungen)
8. [Rahmenbedingungen](#8-rahmenbedingungen)
9. [Annahmen und offene Punkte](#9-annahmen-und-offene-punkte)
10. [Freigabe](#10-freigabe)

---

## 1. Ausgangslage und Ziel

### 1.1 Ausgangslage

Freelancer arbeiten für verschiedene Firmen und Privatpersonen.  
Typische Branchen sind Beratung, Informatik und Montage.  
Gegenüber ihren Kunden müssen sie Rechenschaft ablegen.  
Der Kunde will wissen, wann was gemacht wurde und wie lange es gedauert hat.  
Freelancer arbeiten oft an wechselnden Orten.  
Eine Erfassung auf Papier oder in Tabellen ist fehleranfällig.  
Doppelt erfasste oder überlappende Zeiten fallen oft erst bei der Abrechnung auf.

### 1.2 Ziel

Wir entwickeln eine webbasierte Zeiterfassung für Freelancer.  
Ein Freelancer verwaltet damit seine Kunden und Projekte.  
Er erfasst seine Arbeitszeit minutengenau pro Projekt.  
Das System verhindert überlappende Zeiten.  
Auswertungen zeigen die Zeiten pro Tag, pro Woche und pro Projekt.  
Pro Projekt zeigt das System den Verbrauch des Stundenbudgets.

### 1.3 Zielgruppe

Die Anwendung richtet sich an einzelne Freelancer.  
Jeder Freelancer hat ein eigenes Konto.  
Es gibt keine Teams und keine Rollen.

---

## 2. Anwendung des SMART-Prinzips

Alle Anforderungen sind nach dem SMART-Prinzip formuliert.  
Die folgende Tabelle zeigt, wie wir jedes Kriterium umsetzen.

| Kriterium | Bedeutung | Umsetzung in diesem Dokument |
|---|---|---|
| **S** – spezifisch | eindeutig und präzise | Jede Anforderung hat eine eigene ID ([Kapitel 4.2](#42-abkürzungen-und-ids)). Eine Story beschreibt genau eine Funktion. Fachregeln stehen zentral in [Kapitel 5](#5-fachregeln). |
| **M** – messbar | Erfüllung ist prüfbar | Jedes Akzeptanzkriterium nennt konkrete Eingaben und das erwartete Ergebnis. Jede nicht-funktionale Anforderung (NFR) nennt einen Zielwert und eine Messmethode. |
| **A** – akzeptiert | vom Team getragen | Das Team gibt das Dokument gemeinsam frei ([Kapitel 10](#10-freigabe)). Annahmen sind offen ausgewiesen ([Kapitel 9](#9-annahmen-und-offene-punkte)). |
| **R** – realistisch | mit den Mitteln erreichbar | Der Muss-Umfang ist auf drei Personen und rund sechs Wochen ausgelegt. Weitere Wünsche sind als Kann-Anforderungen ausgelagert. |
| **T** – terminiert | mit festem Termin | Jede Story hat einen Termin. Die Termine folgen den Meilensteinen des Projekts. |

### 2.1 Prioritäten

| Priorität | Bedeutung |
|---|---|
| **Muss** | Gehört zur Basisstufe. Ist in v1.0 vollständig umgesetzt und abgenommen. |
| **Kann** | Gehört zur Ausbaustufe. Wird nur umgesetzt, wenn alle Muss-Stories abgenommen sind. |

### 2.2 Termine

| Kürzel | Datum | Bedeutung |
|---|---|---|
| **T1** | 15.12.2026 | Zwischendemo 2: Business-Logik der Story fertig und mit Unit-Tests geprüft |
| **T2** | 03.01.2027 | Abgabe v1.0: Story in allen Schichten lauffähig und abgenommen |

Stories mit "T1 + T2" müssen beide Termine einhalten.  
Kann-Stories haben den Termin T2, sofern sie umgesetzt werden.

### 2.3 Aufbau der Akzeptanzkriterien

Akzeptanzkriterien folgen dem Muster **Gegeben – Wenn – Dann**.  
Alle Zeitangaben gelten in der Zeitzone Europe/Zurich.  
Als Testtag dient Montag, 23.11.2026, sofern nichts anderes steht.

---

## 3. Lieferumfang und Abgrenzung

### 3.1 Basisstufe (Muss)

| Epic | Inhalt | Stories |
|---|---|---|
| **E-01** Benutzerkonto | Registrieren, Anmelden, Abmelden, Datenschutz pro Benutzer | US-01 bis US-04 |
| **E-02** Kunden | Firmen- und Privatkunden mit Adresse verwalten | US-05 bis US-09 |
| **E-03** Projekte | Projekte mit Zielstunden verwalten und abschliessen | US-10 bis US-13 |
| **E-04** Zeiterfassung | Zeiten starten, stoppen, erfassen, bearbeiten, löschen | US-14 bis US-19 |
| **E-05** Überschneidungen | Überschneidungen erkennen und nach Rückfrage korrigieren | US-20 bis US-22 |
| **E-06** Auswertungen | Tagesliste, Wochenauswertung, Projektauswertung | US-23 bis US-25 |

### 3.2 Ausbaustufe (Kann)

| Epic | Inhalt | Stories |
|---|---|---|
| **E-07** Zwei-Faktor-Anmeldung | Anmeldung mit Einmalcode aus einer Authenticator-App | US-26, US-27 |
| **E-08** Sollzeiten | Sollzeit pro Wochentag und Vergleich mit der Ist-Zeit | US-28 |
| **E-09** Abwesenheiten | Ferien, Krankheit und andere Abwesenheiten erfassen | US-29 |
| **E-10** Export | Zeiten als CSV-Datei exportieren | US-30 |

### 3.3 Nicht im Umfang

Folgende Punkte setzen wir weder in der Basis- noch in der Ausbaustufe um:

- Verrechnung, Rechnungen und Stundensätze
- Pausenregeln und Vorgaben des Arbeitsgesetzes
- Teams, Rollen und gemeinsame Kunden mehrerer Benutzer
- Mehrsprachigkeit. Die Oberfläche ist nur Deutsch (Schweiz).
- Mobile App und Optimierung für Smartphones
- Betrieb auf einem Server im Internet. Die Lieferung ist eine lokale Installation.
- Passwort zurücksetzen per E-Mail

---

## 4. Begriffe

### 4.1 Fachbegriffe

| Begriff | Bedeutung |
|---|---|
| Benutzer | Ein Freelancer mit eigenem Konto |
| Kunde | Auftraggeber eines Benutzers. Entweder Firmenkunde oder Privatkunde. |
| Firmenkunde | Kunde mit Firmenname, Kontaktperson und optionaler UID-Nummer |
| Privatkunde | Kunde mit Vorname und Nachname |
| Adresse | Strasse, PLZ, Ort und Land eines Kunden |
| Projekt | Auftrag eines Kunden mit Namen, Auftragsbeschreibung, Zielstunden und Status |
| Auftragsbeschreibung | Freier Text zu den Arbeiten, die im Projekt zu erledigen sind. Der Name bleibt dadurch kurz. |
| Zielstunden | Stundenbudget eines Projekts in ganzen Stunden |
| Status | Ein Projekt ist entweder "aktiv" oder "abgeschlossen" |
| Zeiteintrag | Erfasste Arbeitszeit mit Beginn, Ende, Projekt und Beschreibung |
| Offener Zeiteintrag | Zeiteintrag ohne Ende. Die Zeit läuft noch. |
| Bearbeitete Zeit | Der Zeiteintrag, den der Benutzer gerade speichert |
| Überschneidung | Zwei Zeiteinträge desselben Benutzers liegen teilweise oder ganz übereinander |
| Korrekturvorschlag | Liste der Änderungen, die eine Überschneidung auflösen |
| Ist-Zeit | Summe der erfassten Minuten |
| Sperrliste | Liste der 10 000 häufigsten Passwörter. Sie liegt als Datei im Repository. Das System prüft lokal, ohne Anfrage ins Internet. |

### 4.2 Abkürzungen und IDs

Für alle IDs gilt dieselbe Schreibweise:

- **Aufbau:** Kürzel, Bindestrich und zweistellige Nummer, zum Beispiel `US-05` oder `E-01`. Akzeptanzkriterien hängen die Nummer mit Punkt an die Story an, zum Beispiel `AK-15.2`.
- **Definition:** Dort, wo eine ID festgelegt wird, steht sie fett. User Stories stehen in einer eigenen Überschrift.
- **Verweis:** Überall sonst steht die ID als normaler Text. Einzige Ausnahme ist die Story-Übersicht in Kapitel 6: Dort ist jede ID ein Link zur Story.
- **Kürzel ohne Bindestrich:** Die Termine T1 und T2 sowie die Vorgaben aus dem Projektblatt (L1–L8) und dem Bewertungsraster (z. B. D1) sind keine Anforderungen. Sie behalten ihre Schreibweise.

| Kürzel | Bedeutung | Beispiel | Fundort |
|---|---|---|---|
| E | Epic: Gruppe von zusammengehörenden User Stories | E-04 | [Kapitel 3](#3-lieferumfang-und-abgrenzung) |
| FR | Fachregel: Regel, die für mehrere Stories gilt | FR-19 | [Kapitel 5](#5-fachregeln) |
| US | User Story: Funktion aus Sicht des Benutzers | US-15 | [Kapitel 6](#6-user-stories) |
| AK | Akzeptanzkriterium: prüfbare Bedingung einer Story. Die Zahl vor dem Punkt ist die Story. | AK-15.2 | [Kapitel 6](#6-user-stories) |
| NFR | Nicht-funktionale Anforderung: legt fest, wie gut das System etwas tut, zum Beispiel Antwortzeit oder Sicherheit | NFR-01 | [Kapitel 7](#7-nicht-funktionale-anforderungen) |
| A | Annahme: vom Team gesetzter Punkt, der noch bestätigt wird | A-03 | [Kapitel 9](#9-annahmen-und-offene-punkte) |
| T1, T2 | Termin (Kürzel, keine ID) | T1 | [Kapitel 2.2](#22-termine) |

---

## 5. Fachregeln

Die Fachregeln gelten für alle Stories.  
Die Stories verweisen mit der ID auf die jeweilige Regel.

### 5.1 Benutzer und Daten

| ID | Regel |
|---|---|
| **FR-01** | Ein Benutzer sieht und ändert nur seine eigenen Kunden, Projekte und Zeiteinträge. |
| **FR-02** | Der Benutzername ist eindeutig. Gross- und Kleinschreibung wird dabei nicht unterschieden. |
| **FR-03** | Der Benutzername hat 3 bis 30 Zeichen. Erlaubt sind a–z, 0–9, Punkt, Bindestrich und Unterstrich. |
| **FR-04** | Das Passwort hat 12 bis 64 Zeichen. Es gibt keine Vorschrift zur Zusammensetzung, also keine Pflicht für Grossbuchstaben, Zahlen oder Sonderzeichen. |
| **FR-05** | Das System lehnt ein Passwort ab, wenn es auf der Sperrliste steht, den Benutzernamen enthält oder nur aus einem wiederholten Zeichen besteht. Gross- und Kleinschreibung wird dabei nicht unterschieden. |
| **FR-06** | Nach 5 fehlgeschlagenen Anmeldungen für denselben Benutzernamen innerhalb von 15 Minuten ist die Anmeldung für diesen Benutzernamen 15 Minuten lang gesperrt. Die Sperre beginnt mit dem fünften Fehlversuch und gilt auch für das korrekte Passwort. Eine erfolgreiche Anmeldung setzt den Zähler zurück. |

#### Begründung der Passwortregeln

Wir folgen der Empfehlung des NIST (US-Normeninstitut) in der Richtlinie SP 800-63B:

- **Länge statt Zusammensetzung:** Ein langes Passwort ist schwerer zu erraten als ein kurzes mit Sonderzeichen. Darum verlangen wir 12 Zeichen.
- **Keine Pflicht für Zeichenarten:** Solche Pflichten führen zu vorhersehbaren Mustern wie `Sommer2026!`. Diese erfüllen jede Regel und sind trotzdem schnell erraten.
- **Sperrliste statt Zeichenregeln:** Häufige Passwörter wie `passwort1234` lehnt das System direkt ab (FR-05).
- **Obergrenze 64 Zeichen:** bcrypt wertet nur die ersten 72 Bytes aus. Mit 64 Zeichen bleibt das ganze Passwort wirksam, auch bei Umlauten in den meisten Fällen.
- **Schutz vor Durchprobieren:** Die Sperre nach Fehlversuchen (FR-06) bremst Angriffe, die viele Passwörter ausprobieren.

Geprüfte Alternativen:

| Variante | Regel | Entscheid |
|---|---|---|
| A | 12 bis 64 Zeichen, Sperrliste, keine Zeichenregeln | gewählt |
| B | wie A, zusätzlich mindestens drei von vier Zeichenarten | verworfen, kaum mehr Sicherheit, schlechtere Bedienung |
| C | 10 Zeichen und je ein Grossbuchstabe, Kleinbuchstabe, eine Zahl und ein Sonderzeichen | verworfen, gilt als veraltet |

Der Entscheid ist eine Annahme (A-02). Das Team bestätigt ihn im Review oder wählt eine andere Variante.

### 5.2 Kunden und Projekte

| ID | Regel |
|---|---|
| **FR-07** | Firmenkunde: Firmenname und Adresse sind Pflicht. Kontaktperson und UID-Nummer sind freiwillig. |
| **FR-08** | Privatkunde: Vorname, Nachname und Adresse sind Pflicht. |
| **FR-09** | Adresse: Strasse, PLZ, Ort und Land sind Pflicht. Das Land ist standardmässig "Schweiz". Bei "Schweiz" besteht die PLZ aus genau 4 Ziffern. |
| **FR-10** | Ein Kunde kann nur gelöscht werden, wenn er keine Projekte hat. |
| **FR-11** | Ein Projekt gehört zu genau einem Kunden. Der Kunde ist nach dem Anlegen nicht mehr änderbar. |
| **FR-12** | Die Zielstunden sind eine ganze Zahl von 1 bis 9999. |
| **FR-13** | Der Projektname ist Pflicht und hat 1 bis 80 Zeichen. Die Auftragsbeschreibung ist freiwillig, hat höchstens 2000 Zeichen und darf Zeilenumbrüche enthalten. |
| **FR-14** | Ein abgeschlossenes Projekt lässt sich nicht wieder öffnen. |
| **FR-15** | Ein Projekt lässt sich auch mit erfassten Zeiten abschliessen. Nur ein offener Zeiteintrag auf dem Projekt verhindert das Abschliessen. Der Benutzer muss diese Zeit zuerst stoppen. |
| **FR-16** | Auf ein abgeschlossenes Projekt kann keine Zeit erfasst werden. Seine Zeiteinträge lassen sich weder ändern noch löschen. |
| **FR-17** | Budgetverbrauch in Prozent = Ist-Zeit ÷ Zielstunden × 100, gerundet auf ganze Prozent. Über 100 % wird der Wert hervorgehoben. Das System sperrt dabei nichts. |

### 5.3 Zeiterfassung

| ID | Regel |
|---|---|
| **FR-18** | Beginn und Ende werden beim Speichern auf die ganze Minute abgeschnitten. Beispiel: 08:00:40 und 08:00:59 werden beide zu 08:00. |
| **FR-19** | Ein Zeiteintrag mit einer Dauer von 0 Minuten wird verworfen. Der Benutzer erhält eine Meldung. |
| **FR-20** | Ein Benutzer hat höchstens einen offenen Zeiteintrag. Startet er eine neue Zeit, während eine Zeit desselben Tages läuft, stoppt das System die laufende Zeit und startet die neue in derselben Minute. Es braucht dafür keine Rückfrage. |
| **FR-21** | Läuft ein Zeiteintrag seit einem früheren Tag, kann keine neue Zeit gestartet werden. Der Benutzer muss den Eintrag zuerst korrekt abschliessen. |
| **FR-22** | Gibt es einen offenen Zeiteintrag, darf kein anderer Zeiteintrag später beginnen als dieser. Das gilt beim Erfassen und beim Bearbeiten. Der offene Eintrag ist damit immer der jüngste. |
| **FR-23** | Das Ende liegt nach dem Beginn. Ein Zeiteintrag dauert höchstens 24 Stunden. |
| **FR-24** | Ein Zeiteintrag darf über Mitternacht gehen. Er gehört zum Tag seines Beginns. Die Auswertungen teilen seine Minuten um 00:00 auf die beiden Tage auf. |
| **FR-25** | Die Beschreibung ist Pflicht und hat 1 bis 200 Zeichen. |
| **FR-26** | Massgebend ist die Zeitzone Europe/Zurich, inklusive Sommer- und Winterzeit. Eine Woche dauert von Montag 00:00 bis Sonntag 24:00. |

### 5.4 Überschneidungen

| ID | Regel |
|---|---|
| **FR-27** | Zwei Zeiteinträge überschneiden sich, wenn der Beginn des einen vor dem Ende des anderen liegt und umgekehrt. |
| **FR-28** | Berühren ist keine Überschneidung. Beispiel: Ende 10:00 und Beginn 10:00 sind erlaubt. |
| **FR-29** | Ein offener Zeiteintrag gilt bei der Prüfung als bis "jetzt" laufend. |
| **FR-30** | Geprüft wird gegen alle Zeiteinträge des Benutzers über alle Projekte. |
| **FR-31** | Ausgangspunkt ist immer die bearbeitete Zeit. Sie bleibt unverändert. Angepasst werden nur die anderen Einträge. |
| **FR-32** | Das System korrigiert nur nach Rückfrage. Der Benutzer bestätigt alle Korrekturen gemeinsam oder bricht ab. |
| **FR-33** | Die bestätigten Korrekturen werden vollständig oder gar nicht gespeichert. |
| **FR-34** | Wäre ein Eintrag eines abgeschlossenen Projekts betroffen, lehnt das System das Speichern ab. |

Die Korrektur richtet sich nach der Lage des anderen Eintrags.  
Im Beispiel ist die bearbeitete Zeit immer **09:00–10:00**.

| Fall | Lage des anderen Eintrags | Beispiel | Korrektur |
|---|---|---|---|
| A | Beginnt vorher und endet in der bearbeiteten Zeit | 08:00–09:30 | Ende auf 09:00 kürzen |
| B | Liegt ganz in der bearbeiteten Zeit | 09:15–09:45 | Eintrag löschen |
| C | Beginnt in der bearbeiteten Zeit und endet danach | 09:30–11:00 | Beginn auf 10:00 verschieben |
| D | Beginnt vorher und endet danach | 08:00–12:00 | Aufteilen in 08:00–09:00 und 10:00–12:00 |

Zu Fall D:

- Der erste Teil bleibt der bestehende Eintrag. Der zweite Teil ist ein neuer Eintrag mit demselben Projekt und derselben Beschreibung.
- Ein offener Eintrag ist nie Fall A oder D. Die bearbeitete Zeit würde sonst später beginnen als er, und das verbietet FR-22.
- Fall D gilt nur, wenn der andere Eintrag echt vorher beginnt und echt danach endet. Beginnt oder endet er gleichzeitig, gilt Fall A, B oder C. So entsteht nie ein Teil mit 0 Minuten.

---

## 6. User Stories

### 6.1 Übersicht

| Story | Epic | Priorität | Termin |
|---|---|---|---|
| [US-01 Registrieren](#us-01-registrieren) | E-01 | Muss | T2 |
| [US-02 Anmelden](#us-02-anmelden) | E-01 | Muss | T2 |
| [US-03 Abmelden](#us-03-abmelden) | E-01 | Muss | T2 |
| [US-04 Eigene Daten schützen](#us-04-eigene-daten-schützen) | E-01 | Muss | T1 + T2 |
| [US-05 Firmenkunde erfassen](#us-05-firmenkunde-erfassen) | E-02 | Muss | T1 + T2 |
| [US-06 Privatkunde erfassen](#us-06-privatkunde-erfassen) | E-02 | Muss | T1 + T2 |
| [US-07 Kunde bearbeiten](#us-07-kunde-bearbeiten) | E-02 | Muss | T2 |
| [US-08 Kundenliste anzeigen](#us-08-kundenliste-anzeigen) | E-02 | Muss | T2 |
| [US-09 Kunde löschen](#us-09-kunde-löschen) | E-02 | Muss | T2 |
| [US-10 Projekt anlegen](#us-10-projekt-anlegen) | E-03 | Muss | T1 + T2 |
| [US-11 Projekt bearbeiten](#us-11-projekt-bearbeiten) | E-03 | Muss | T2 |
| [US-12 Projekt abschliessen](#us-12-projekt-abschliessen) | E-03 | Muss | T1 + T2 |
| [US-13 Projektübersicht mit Budget](#us-13-projektübersicht-mit-budget) | E-03 | Muss | T2 |
| [US-14 Zeit starten](#us-14-zeit-starten) | E-04 | Muss | T1 + T2 |
| [US-15 Zeit stoppen](#us-15-zeit-stoppen) | E-04 | Muss | T1 + T2 |
| [US-16 Zeit manuell erfassen](#us-16-zeit-manuell-erfassen) | E-04 | Muss | T1 + T2 |
| [US-17 Zeit bearbeiten](#us-17-zeit-bearbeiten) | E-04 | Muss | T1 + T2 |
| [US-18 Zeit löschen](#us-18-zeit-löschen) | E-04 | Muss | T2 |
| [US-19 Hinweis auf offene Zeit](#us-19-hinweis-auf-offene-zeit) | E-04 | Muss | T2 |
| [US-20 Überschneidung erkennen](#us-20-überschneidung-erkennen) | E-05 | Muss | T1 + T2 |
| [US-21 Korrektur bestätigen oder abbrechen](#us-21-korrektur-bestätigen-oder-abbrechen) | E-05 | Muss | T1 + T2 |
| [US-22 Abgeschlossene Projekte schützen](#us-22-abgeschlossene-projekte-schützen) | E-05 | Muss | T1 + T2 |
| [US-23 Tagesliste](#us-23-tagesliste) | E-06 | Muss | T1 + T2 |
| [US-24 Wochenauswertung](#us-24-wochenauswertung) | E-06 | Muss | T1 + T2 |
| [US-25 Projektauswertung nach Periode](#us-25-projektauswertung-nach-periode) | E-06 | Muss | T1 + T2 |
| [US-26 Zwei-Faktor-Anmeldung einrichten](#us-26-zwei-faktor-anmeldung-einrichten) | E-07 | Kann | T2 |
| [US-27 Anmelden mit zweitem Faktor](#us-27-anmelden-mit-zweitem-faktor) | E-07 | Kann | T2 |
| [US-28 Sollzeit pro Wochentag](#us-28-sollzeit-pro-wochentag) | E-08 | Kann | T2 |
| [US-29 Abwesenheit erfassen](#us-29-abwesenheit-erfassen) | E-09 | Kann | T2 |
| [US-30 Zeiten exportieren](#us-30-zeiten-exportieren) | E-10 | Kann | T2 |

---

### 6.2 E-01 – Benutzerkonto

#### US-01 Registrieren

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-01 | Muss | T2 | FR-02, FR-03, FR-04, FR-05 |

Als Freelancer möchte ich ein eigenes Konto anlegen, damit nur ich auf meine Zeiten zugreife.

- **AK-01.1** Gegeben der Benutzername "anna.muster" ist frei. Wenn ich ihn mit dem Passwort "kaffeetasseblau" registriere, dann ist das Konto angelegt und ich bin angemeldet.
- **AK-01.2** Gegeben das Konto "anna.muster" existiert. Wenn ich "Anna.Muster" registriere, dann erscheint "Benutzername bereits vergeben". Es wird kein Konto angelegt.
- **AK-01.3** Wenn ich ein Passwort mit 11 Zeichen eingebe, dann zeigt das Formular einen Fehler beim Passwortfeld. Die Anfrage wird nicht gesendet.
- **AK-01.4** Wenn ich den Benutzernamen "ab" eingebe, dann zeigt das Formular einen Fehler beim Benutzernamen.
- **AK-01.5** Wenn ich das Passwort "passwort1234" eingebe, dann erscheint "Dieses Passwort ist zu häufig. Bitte ein anderes wählen." Es wird kein Konto angelegt.
- **AK-01.6** Gegeben der Benutzername "anna.muster". Wenn ich das Passwort "Anna.Muster-2026" eingebe, dann erscheint "Das Passwort darf den Benutzernamen nicht enthalten." Es wird kein Konto angelegt.
- **AK-01.7** Wenn ich das Passwort "aaaaaaaaaaaa" eingebe, dann erscheint ein Fehler beim Passwortfeld. Es wird kein Konto angelegt.
- **AK-01.8** Wenn ich ein Passwort mit 65 Zeichen eingebe, dann zeigt das Formular einen Fehler beim Passwortfeld.

#### US-02 Anmelden

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-01 | Muss | T2 | FR-06 |

Als Freelancer möchte ich mich mit Benutzername und Passwort anmelden, damit ich meine Daten bearbeiten kann.

- **AK-02.1** Gegeben ein bestehendes Konto. Wenn ich korrekte Daten eingebe, dann sehe ich die Startseite.
- **AK-02.2** Wenn ich ein falsches Passwort eingebe, dann erscheint "Benutzername oder Passwort falsch".
- **AK-02.3** Wenn ich einen unbekannten Benutzernamen eingebe, dann erscheint dieselbe Meldung wie in AK-02.2.
- **AK-02.4** Gegeben für "anna.muster" sind um 10:00, 10:01, 10:02, 10:03 und 10:04 Anmeldungen fehlgeschlagen. Wenn ich mich um 10:05 mit dem korrekten Passwort anmelde, dann erscheint "Zu viele Fehlversuche. Bitte später erneut versuchen." Ich bin nicht angemeldet.
- **AK-02.5** Gegeben die Sperre aus AK-02.4. Wenn ich mich um 10:19 mit dem korrekten Passwort anmelde, dann sehe ich die Startseite.
- **AK-02.6** Gegeben für "anna.muster" sind um 10:00, 10:01, 10:02 und 10:03 Anmeldungen fehlgeschlagen. Um 10:04 gelingt die Anmeldung. Wenn danach eine Anmeldung fehlschlägt, dann ist das Konto nicht gesperrt.
- **AK-02.7** Gegeben der Benutzername "max.unbekannt" existiert nicht. Wenn ich mich damit sechsmal anmelde, dann erscheint beim sechsten Versuch dieselbe Meldung wie in AK-02.4. Die Antwort verrät nicht, ob der Benutzername existiert.

#### US-03 Abmelden

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-01 | Muss | T2 | – |

Als Freelancer möchte ich mich abmelden, damit an einem fremden Gerät niemand meine Daten sieht.

- **AK-03.1** Gegeben ich bin angemeldet. Wenn ich "Abmelden" wähle, dann sehe ich die Anmeldeseite.
- **AK-03.2** Gegeben ich habe mich abgemeldet. Wenn ich die Adresse einer geschützten Seite aufrufe, dann sehe ich die Anmeldeseite.

#### US-04 Eigene Daten schützen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-01 | Muss | T1 + T2 | FR-01 |

Als Freelancer möchte ich, dass andere Benutzer meine Daten nicht sehen, damit meine Kundendaten vertraulich bleiben.

- **AK-04.1** Gegeben Benutzer A und Benutzer B haben je einen Kunden. Wenn A die Kundenliste öffnet, dann sieht A nur den eigenen Kunden.
- **AK-04.2** Gegeben ein Projekt von Benutzer B. Wenn A dieses Projekt über die API abruft, dann antwortet die API mit "nicht gefunden" (HTTP 404).
- **AK-04.3** Wenn eine Anfrage ohne Anmeldung an eine geschützte API-Adresse geht, dann antwortet die API mit HTTP 401.

---

### 6.3 E-02 – Kunden

#### US-05 Firmenkunde erfassen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-02 | Muss | T1 + T2 | FR-07, FR-09 |

Als Freelancer möchte ich eine Firma als Kunden erfassen, damit ich ihr Projekte zuordnen kann.

- **AK-05.1** Wenn ich "Muster AG", "Bahnhofstrasse 1", "6003", "Luzern" und "Schweiz" eingebe und speichere, dann erscheint der Kunde in der Kundenliste als "Muster AG".
- **AK-05.2** Wenn ich den Firmennamen leer lasse, dann wird nicht gespeichert. Das Feld Firmenname ist als Fehler markiert.
- **AK-05.3** Wenn ich als Land "Schweiz" und als PLZ "600" eingebe, dann wird nicht gespeichert. Die Meldung lautet "PLZ muss 4 Ziffern haben".
- **AK-05.4** Wenn ich Kontaktperson und UID-Nummer leer lasse, dann wird der Kunde trotzdem gespeichert.

#### US-06 Privatkunde erfassen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-02 | Muss | T1 + T2 | FR-08, FR-09 |

Als Freelancer möchte ich eine Privatperson als Kunden erfassen, damit ich auch für Privatpersonen arbeiten kann.

- **AK-06.1** Wenn ich "Hans", "Meier" und eine gültige Adresse eingebe und speichere, dann erscheint der Kunde in der Kundenliste als "Meier Hans".
- **AK-06.2** Wenn ich den Nachnamen leer lasse, dann wird nicht gespeichert. Das Feld Nachname ist als Fehler markiert.

#### US-07 Kunde bearbeiten

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-02 | Muss | T2 | FR-07, FR-08, FR-09 |

Als Freelancer möchte ich Kundendaten ändern, damit Adressen aktuell bleiben.

- **AK-07.1** Gegeben der Kunde "Muster AG" in Luzern. Wenn ich den Ort auf "Zug" und die PLZ auf "6300" ändere, dann zeigt die Kundenliste den neuen Ort.
- **AK-07.2** Wenn ich ein Pflichtfeld leere, dann wird nicht gespeichert. Die bisherigen Daten bleiben erhalten.
- **AK-07.3** Die Art des Kunden (Firma oder Privat) lässt sich nicht ändern.

#### US-08 Kundenliste anzeigen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-02 | Muss | T2 | FR-01 |

Als Freelancer möchte ich alle meine Kunden sehen, damit ich schnell den richtigen finde.

- **AK-08.1** Die Liste zeigt pro Kunde den Anzeigenamen, den Ort und die Anzahl Projekte.
- **AK-08.2** Die Liste ist alphabetisch nach Anzeigename sortiert.
- **AK-08.3** Gegeben ich habe noch keine Kunden. Dann zeigt die Liste "Noch keine Kunden erfasst".

#### US-09 Kunde löschen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-02 | Muss | T2 | FR-10 |

Als Freelancer möchte ich einen falsch erfassten Kunden löschen, damit meine Liste übersichtlich bleibt.

- **AK-09.1** Gegeben ein Kunde ohne Projekte. Wenn ich "Löschen" wähle und bestätige, dann ist der Kunde aus der Liste entfernt.
- **AK-09.2** Gegeben ein Kunde mit einem Projekt. Wenn ich "Löschen" wähle, dann erscheint "Kunde hat noch Projekte und kann nicht gelöscht werden".
- **AK-09.3** Wenn ich die Rückfrage abbreche, dann bleibt der Kunde erhalten.

---

### 6.4 E-03 – Projekte

#### US-10 Projekt anlegen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-03 | Muss | T1 + T2 | FR-11, FR-12, FR-13 |

Als Freelancer möchte ich für einen Kunden ein Projekt mit Zielstunden und einer Beschreibung der Arbeiten anlegen, damit ich Zeiten darauf erfassen kann.

- **AK-10.1** Wenn ich den Kunden "Muster AG", den Namen "Website", die Auftragsbeschreibung "Neue Website mit 5 Seiten und Kontaktformular" und 40 Zielstunden speichere, dann erscheint das Projekt mit Status "aktiv".
- **AK-10.2** Wenn ich 0 Zielstunden eingebe, dann wird nicht gespeichert. Die Meldung lautet "Zielstunden: ganze Zahl von 1 bis 9999".
- **AK-10.3** Wenn ich 12.5 Zielstunden eingebe, dann wird nicht gespeichert. Die Meldung ist dieselbe wie in AK-10.2.
- **AK-10.4** Wenn ich keinen Kunden auswähle, dann wird nicht gespeichert.
- **AK-10.5** Wenn ich ohne Auftragsbeschreibung speichere, dann wird das Projekt angelegt.
- **AK-10.6** Wenn ich einen Namen mit 81 Zeichen eingebe, dann wird nicht gespeichert. Die Meldung lautet "Name: 1 bis 80 Zeichen".
- **AK-10.7** Wenn ich eine Auftragsbeschreibung mit 2001 Zeichen eingebe, dann wird nicht gespeichert. Die Meldung lautet "Auftragsbeschreibung: höchstens 2000 Zeichen".

#### US-11 Projekt bearbeiten

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-03 | Muss | T2 | FR-11, FR-12, FR-13, FR-16 |

Als Freelancer möchte ich Name, Auftragsbeschreibung und Zielstunden eines Projekts ändern, damit ich auf geänderte Aufträge reagieren kann.

- **AK-11.1** Gegeben ein aktives Projekt mit 40 Zielstunden. Wenn ich 60 Zielstunden speichere, dann zeigt die Projektübersicht 60 Zielstunden.
- **AK-11.2** Gegeben ein abgeschlossenes Projekt. Dann lassen sich Name, Auftragsbeschreibung und Zielstunden nicht ändern.
- **AK-11.3** Der Kunde eines Projekts lässt sich nicht ändern.
- **AK-11.4** Gegeben ein aktives Projekt. Wenn ich in der Auftragsbeschreibung die Zeile "Zusätzlich: Newsletter-Anmeldung" ergänze und speichere, dann zeigt das Projekt die Beschreibung mit dem Zeilenumbruch.

#### US-12 Projekt abschliessen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-03 | Muss | T1 + T2 | FR-14, FR-15, FR-16 |

Als Freelancer möchte ich ein fertiges Projekt abschliessen, damit seine Zeiten nicht mehr verändert werden.

- **AK-12.1** Gegeben ein aktives Projekt mit 38:30 Stunden erfassten Zeiten und ohne offenen Zeiteintrag. Wenn ich "Abschliessen" wähle und bestätige, dann hat das Projekt den Status "abgeschlossen".
- **AK-12.2** Gegeben auf dem Projekt läuft eine Zeit seit 08:00. Wenn ich "Abschliessen" wähle, dann erscheint "Bitte zuerst die laufende Zeit stoppen". Der Status bleibt "aktiv". Nach dem Stoppen lässt sich das Projekt abschliessen.
- **AK-12.3** Gegeben ein abgeschlossenes Projekt. Dann steht es beim Starten oder Erfassen einer Zeit nicht zur Auswahl.
- **AK-12.4** Für ein abgeschlossenes Projekt gibt es keine Funktion "Wieder öffnen".

#### US-13 Projektübersicht mit Budget

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-03 | Muss | T2 | FR-17 |

Als Freelancer möchte ich pro Projekt den Verbrauch der Zielstunden sehen, damit ich ein überzogenes Budget früh erkenne.

- **AK-13.1** Die Übersicht zeigt pro Projekt: Kunde, Name, Status, Ist-Zeit, Zielstunden und Verbrauch in Prozent.
- **AK-13.2** Gegeben 40 Zielstunden und 30:00 Stunden Ist-Zeit. Dann zeigt die Übersicht 75 %.
- **AK-13.3** Gegeben 40 Zielstunden und 42:00 Stunden Ist-Zeit. Dann zeigt die Übersicht 105 % hervorgehoben. Das Erfassen von Zeiten bleibt möglich.
- **AK-13.4** Gegeben 3 Zielstunden und 1:00 Stunde Ist-Zeit. Dann zeigt die Übersicht 33 %.
- **AK-13.5** Wenn ich ein Projekt in der Übersicht öffne, dann sehe ich seine Auftragsbeschreibung vollständig und mit Zeilenumbrüchen.

---

### 6.5 E-04 – Zeiterfassung

#### US-14 Zeit starten

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T1 + T2 | FR-18, FR-19, FR-20, FR-21, FR-25, FR-29 |

Als Freelancer möchte ich eine Zeit per Klick starten, damit ich den Beginn nicht von Hand eintippen muss.

- **AK-14.1** Gegeben keine laufende Zeit. Wenn ich um 08:00:40 mit Projekt "Website" und Beschreibung "Analyse" starte, dann läuft eine Zeit mit Beginn 08:00.
- **AK-14.2** Gegeben auf "Website" läuft eine Zeit seit 08:00 desselben Tages. Wenn ich um 10:15:30 eine Zeit auf "Hosting" starte, dann ist der Eintrag "Website" 08:00–10:15 gestoppt. Die neue Zeit auf "Hosting" läuft ab 10:15. Es erscheint die Meldung "Website gestoppt, Hosting gestartet".
- **AK-14.3** Gegeben eine Zeit läuft seit Sonntag, 22.11.2026, 17:00. Wenn ich am Montag eine Zeit starte, dann erscheint "Bitte zuerst die offene Zeit vom 22.11.2026 abschliessen".
- **AK-14.4** Wenn ich ohne Beschreibung starte, dann wird keine Zeit angelegt. Das Feld Beschreibung ist als Fehler markiert. Läuft bereits eine Zeit, läuft sie unverändert weiter.
- **AK-14.5** Gegeben eine Zeit läuft seit 10:15:10. Wenn ich um 10:15:50 eine neue Zeit starte, dann wird die laufende Zeit verworfen (FR-19). Die neue Zeit läuft ab 10:15.

#### US-15 Zeit stoppen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T1 + T2 | FR-18, FR-19, FR-23 |

Als Freelancer möchte ich die laufende Zeit per Klick stoppen, damit die Dauer automatisch berechnet wird.

- **AK-15.1** Gegeben eine Zeit läuft seit 08:00. Wenn ich um 09:30:59 stoppe, dann ist das Ende 09:30 und die Dauer 1:30.
- **AK-15.2** Gegeben eine Zeit läuft seit 08:00:40. Wenn ich um 08:00:59 stoppe, dann wird der Eintrag verworfen. Die Meldung lautet "Zeit unter einer Minute wurde verworfen".
- **AK-15.3** Gegeben keine laufende Zeit. Dann ist die Funktion "Stoppen" nicht verfügbar.

#### US-16 Zeit manuell erfassen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T1 + T2 | FR-18, FR-19, FR-22, FR-23, FR-24, FR-25 |

Als Freelancer möchte ich eine Zeit nachträglich erfassen, damit ich vergessene Arbeit nachtragen kann.

- **AK-16.1** Wenn ich am 23.11.2026 den Eintrag 13:00–15:15 auf "Website" speichere, dann erscheint er in der Tagesliste mit der Dauer 2:15.
- **AK-16.2** Wenn ich als Ende 12:00 und als Beginn 13:00 eingebe, dann wird nicht gespeichert. Die Meldung lautet "Ende muss nach dem Beginn liegen".
- **AK-16.3** Wenn ich 23.11.2026 08:00 bis 24.11.2026 08:01 eingebe, dann wird nicht gespeichert. Die Meldung lautet "Ein Eintrag darf höchstens 24 Stunden dauern".
- **AK-16.4** Wenn ich 23.11.2026 22:00 bis 24.11.2026 02:00 eingebe, dann wird der Eintrag gespeichert.
- **AK-16.5** Wenn Beginn und Ende in derselben Minute liegen, dann wird nicht gespeichert (FR-19).
- **AK-16.6** Gegeben eine Zeit läuft seit 08:00. Wenn ich den Eintrag 13:00–15:00 speichere, dann wird nicht gespeichert. Die Meldung lautet "Es läuft eine Zeit seit 08:00. Ein Eintrag darf nicht später beginnen".
- **AK-16.7** Gegeben eine Zeit läuft seit 08:00. Wenn ich den Eintrag 06:00–07:30 speichere, dann wird er gespeichert.
- **AK-16.8** Gegeben am 23.11.2026 läuft eine Zeit seit 08:00. Wenn ich den Eintrag 24.11.2026 09:00–10:00 speichere, dann wird nicht gespeichert. Die Meldung ist dieselbe wie in AK-16.6.

#### US-17 Zeit bearbeiten

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T1 + T2 | FR-16, FR-18, FR-22, FR-23, FR-25 |

Als Freelancer möchte ich einen Zeiteintrag korrigieren, damit falsche Angaben richtiggestellt werden.

- **AK-17.1** Gegeben der Eintrag 13:00–15:00. Wenn ich das Ende auf 15:30 ändere, dann zeigt die Tagesliste 13:00–15:30 mit der Dauer 2:30.
- **AK-17.2** Wenn ich Projekt und Beschreibung ändere, dann sind beide Änderungen gespeichert.
- **AK-17.3** Gegeben der Eintrag gehört zu einem abgeschlossenen Projekt. Dann ist "Bearbeiten" nicht verfügbar.
- **AK-17.4** Gegeben die Änderung erzeugt eine Überschneidung. Dann gilt [US-20](#us-20-überschneidung-erkennen).
- **AK-17.5** Gegeben eine Zeit läuft seit 08:00 und der Eintrag 06:00–07:00 existiert. Wenn ich ihn auf 08:30–09:00 ändere, dann wird nicht gespeichert. Die Meldung ist dieselbe wie in AK-16.6.

#### US-18 Zeit löschen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T2 | FR-16 |

Als Freelancer möchte ich einen Zeiteintrag löschen, damit irrtümliche Einträge verschwinden.

- **AK-18.1** Wenn ich "Löschen" wähle und bestätige, dann ist der Eintrag aus der Tagesliste entfernt.
- **AK-18.2** Wenn ich die Rückfrage abbreche, dann bleibt der Eintrag erhalten.
- **AK-18.3** Gegeben der Eintrag gehört zu einem abgeschlossenen Projekt. Dann ist "Löschen" nicht verfügbar.

#### US-19 Hinweis auf offene Zeit

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-04 | Muss | T2 | FR-21 |

Als Freelancer möchte ich auf eine vergessene laufende Zeit hingewiesen werden, damit ich sie korrekt abschliesse.

- **AK-19.1** Gegeben eine Zeit läuft seit dem 22.11.2026. Wenn ich am 23.11.2026 die Startseite öffne, dann sehe ich "Offene Zeit seit 22.11.2026 17:00".
- **AK-19.2** Der Hinweis enthält einen Link, der den Eintrag zum Bearbeiten öffnet.
- **AK-19.3** Gegeben die offene Zeit ist abgeschlossen. Dann verschwindet der Hinweis.

---

### 6.6 E-05 – Überschneidungen

#### US-20 Überschneidung erkennen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-05 | Muss | T1 + T2 | FR-22, FR-27 bis FR-31 |

Als Freelancer möchte ich vor dem Speichern über Überschneidungen informiert werden, damit keine Zeit doppelt gezählt wird.

In allen Kriterien ist die bearbeitete Zeit **09:00–10:00** am 23.11.2026.

- **AK-20.1** (Fall A) Gegeben der Eintrag 08:00–09:30. Wenn ich speichere, dann schlägt das System vor: "08:00–09:30 wird auf 08:00–09:00 gekürzt".
- **AK-20.2** (Fall B) Gegeben der Eintrag 09:15–09:45. Dann schlägt das System vor: "09:15–09:45 wird gelöscht".
- **AK-20.3** (Fall C) Gegeben der Eintrag 09:30–11:00. Dann schlägt das System vor: "09:30–11:00 beginnt neu um 10:00".
- **AK-20.4** (Fall D) Gegeben der Eintrag 08:00–12:00. Dann schlägt das System vor: "08:00–12:00 wird aufgeteilt in 08:00–09:00 und 10:00–12:00".
- **AK-20.5** Gegeben die Einträge 08:00–09:00 und 10:00–11:00. Dann gibt es keinen Vorschlag. Die bearbeitete Zeit wird direkt gespeichert.
- **AK-20.6** Gegeben die Einträge 08:00–09:30 und 09:45–10:30. Dann enthält der Vorschlag beide Korrekturen: "08:00–09:30 wird auf 08:00–09:00 gekürzt" (Fall A) und "09:45–10:30 beginnt neu um 10:00" (Fall C).
- **AK-20.7** Gegeben der überschneidende Eintrag gehört zu einem anderen Projekt. Dann wird er gleich behandelt wie in AK-20.1.
- **AK-20.8** Gegeben eine Zeit läuft seit 09:30 und es ist 09:45. Wenn ich 09:00–10:00 speichere, dann behandelt das System die laufende Zeit als 09:30–09:45 (Fall B).
- **AK-20.9** Gegeben ein Eintrag 08:00–09:30 von Benutzer B. Dann hat er keinen Einfluss auf die Prüfung von Benutzer A.
- **AK-20.10** Gegeben eine Zeit läuft seit 08:00 und es ist 10:30. Wenn ich 09:00–10:00 speichere, dann lehnt das System ab (FR-22). Es erscheint kein Korrekturvorschlag.
- **AK-20.11** (Grenzfall) Gegeben der Eintrag 08:00–10:00. Dann gilt Fall A und das System schlägt vor: "08:00–10:00 wird auf 08:00–09:00 gekürzt".

#### US-21 Korrektur bestätigen oder abbrechen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-05 | Muss | T1 + T2 | FR-32, FR-33 |

Als Freelancer möchte ich einen Korrekturvorschlag annehmen oder ablehnen, damit nichts ohne mein Einverständnis geändert wird.

- **AK-21.1** Gegeben der Vorschlag aus AK-20.6. Wenn ich "Übernehmen" wähle, dann sind 09:00–10:00 gespeichert, 08:00–09:30 auf 08:00–09:00 gekürzt und 09:45–10:30 auf 10:00–10:30 gekürzt.
- **AK-21.2** Wenn ich "Abbrechen" wähle, dann sind alle Einträge unverändert. Die bearbeitete Zeit ist nicht gespeichert.
- **AK-21.3** Gegeben beim Speichern tritt ein Fehler auf. Dann ist keine der Änderungen gespeichert.
- **AK-21.4** Gegeben ein anderer Eintrag hat sich seit dem Vorschlag geändert. Dann berechnet das System den Vorschlag neu und zeigt ihn erneut an.
- **AK-21.5** Gegeben der Vorschlag aus AK-20.4 für den Eintrag 08:00–12:00 mit Projekt "Website" und Beschreibung "Umsetzung". Wenn ich "Übernehmen" wähle, dann gibt es die Einträge 08:00–09:00, 09:00–10:00 und 10:00–12:00. Der erste und der dritte haben Projekt "Website" und Beschreibung "Umsetzung".

#### US-22 Abgeschlossene Projekte schützen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-05 | Muss | T1 + T2 | FR-16, FR-34 |

Als Freelancer möchte ich, dass Zeiten abgeschlossener Projekte unverändert bleiben, damit gemeldete Stunden stimmen.

- **AK-22.1** Gegeben der Eintrag 08:00–09:30 gehört zu einem abgeschlossenen Projekt. Wenn ich 09:00–10:00 speichere, dann lehnt das System ab. Die Meldung nennt den betroffenen Eintrag.
- **AK-22.2** In diesem Fall wird nichts gespeichert. Es erscheint kein Korrekturvorschlag.

---

### 6.7 E-06 – Auswertungen

#### US-23 Tagesliste

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-06 | Muss | T1 + T2 | FR-24, FR-26 |

Als Freelancer möchte ich alle Zeiten eines Tages sehen, damit ich meinen Tag kontrollieren kann.

- **AK-23.1** Die Liste zeigt pro Eintrag: Beginn, Ende, Dauer, Kunde, Projekt und Beschreibung. Sie ist nach Beginn sortiert.
- **AK-23.2** Gegeben die Einträge 08:00–09:30 und 13:00–15:15. Dann zeigt die Liste die Tagessumme 3:45.
- **AK-23.3** Gegeben der Eintrag 23.11.2026 22:00 bis 24.11.2026 02:00. Dann steht er in der Liste vom 23.11. Die Tagessumme vom 23.11. enthält 2:00. Die Tagessumme vom 24.11. enthält 2:00.
- **AK-23.4** Eine laufende Zeit erscheint mit dem Ende "läuft".
- **AK-23.5** Ich kann mit "vorheriger Tag" und "nächster Tag" blättern.

#### US-24 Wochenauswertung

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-06 | Muss | T1 + T2 | FR-24, FR-26 |

Als Freelancer möchte ich meine Stunden einer Woche sehen, damit ich die Woche gegenüber Kunden belegen kann.

- **AK-24.1** Die Auswertung zeigt die Summe pro Wochentag von Montag bis Sonntag und die Wochensumme.
- **AK-24.2** Die Auswertung zeigt zusätzlich die Summe pro Projekt.
- **AK-24.3** Gegeben ein Eintrag Sonntag, 29.11.2026, 22:00 bis Montag, 30.11.2026, 01:00. Dann zählt 2:00 zur Woche vom 23.11. und 1:00 zur Woche vom 30.11.
- **AK-24.4** Gegeben die Woche vom 23.03.2026 bis 29.03.2026 mit der Umstellung auf Sommerzeit. Gegeben der Eintrag Sonntag 01:00–04:00. Dann zeigt die Auswertung 2:00.

#### US-25 Projektauswertung nach Periode

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-06 | Muss | T1 + T2 | FR-17, FR-24 |

Als Freelancer möchte ich die Zeiten eines Projekts für einen Zeitraum sehen, damit ich dem Kunden einen Nachweis liefern kann.

- **AK-25.1** Ich wähle ein Projekt sowie ein Von- und ein Bis-Datum. Die Auswertung zeigt alle Einträge in diesem Zeitraum und deren Summe.
- **AK-25.2** Die Auswertung zeigt zusätzlich die gesamte Ist-Zeit, die Zielstunden und den Verbrauch in Prozent des Projekts.
- **AK-25.3** Gegeben das Bis-Datum liegt vor dem Von-Datum. Dann erscheint "Bis-Datum muss nach dem Von-Datum liegen".
- **AK-25.4** Gegeben ein Eintrag geht über das Bis-Datum hinaus. Dann zählen nur die Minuten bis Ende des Bis-Datums.
- **AK-25.5** Die Auswertung zeigt oben Kunde, Projektname und Auftragsbeschreibung.

---

### 6.8 Ausbaustufe (Kann)

Die Kann-Stories werden erst umgesetzt, wenn alle Muss-Stories abgenommen sind.  
Ihre Akzeptanzkriterien werden vor einer Umsetzung verfeinert.

#### US-26 Zwei-Faktor-Anmeldung einrichten

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-07 | Kann | T2 | – |

Als Freelancer möchte ich eine Zwei-Faktor-Anmeldung einrichten, damit ein gestohlenes Passwort allein nicht reicht.

- **AK-26.1** Wenn ich die Einrichtung starte, dann zeigt das System einen QR-Code für eine Authenticator-App.
- **AK-26.2** Die Zwei-Faktor-Anmeldung ist erst aktiv, wenn ich einen gültigen 6-stelligen Code eingegeben habe.

#### US-27 Anmelden mit zweitem Faktor

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-07 | Kann | T2 | – |

Als Freelancer mit Zwei-Faktor-Anmeldung möchte ich nach dem Passwort einen Code eingeben, damit mein Konto besser geschützt ist.

- **AK-27.1** Gegeben korrektes Passwort und gültiger Code. Dann bin ich angemeldet.
- **AK-27.2** Gegeben korrektes Passwort und falscher Code. Dann bin ich nicht angemeldet.
- **AK-27.3** Ein Code aus dem vorherigen oder nächsten 30-Sekunden-Fenster wird akzeptiert.

#### US-28 Sollzeit pro Wochentag

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-08 | Kann | T2 | FR-26 |

Als Freelancer möchte ich pro Wochentag eine Sollzeit festlegen, damit ich meine Auslastung sehe.

- **AK-28.1** Ich kann für jeden Wochentag eine Sollzeit in Minuten von 0 bis 1440 erfassen.
- **AK-28.2** Die Wochenauswertung zeigt Soll, Ist und Differenz pro Tag und für die Woche.

#### US-29 Abwesenheit erfassen

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-09 | Kann | T2 | – |

Als Freelancer möchte ich Ferien und Krankheit erfassen, damit diese Tage in der Auswertung erklärt sind.

- **AK-29.1** Ich kann eine Abwesenheit mit Datum und Art (Ferien, Krankheit, Andere) erfassen.
- **AK-29.2** Mit Sollzeiten (US-28) reduziert eine Abwesenheit die Sollzeit dieses Tages auf 0.

#### US-30 Zeiten exportieren

| Epic | Priorität | Termin | Fachregeln |
|---|---|---|---|
| E-10 | Kann | T2 | – |

Als Freelancer möchte ich die Zeiten einer Projektauswertung exportieren, damit ich sie dem Kunden senden kann.

- **AK-30.1** Die Projektauswertung bietet einen Export als CSV-Datei.
- **AK-30.2** Die Datei enthält pro Eintrag Datum, Beginn, Ende, Dauer und Beschreibung. Die Datei lässt sich in Excel ohne Anpassung öffnen.

---

## 7. Nicht-funktionale Anforderungen

Jede NFR hat einen messbaren Zielwert und eine Messmethode.  
Alle NFR haben die Priorität "Muss" und den Termin T2.

| ID | Bereich | Anforderung und Zielwert | Messmethode |
|---|---|---|---|
| **NFR-01** | Antwortzeit | 95 % der API-Anfragen antworten lokal in unter 300 ms. Gilt bei 5000 Zeiteinträgen pro Benutzer. | Messskript mit Testdaten, 100 Anfragen pro Endpoint |
| **NFR-02** | Validierung | Jede Eingabe wird im Frontend und im Backend geprüft. Ungültige Daten ergeben HTTP 400 mit einer deutschen Meldung. Es wird nichts gespeichert. | Integrationstest mit mindestens einem Fehlerfall pro schreibendem Endpoint |
| **NFR-03** | Fehlermeldungen | Jede Fehlermeldung nennt das betroffene Feld oder den betroffenen Eintrag. Technische Details (z. B. Stacktraces) erscheinen nie in der Oberfläche. | Abnahmetest aller Fehlerfälle aus Kapitel 6 |
| **NFR-04** | Passwortschutz | Passwörter werden nur als bcrypt-Hash mit Kostenfaktor ≥ 10 gespeichert. Sie erscheinen weder in der Datenbank noch in Logs im Klartext. | Prüfung der Datenbank und der Logs nach der Registrierung |
| **NFR-05** | Sitzung | Die Sitzung läuft über ein Cookie mit den Attributen HttpOnly und SameSite=Strict. Sie läuft nach 8 Stunden ab. | Prüfung der Cookie-Attribute im Browser, Test mit abgelaufenem Token |
| **NFR-06** | Zugriffsschutz | Ohne Anmeldung antwortet jeder geschützte Endpoint mit HTTP 401. Fremde Daten ergeben HTTP 404. | Integrationstest pro Ressource |
| **NFR-07** | Bedienbarkeit | Starten und Stoppen einer Zeit braucht ab der Startseite höchstens 2 Klicks. | Abnahmetest |
| **NFR-08** | Darstellung | Datum im Format TT.MM.JJJJ, Uhrzeit im Format HH:MM (24 h), Dauer im Format h:mm. | Abnahmetest aller Ansichten |
| **NFR-09** | Browser | Die Anwendung läuft in der aktuellen Version von Firefox, Chrome und Edge. Mindestbreite ist 1280 Pixel. | Abnahmetest in allen drei Browsern |
| **NFR-10** | Installation | Eine Neuinstallation nach README gelingt mit höchstens 4 Befehlen in unter 10 Minuten. Es braucht keinen separaten Datenbankserver. | Ein Teammitglied installiert auf einem frischen Klon und misst die Zeit |
| **NFR-11** | Testabdeckung | Die Domänenschicht hat mindestens 70 % Zeilenabdeckung. Die Unit-Tests laufen ohne Datenbank. | Abdeckungsbericht von Vitest |
| **NFR-12** | Schichtentrennung | Der Datenbankzugriff (Prisma) kommt nur in Repository-Klassen vor. Das Frontend enthält keine Fachregeln aus Kapitel 5. | Codesuche nach Prisma-Importen, Code-Review |
| **NFR-13** | Codequalität | ESLint meldet 0 Fehler. | `npm run lint` |

---

## 8. Rahmenbedingungen

### 8.1 Termine

| Datum | Meilenstein |
|---|---|
| 24.11.2026 | Entwurf Anforderungsdokument (L2) und Architekturdokument (L3) |
| 01.12.2026 | Zwischendemo 1: Anforderungen, Design und erste Domänenklassen |
| 15.12.2026 | Zwischendemo 2 (T1): Kernlogik mit Tests, Peer-Review |
| 03.01.2027 | Abgabe v1.0 (T2): Code und Dokumentation, Git-Tag `v1.0` |
| 05.01.2027 | Demo und Fachgespräch |

### 8.2 Technik

Die Begründungen folgen in den Designentscheiden (L4).

| Bereich | Wahl |
|---|---|
| Laufzeit | Node.js 24 |
| Backend | Express |
| Frontend | React mit shadcn/ui und Tailwind CSS |
| Datenablage | SQLite, Zugriff über Prisma hinter einer Repository-Schicht |
| Tests | Vitest |
| Architektur | Drei Schichten: Frontend, API, Business-Logik mit Datenablage |
| Werkzeuge | Git und GitHub, Kanban-Board in GitHub Projects |

### 8.3 Vorgaben aus dem Projektauftrag

- Die Business-Logik ist objektorientiert aufgebaut.
- Das Frontend kommuniziert nur über die REST-API mit dem Backend.
- Jeder KI-Einsatz wird im KI-Logbuch festgehalten.

---

## 9. Annahmen und offene Punkte

Die folgenden Punkte haben wir als Annahme festgelegt.  
Das Team bestätigt sie mit der Freigabe.  
Ändert sich eine Annahme, passen wir die betroffenen Stories an.

| ID | Annahme | Betrifft |
|---|---|---|
| **A-01** | Die Anmeldung erfolgt mit Benutzername, nicht mit E-Mail. | US-01, US-02 |
| **A-02** | Für Passwörter gilt Variante A: 12 bis 64 Zeichen, Sperrliste, keine Zeichenregeln. Die Begründung steht in [Kapitel 5.1](#51-benutzer-und-daten). | FR-04, FR-05 |
| **A-03** | Läuft bereits eine Zeit desselben Tages, stoppt ein neuer Start sie automatisch und ohne Rückfrage. So braucht ein Wechsel des Projekts nur einen Klick. | US-14 |
| **A-04** | Ein Projekt mit offenem Zeiteintrag lässt sich erst abschliessen, wenn die Zeit gestoppt ist. Erfasste Zeiten verhindern das Abschliessen nicht. | US-12 |
| **A-05** | Ein abgeschlossenes Projekt lässt sich nicht wieder öffnen. | US-12 |
| **A-06** | Ein Kunde mit Projekten lässt sich nicht löschen. | US-09 |
| **A-07** | Der Kunde eines Projekts ist nach dem Anlegen fest. | US-10, US-11 |
| **A-08** | Die Sitzung läuft nach 8 Stunden ab. | NFR-05 |
| **A-09** | Die Anmeldung wird nach 5 Fehlversuchen in 15 Minuten für 15 Minuten gesperrt. Die Zähler liegen im Speicher und gehen bei einem Neustart verloren. | FR-06 |

---

## 10. Freigabe

Mit der Freigabe bestätigt jedes Teammitglied den Inhalt dieses Dokuments.

| Name | Rolle | Datum | Freigabe |
|---|---|---|---|
| Ahmad Yaser Daqiq | Teammitglied | | offen |
| Hendrik Ott | Teammitglied | | offen |
| Erich Imfeld | Teammitglied | | offen |
