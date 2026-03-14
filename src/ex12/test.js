const { hasCycle, buildLinkedList } = require('./index');

describe('ex12. 연결 리스트 사이클 감지', () => {
  // ── 사이클 있음 ─────────────────────────────────────────────────────────────
  test('사이클 있음: [3, 2, 0, 4], pos=1 → true', () => {
    const head = buildLinkedList([3, 2, 0, 4], 1);
    expect(hasCycle(head)).toBe(true);
  });

  test('사이클 있음: [1, 2], pos=0 → true', () => {
    const head = buildLinkedList([1, 2], 0);
    expect(hasCycle(head)).toBe(true);
  });

  test('사이클 있음: 모든 노드가 하나의 사이클 [1, 2, 3], pos=0 → true', () => {
    const head = buildLinkedList([1, 2, 3], 0);
    expect(hasCycle(head)).toBe(true);
  });

  test('사이클 있음: tail이 자기 자신을 가리킴 [1, 2, 3], pos=2 → true', () => {
    const head = buildLinkedList([1, 2, 3], 2);
    expect(hasCycle(head)).toBe(true);
  });

  // ── 사이클 없음 ─────────────────────────────────────────────────────────────
  test('사이클 없음: [1], pos=-1 → false', () => {
    const head = buildLinkedList([1], -1);
    expect(hasCycle(head)).toBe(false);
  });

  test('사이클 없음: [1, 2], pos=-1 → false', () => {
    const head = buildLinkedList([1, 2], -1);
    expect(hasCycle(head)).toBe(false);
  });

  test('사이클 없음: [1, 2, 3, 4, 5], pos=-1 → false', () => {
    const head = buildLinkedList([1, 2, 3, 4, 5], -1);
    expect(hasCycle(head)).toBe(false);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('엣지 케이스: 빈 리스트 → false', () => {
    expect(hasCycle(null)).toBe(false);
  });
});