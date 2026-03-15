const { solution } = require('./index');

describe('ex15. 프린터 우선순위', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  test('[2,1,3,2] location=2 → 1', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
  });

  test('[1,1,9,1,1,1] location=0 → 5', () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('문서가 1개 → 1', () => {
    expect(solution([5], 0)).toBe(1);
  });

  test('모두 같은 우선순위 → 순서대로', () => {
    expect(solution([1, 1, 1, 1], 0)).toBe(1);
    expect(solution([1, 1, 1, 1], 3)).toBe(4);
  });

  test('내 문서가 가장 높은 우선순위 → 1', () => {
    expect(solution([1, 2, 3, 9, 1], 3)).toBe(1);
  });

  test('내 문서가 마지막으로 인쇄 → 전체 길이', () => {
    expect(solution([9, 8, 7, 1], 3)).toBe(4);
  });

  test('[3,3,9,3,3] location=0 → 4', () => {
    expect(solution([3, 3, 9, 3, 3], 0)).toBe(4);
  });
});