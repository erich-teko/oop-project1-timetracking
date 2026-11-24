const NOT_FOUND = 404;

/**
 * Antwortet auf eine Adresse ohne Route mit HTTP 404 als JSON.
 * Die Meldung nennt nur den Pfad, nie die Query. Diese kann vertrauliche Werte enthalten.
 */
export function notFoundHandler(req, res) {
  res.status(NOT_FOUND).json({
    error: { message: `Die Adresse ${req.method} ${req.path} gibt es nicht.` },
  });
}
