import { defineConfig } from 'vitest/config';

/** Mindestabdeckung der Domänenschicht in Prozent (NFR-11). */
const DOMAIN_MIN_LINE_COVERAGE = 70;

export default defineConfig({
  test: {
    include: ['test/**/*.test.js'],
    coverage: {
      provider: 'v8',
      // Alle Quelldateien zählen, auch solche ohne Test.
      include: ['src/**/*.js'],
      // Der Startpunkt öffnet nur einen Port und enthält keine Logik.
      exclude: ['src/server.js'],
      reporter: [['text', { skipFull: false }], 'html'],
      // Der Textbericht listet jeden Ordner einzeln, also auch src/domain.
      // Die Schwelle gilt nur für die Domänenschicht.
      thresholds: {
        'src/domain/**': { lines: DOMAIN_MIN_LINE_COVERAGE },
      },
    },
  },
});
