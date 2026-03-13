const { climbStairs } = require('./index');

describe('ex10. 클라이밍 계단', () => {
  test('n=1 → 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('n=2 → 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('n=3 → 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('n=5 → 8', () => {
    expect(climbStairs(5)).toBe(8);
  });

  test('n=10 → 89', () => {
    expect(climbStairs(10)).toBe(89);
  });
});