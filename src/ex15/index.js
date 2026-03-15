/**
 * ex15. 프린터 우선순위 (Printer Priority)
 * 우선순위 기반 프린터에서 내 문서가 몇 번째로 인쇄되는지 반환
 * 카카오 코딩테스트 실제 출제 유형
 */

/**
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  // 여기에 풀이를 작성하세요
  const queue = priorities.map((priority, index) => [priority, index])
  let count = 0;

  while (queue.length > 0) {
    const [priority, index] = queue.shift();
    const hasHigher = queue.some(([p]) => p > priority);
 
    if (hasHigher) {
      queue.push([priority, index]);
    } else {
      count++;
      if (index === location) return count;
    }
  }
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5

module.exports = { solution };