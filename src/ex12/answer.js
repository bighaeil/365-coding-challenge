/**
 * ex12. 연결 리스트 사이클 감지 (Linked List Cycle Detection)
 *
 * 단일 연결 리스트의 head 노드가 주어진다.
 * next 포인터를 따라갈 때 사이클이 존재하면 true, 끝(null)에 도달하면 false를 반환한다.
 *
 * 플로이드 순환 감지 알고리즘 (토끼와 거북이)
 * 시간 복잡도: O(n), 공간 복잡도: O(1)
 *
 * @param {ListNode | null} head
 * @returns {boolean}
 */
function solution(head) {
  let slow = head; // 1칸씩 이동
  let fast = head; // 2칸씩 이동

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true; // 두 포인터가 만나면 사이클
  }

  return false; // fast가 끝(null)에 도달하면 사이클 없음
}

module.exports = { solution };
