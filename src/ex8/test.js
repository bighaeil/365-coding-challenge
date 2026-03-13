const { search } = require('./index');

describe('ex8. 이진 탐색', () => {
  test('[-1,0,3,5,9,12], target=9 → 4', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('[-1,0,3,5,9,12], target=2 → -1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('[5], target=5 → 0', () => {
    expect(search([5], 5)).toBe(0);
  });

  test('[5], target=3 → -1', () => {
    expect(search([5], 3)).toBe(-1);
  });
});