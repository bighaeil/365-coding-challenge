const { maxDepth, buildTree } = require('./index');

describe('ex13. 이진 트리 최대 깊이', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  test('깊이 3: [3, 9, 20, null, null, 15, 7] → 3', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  test('깊이 2: [1, null, 2] → 2', () => {
    const root = buildTree([1, null, 2]);
    expect(maxDepth(root)).toBe(2);
  });

  test('깊이 1: 루트만 있는 경우 [1] → 1', () => {
    const root = buildTree([1]);
    expect(maxDepth(root)).toBe(1);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('빈 트리: null → 0', () => {
    expect(maxDepth(null)).toBe(0);
  });

  // ── 편향 트리 ───────────────────────────────────────────────────────────────
  test('왼쪽으로 편향된 트리: [1, 2, null, 3, null, 4] → 4', () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });

  test('오른쪽으로 편향된 트리: [1, null, 2, null, 3] → 3', () => {
    const root = buildTree([1, null, 2, null, 3]);
    expect(maxDepth(root)).toBe(3);
  });

  // ── 균형 트리 ───────────────────────────────────────────────────────────────
  test('완전 이진 트리: [1, 2, 3, 4, 5, 6, 7] → 3', () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(maxDepth(root)).toBe(3);
  });
});