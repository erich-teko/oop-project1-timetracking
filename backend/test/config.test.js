import { describe, expect, it } from 'vitest';
import { loadConfig } from '../src/config.js';

describe('loadConfig', () => {
  it('liest den Port aus der Umgebung', () => {
    expect(loadConfig({ PORT: '4000' }).port).toBe(4000);
  });

  it('nimmt ohne Angabe den Standardport 3000', () => {
    expect(loadConfig({}).port).toBe(3000);
  });

  it('nimmt bei leerem Wert den Standardport 3000', () => {
    expect(loadConfig({ PORT: '' }).port).toBe(3000);
  });

  it.each(['abc', '0', '65536', '3000.5'])('bricht bei ungültigem Port "%s" mit klarer Meldung ab', (port) => {
    expect(() => loadConfig({ PORT: port })).toThrow(`PORT muss eine ganze Zahl von 1 bis 65535 sein, erhalten: "${port}".`);
  });
});
