const { solution } = require('./index');

describe('ex16. 타겟 넘버', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  test('[1,1,1,1,1] target=3 → 5', () => {
    expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
  });

  test('[4,1,2,1] target=4 → 2', () => {
    expect(solution([4, 1, 2, 1], 4)).toBe(2);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('숫자 2개: [1,1] target=0 → 2 (+1-1, -1+1)', () => {
    expect(solution([1, 1], 0)).toBe(2);
  });

  test('숫자 2개: [1,1] target=2 → 1 (+1+1=2)', () => {
    expect(solution([1, 1], 2)).toBe(1);
  });

  test('만들 수 없는 경우 → 0', () => {
    expect(solution([1, 1], 5)).toBe(0);
  });

  test('모두 더해야 하는 경우: [1,2,3] target=6 → 1', () => {
    expect(solution([1, 2, 3], 6)).toBe(1);
  });

  test('모두 빼야 하는 경우: [1,2,3] target=-6 → 1', () => {
    expect(solution([1, 2, 3], -6)).toBe(1);
  });
});