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
  // 여기에 풀이를 작성하세요
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution([3, 2, 0, 4], 1)); // true
console.log(solution([1, 2], 0));       // true
console.log(solution([1], -1));         // false

module.exports = { solution };
