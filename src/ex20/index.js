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
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const queue = [[0, 0, 1]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col, dist] = queue.shift();

    if (row === n - 1 && col === m - 1) return dist;

    for (let i = 0; i < 4; i++) {
      const nr = row + dx[i];
      const nc = col + dy[i];
 
      if (nr >= 0 && nr < n && nc >= 0 && nc < m && !visited[nr][nc] && maps[nr][nc] === 1) {
        visited[nr][nc] = true;
        queue.push([nr, nc, dist + 1]);
      }
    }
  }

  return -1;
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