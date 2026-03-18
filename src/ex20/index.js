/**
 * ex20. 게임 맵 최단거리 (Game Map Shortest Path)
 * 2D 맵에서 (0,0)부터 (n-1,m-1)까지 최소 이동 칸 수 반환
 * 프로그래머스 Level 2 / 카카오 유사 유형
 */

const dx = [-1, 1, 0, 0]; // 상하좌우 row 이동
const dy = [0, 0, -1, 1]; // 상하좌우 col 이동

/**
 * @param {number[][]} maps
 * @returns {number}
 */
function solution(maps) {
  // 여기에 풀이를 작성하세요
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution([
  [1,0,1,1,1],
  [1,0,1,0,1],
  [1,0,1,1,1],
  [1,1,1,0,1],
  [0,0,0,0,1]
])); // 11
 
console.log(solution([
  [1,0,1,1,1],
  [1,0,1,0,1],
  [1,1,1,0,1],
  [0,0,0,0,1],
  [0,0,0,0,1]
])); // -1

module.exports = { solution };