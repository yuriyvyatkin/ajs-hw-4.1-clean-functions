import defineHealthStatus from '../basic';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Лучник', health: 40 }, 'wounded'],
  [{ name: 'Воин', health: 5 }, 'critical'],
])(
  'should define health status for %o as %s',
  (player, expected) => {
    const result = defineHealthStatus(player);
    expect(result).toBe(expected);
  },
);
