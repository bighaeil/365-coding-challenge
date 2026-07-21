const { solution } = require('./index');

// ─── 테스트 하네스: 배열과 pos로 연결 리스트를 구성한다 ─────────────────────────
// 풀이자(solution)는 pos를 볼 수 없고, head 노드만 받아 next를 순회해야 한다.
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function buildLinkedList(arr, pos) {
  if (arr.length === 0) return null;

  const nodes = arr.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (pos !== -1) {
    nodes[nodes.length - 1].next = nodes[pos]; // tail → nodes[pos] 로 사이클 연결
  }
  return nodes[0];
}

describe('ex12. 연결 리스트 사이클 감지', () => {
  // ── 사이클 있음 ─────────────────────────────────────────────────────────────
  test('사이클 있음: [3, 2, 0, 4], pos=1 → true', () => {
    expect(solution(buildLinkedList([3, 2, 0, 4], 1))).toBe(true);
  });

  test('사이클 있음: [1, 2], pos=0 → true', () => {
    expect(solution(buildLinkedList([1, 2], 0))).toBe(true);
  });

  test('사이클 있음: 모든 노드가 하나의 사이클 [1, 2, 3], pos=0 → true', () => {
    expect(solution(buildLinkedList([1, 2, 3], 0))).toBe(true);
  });

  test('사이클 있음: tail이 자기 자신을 가리킴 [1, 2, 3], pos=2 → true', () => {
    expect(solution(buildLinkedList([1, 2, 3], 2))).toBe(true);
  });

  // ── 사이클 없음 ─────────────────────────────────────────────────────────────
  test('사이클 없음: [1], pos=-1 → false', () => {
    expect(solution(buildLinkedList([1], -1))).toBe(false);
  });

  test('사이클 없음: [1, 2], pos=-1 → false', () => {
    expect(solution(buildLinkedList([1, 2], -1))).toBe(false);
  });

  test('사이클 없음: [1, 2, 3, 4, 5], pos=-1 → false', () => {
    expect(solution(buildLinkedList([1, 2, 3, 4, 5], -1))).toBe(false);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('엣지 케이스: 빈 리스트(null) → false', () => {
    expect(solution(null)).toBe(false);
  });
});
