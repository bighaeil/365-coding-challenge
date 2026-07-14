/**
 * ex21. 창고 재고 이동 시뮬레이션 (Warehouse Stock Move Simulation)
 * FIFO로 재고를 이동시킨 뒤, removes 출처의 재고를 모두 제거하고 창고별 잔량 반환
 * 큐/시뮬레이션 유형
 */

/**
 * 기본 풀이 — 각 창고를 { origin, count } 덩어리의 큐로 관리
 * @param {number[]} stocks
 * @param {number[][]} moves
 * @param {number[]} removes
 * @returns {number[]}
 */
function solution(stocks, moves, removes) {
  // 각 창고를 큐로 관리: [{ origin, count }, ...]
  const warehouses = stocks.map((count, i) => [{ origin: i + 1, count }]);

  for (const [from, to, amount] of moves) {
    const src = warehouses[from - 1];
    const dst = warehouses[to - 1];
    let remaining = amount;

    while (remaining > 0 && src.length > 0) {
      const head = src[0];

      if (head.count <= remaining) {
        // 맨 앞 덩어리 통째로 이동
        dst.push({ ...head });
        remaining -= head.count;
        src.shift();
      } else {
        // 필요한 만큼만 쪼개서 이동, 원본은 남은 양만큼 차감
        dst.push({ origin: head.origin, count: remaining });
        head.count -= remaining;
        remaining = 0;
      }
    }
  }

  // 출처가 removes에 포함된 덩어리는 제거 후 합산
  const removeSet = new Set(removes);
  return warehouses.map(wh =>
    wh.filter(item => !removeSet.has(item.origin))
      .reduce((sum, item) => sum + item.count, 0)
  );
}

/**
 * 최적화 풀이 — shift() O(K) 대신 head 포인터로 amortized O(1) 꺼내기
 * @param {number[]} stocks
 * @param {number[][]} moves
 * @param {number[]} removes
 * @returns {number[]}
 */
function solutionOptimized(stocks, moves, removes) {
  // 각 창고: { items: [{origin, count}, ...], head: number }
  const warehouses = stocks.map((count, i) => ({
    items: [{ origin: i + 1, count }],
    head: 0,
  }));

  for (const [from, to, amount] of moves) {
    const src = warehouses[from - 1];
    const dst = warehouses[to - 1];
    let remaining = amount;

    while (remaining > 0 && src.head < src.items.length) {
      const cur = src.items[src.head];

      if (cur.count <= remaining) {
        dst.items.push({ origin: cur.origin, count: cur.count });
        remaining -= cur.count;
        src.head++; // shift 대신 포인터만 증가
      } else {
        dst.items.push({ origin: cur.origin, count: remaining });
        cur.count -= remaining;
        remaining = 0;
      }
    }
  }

  const removeSet = new Set(removes);
  return warehouses.map(wh => {
    let sum = 0;
    for (let i = wh.head; i < wh.items.length; i++) {
      if (!removeSet.has(wh.items[i].origin)) sum += wh.items[i].count;
    }
    return sum;
  });
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution(
  [30, 30, 30, 30],
  [[1, 2, 10], [2, 3, 20], [3, 4, 30]],
  [1]
)); // [0, 10, 20, 60]

console.log(solutionOptimized(
  [30, 30, 30, 30],
  [[1, 2, 10], [2, 3, 20], [3, 4, 30]],
  [1]
)); // [0, 10, 20, 60]

module.exports = { solution, solutionOptimized };
