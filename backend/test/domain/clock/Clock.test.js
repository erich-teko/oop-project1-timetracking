import { describe, expect, it } from 'vitest';
import { Clock } from '../../../src/domain/clock/Clock.js';
import { SystemClock } from '../../../src/domain/clock/SystemClock.js';
import { FixedClock } from '../../support/FixedClock.js';

describe('Clock', () => {
  it('lässt sich nicht direkt erzeugen, weil sie abstrakt ist', () => {
    expect(() => new Clock()).toThrow(TypeError);
  });

  it('verlangt, dass eine Unterklasse now() umsetzt', () => {
    class IncompleteClock extends Clock {}

    expect(() => new IncompleteClock().now()).toThrow('IncompleteClock muss now() umsetzen.');
  });
});

describe('SystemClock', () => {
  it('liefert die aktuelle Systemzeit', () => {
    const before = Date.now();

    const now = new SystemClock().now().getTime();

    expect(now).toBeGreaterThanOrEqual(before);
    expect(now).toBeLessThanOrEqual(Date.now());
  });
});

describe('FixedClock', () => {
  it('liefert immer den festgelegten Zeitpunkt', () => {
    const clock = new FixedClock('2026-12-01T10:00:00Z');

    expect(clock.now().toISOString()).toBe('2026-12-01T10:00:00.000Z');
    expect(clock.now().toISOString()).toBe('2026-12-01T10:00:00.000Z');
  });

  it('lässt sich auf einen neuen Zeitpunkt setzen', () => {
    const clock = new FixedClock('2026-12-01T10:00:00Z');

    clock.setTo('2026-12-01T23:59:00Z');

    expect(clock.now().toISOString()).toBe('2026-12-01T23:59:00.000Z');
  });

  it('schützt die Zeit vor Änderungen durch den Aufrufer', () => {
    const clock = new FixedClock('2026-12-01T10:00:00Z');

    clock.now().setFullYear(2030);

    expect(clock.now().toISOString()).toBe('2026-12-01T10:00:00.000Z');
  });
});
