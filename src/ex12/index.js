/**
 * ex12. 연결 리스트 사이클 감지 (Linked List Cycle Detection)
 * 단일 연결 리스트에서 사이클 존재 여부를 판별한다.
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
function hasCycle(head) {
  // 여기에 풀이를 작성하세요
}

// ─── 테스트용 헬퍼: 배열과 pos로 연결 리스트 생성 ───────────────────────────
function buildLinkedList(arr, pos) {
  if (arr.length === 0) return null;

  const nodes = arr.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (pos !== -1) {
    nodes[nodes.length - 1].next = nodes[pos]; // 사이클 연결
  }
  return nodes[0];
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
const head1 = buildLinkedList([3, 2, 0, 4], 1);
console.log(hasCycle(head1)); // true

const head2 = buildLinkedList([1, 2], 0);
console.log(hasCycle(head2)); // true

const head3 = buildLinkedList([1], -1);
console.log(hasCycle(head3)); // false

module.exports = { hasCycle, buildLinkedList, ListNode };