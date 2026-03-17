/**
 * ex9. 피보나치 수열 (Fibonacci)
 * n번째 피보나치 수 반환
 */

function fib(n) {
  // 여기에 풀이를 작성하세요
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}

// 실행 예시
console.log(fib(0));  // 0
console.log(fib(1));  // 1
console.log(fib(6));  // 8
console.log(fib(10)); // 55

module.exports = { fib };