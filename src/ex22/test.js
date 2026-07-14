const { maxPathSum, buildTree } = require('./index');

describe('ex22. 이진 트리 최대 경로 합', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  // 경로: 3→9=12, 3→20→15=38, 3→20→7=30 → 최대 38
  test('합 38: [3, 9, 20, null, null, 15, 7] → 38', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(maxPathSum(root)).toBe(38);
  });

  test('오른쪽 한쪽만: [1, null, 2] → 3', () => {
    const root = buildTree([1, null, 2]);
    expect(maxPathSum(root)).toBe(3);
  });

  test('루트만 있는 경우: [1] → 1', () => {
    const root = buildTree([1]);
    expect(maxPathSum(root)).toBe(1);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('빈 트리: null → 0', () => {
    expect(maxPathSum(null)).toBe(0);
  });

  // ── 편향 트리 ───────────────────────────────────────────────────────────────
  // 1→2→3→4 = 10
  test('왼쪽 편향 트리: [1, 2, null, 3, null, 4] → 10', () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(maxPathSum(root)).toBe(10);
  });

  // 1→2→3 = 6
  test('오른쪽 편향 트리: [1, null, 2, null, 3] → 6', () => {
    const root = buildTree([1, null, 2, null, 3]);
    expect(maxPathSum(root)).toBe(6);
  });

  // 경로: 1→3→7=11 이 최대 (1→2→5=8, 1→3→6=10)
  test('완전 이진 트리: [1, 2, 3, 4, 5, 6, 7] → 11', () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(maxPathSum(root)).toBe(11);
  });

  // ── 음수 함정 ───────────────────────────────────────────────────────────────
  // 유일한 루트→리프 경로는 1→-5 = -4. null을 0으로 취급하면 1이 되는 오답을 잡는다.
  test('음수 자식 트랩: [1, -5] → -4', () => {
    const root = buildTree([1, -5]);
    expect(maxPathSum(root)).toBe(-4);
  });

  // 경로: -10→2=-8, -10→-3=-13 → 덜 나쁜 -8 선택
  test('음수 중 최대(덜 나쁜 쪽): [-10, 2, -3] → -8', () => {
    const root = buildTree([-10, 2, -3]);
    expect(maxPathSum(root)).toBe(-8);
  });

  // 중간 노드가 음수여도 루트→리프 경로엔 반드시 포함: 10→-1→20 = 29
  test('음수 중간 노드 포함: [10, null, -1, null, 20] → 29', () => {
    const root = buildTree([10, null, -1, null, 20]);
    expect(maxPathSum(root)).toBe(29);
  });
});
