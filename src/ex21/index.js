/**
 * ex21. 창고 재고 이동 시뮬레이션 (Warehouse Stock Move Simulation)
 * FIFO로 재고를 이동시킨 뒤, removes 출처의 재고를 모두 제거하고 창고별 잔량 반환
 * 큐/시뮬레이션 유형
 */

/**
 * @param {number[]} stocks - stocks[i]: i+1번 창고의 초기 재고량 (출처 = i+1)
 * @param {number[][]} moves - [from, to, amount] 이동 명령 목록 (1-indexed)
 * @param {number[]} removes - 제거할 출처 번호 목록
 * @returns {number[]} 각 창고에 남은 재고 총량
 */
function solution(stocks, moves, removes) {
  // 여기에 풀이를 작성하세요
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution(
  [30, 30, 30, 30],
  [[1, 2, 10], [2, 3, 20], [3, 4, 30]],
  [1]
)); // [0, 10, 20, 60]

module.exports = { solution };
