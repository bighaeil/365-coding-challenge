/**
 * ex12. 연결 리스트 사이클 감지 (Linked List Cycle Detection)
 *
 * 값 배열 arr과 사이클 위치 pos가 주어질 때,
 *  - arr로 단일 연결 리스트를 구성하고 (pos != -1이면 tail.next = nodes[pos])
 *  - 사이클이 존재하면 true, 없으면 false를 반환한다.
 *
 * @param {number[]} arr  각 노드의 값 배열
 * @param {number}   pos  tail의 next가 가리킬 노드 인덱스(0-based). -1이면 사이클 없음
 * @returns {boolean}
 */
function solution(arr, pos) {
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  // 1) 노드 연결 — 배열로 연결 리스트 구성
  if (arr.length === 0) return false;

  const nodes = arr.map((val) => new ListNode(val));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (pos !== -1) {
    nodes[nodes.length - 1].next = nodes[pos]; // tail → nodes[pos] 로 사이클 연결
  }
  const head = nodes[0];

  // 2) 사이클 감지 — 플로이드 순환 감지 (토끼와 거북이), O(n) 시간 / O(1) 공간
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution([3, 2, 0, 4], 1)); // true
console.log(solution([1, 2], 0));       // true
console.log(solution([1], -1));         // false

module.exports = { solution };
