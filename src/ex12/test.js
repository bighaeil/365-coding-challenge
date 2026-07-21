const { solution } = require('./index');

describe('ex12. 연결 리스트 사이클 감지', () => {
  // ── 사이클 있음 ─────────────────────────────────────────────────────────────
  test('사이클 있음: [3, 2, 0, 4], pos=1 → true', () => {
    expect(solution([3, 2, 0, 4], 1)).toBe(true);
  });

  test('사이클 있음: [1, 2], pos=0 → true', () => {
    expect(solution([1, 2], 0)).toBe(true);
  });

  test('사이클 있음: 모든 노드가 하나의 사이클 [1, 2, 3], pos=0 → true', () => {
    expect(solution([1, 2, 3], 0)).toBe(true);
  });

  test('사이클 있음: tail이 자기 자신을 가리킴 [1, 2, 3], pos=2 → true', () => {
    expect(solution([1, 2, 3], 2)).toBe(true);
  });

  // ── 사이클 없음 ─────────────────────────────────────────────────────────────
  test('사이클 없음: [1], pos=-1 → false', () => {
    expect(solution([1], -1)).toBe(false);
  });

  test('사이클 없음: [1, 2], pos=-1 → false', () => {
    expect(solution([1, 2], -1)).toBe(false);
  });

  test('사이클 없음: [1, 2, 3, 4, 5], pos=-1 → false', () => {
    expect(solution([1, 2, 3, 4, 5], -1)).toBe(false);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('엣지 케이스: 빈 리스트 [], pos=-1 → false', () => {
    expect(solution([], -1)).toBe(false);
  });
});
