const { fib } = require('./index');

describe('ex9. 피보나치 수열', () => {
  test('n=0 → 0', () => {
    expect(fib(0)).toBe(0);
  });

  test('n=1 → 1', () => {
    expect(fib(1)).toBe(1);
  });

  test('n=6 → 8', () => {
    expect(fib(6)).toBe(8);
  });

  test('n=10 → 55', () => {
    expect(fib(10)).toBe(55);
  });

  test('n=30 → 832040', () => {
    expect(fib(30)).toBe(832040);
  });
});