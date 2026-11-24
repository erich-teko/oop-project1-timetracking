/**
 * Platzhalter bis zur Anmeldung aus #64: ordnet jede Anfrage einem festen
 * Demo-Benutzer zu. So können die Pakete in T1 mit `req.userId` arbeiten,
 * ohne auf das Login zu warten.
 *
 * #64 ersetzt diese Middleware durch die Prüfung des JWT-Cookies.
 * Die Routen lesen den Benutzer weiterhin aus `req.userId`.
 *
 * @param {{ userId: number }} options ID des Demo-Benutzers aus den Seed-Daten
 */
export function createDemoUserMiddleware({ userId }) {
  return (req, res, next) => {
    req.userId = userId;
    next();
  };
}
