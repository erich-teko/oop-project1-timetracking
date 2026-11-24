# Bruno-Sammlung

Mit dieser Sammlung lässt sich das ganze Backend von Hand oder automatisch prüfen.  
Jeder Endpunkt hat mindestens einen Eintrag mit Tests für Status und Antwort.

## Benutzen

1. Backend starten: `npm run dev` im Hauptverzeichnis.
2. In [Bruno](https://www.usebruno.com/) den Ordner `bruno` als Sammlung öffnen.
3. Rechts oben die Umgebung `local` wählen.
4. Einen Eintrag senden oder die ganze Sammlung mit "Run" ausführen.

## Aufbau

| Ordner | Inhalt |
|---|---|
| `System` | Infoseite, Weiterleitung von `/` und Health |
| `Fehlerfaelle` | Einheitliches Fehlerformat: unbekannte Adresse, ungültiges JSON, zu grosser und unlesbarer Inhalt |
| `environments` | Umgebung `local` mit `baseUrl`, `token` und `userId` |

Neue Pakete legen pro Fachbereich einen eigenen Ordner an, zum Beispiel `Kunden` oder `Projekte`.  
Pro Endpunkt gibt es einen Eintrag für den Erfolgsfall und einen für jeden Fehlerfall (400, 404, 409).  
Der Name eines Eintrags nennt die betroffene ID, wo es passt, zum Beispiel `AK-15.2 Eintrag unter einer Minute`.

## Variablen

Ein Eintrag verwendet eine Variable mit doppelten geschweiften Klammern, zum Beispiel `{{baseUrl}}/api/health`.  
Alle Variablen stehen an einem einzigen Ort: in der Umgebung `local`, Datei `environments/local.bru`.  
Die Sammlung selbst definiert keine Variablen. So gibt es keine doppelten Werte.

| Variable | Wert | Zweck |
|---|---|---|
| `baseUrl` | `http://localhost:3000` | Adresse des Backends, Anfang jeder URL |
| `token` | geheim, heute leer | Token der Anmeldung, falls #64 es liefert |
| `userId` | geheim, heute leer | ID des angemeldeten Benutzers |

**Wichtig:** Ohne gewählte Umgebung ist `{{baseUrl}}` unbekannt und jede Anfrage schlägt fehl.  
Darum immer zuerst rechts oben die Umgebung `local` wählen.

Werte ansehen und ändern: rechts oben bei der Umgebung "Configure" wählen.  
Läuft das Backend auf einem anderen Port, dort `baseUrl` anpassen, zum Beispiel auf `http://localhost:4000`.  
Diese Änderung nicht committen, solange sie nur für den eigenen Rechner gilt.

Neue Variablen kommen ebenfalls in die Umgebung, nicht in die Sammlung oder in einzelne Einträge.  
Werte, die nicht in Git gehören, kommen in die Liste `vars:secret`.

Geheime Variablen (`vars:secret`) stehen in der Datei nur mit ihrem Namen.  
Ihren Wert speichert Bruno lokal auf dem eigenen Rechner. So kommt kein Token in Git.  
Heute sind `token` und `userId` noch leer. Gefüllt werden sie erst durch den Eintrag "Anmelden" aus #64.  
Den aktuellen Wert zeigt das Auge-Symbol in der Umgebung unter "Configure".

## Anmeldung und Token

Die Anmeldung kommt mit #64.  
Der Eintrag "Anmelden" speichert dann die Werte aus der Antwort in der Umgebung, im Block `script:post-response`:

```js
bru.setEnvVar("token", res.body.token);
bru.setEnvVar("userId", res.body.userId);
```

Alle weiteren Einträge verwenden die Werte als `{{token}}` und `{{userId}}`.  
Die Umgebung führt beide als geheime Variablen. Bruno speichert ihre Werte nur lokal, nicht in Git.

Laut NFR-05 läuft die Sitzung über ein HttpOnly-Cookie.  
Bruno speichert dieses Cookie selbst und sendet es bei jeder weiteren Anfrage mit.  
Ob die Antwort der Anmeldung das Token zusätzlich im Inhalt liefert, entscheidet das Team in #64.  
Liefert sie es nicht, speichert der Eintrag nur `userId`.  
Im Frontend darf das Token nie im localStorage liegen, sonst verliert das HttpOnly-Cookie seinen Schutz.
