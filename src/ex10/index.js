/**
 * ex10. 클라이밍 계단 (Climbing Stairs)
 * n개의 계단을 오르는 방법의 수 반환
 */

function climbStairs(n) {
  // 여기에 풀이를 작성하세요
  if (n <= 2) return n;

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// 실행 예시
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8

module.exports = { climbStairs };