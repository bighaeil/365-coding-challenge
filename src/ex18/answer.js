/**
 * ex18. 연속된 자연수의 합 (Consecutive Natural Number Sum)
 * 연속된 자연수의 합으로 n을 표현하는 방법의 수 반환
 */

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let count = 0;
  let left = 1, right = 1, sum = 1;

  while (left <= Math.floor(n / 2)) {
    if (sum === n) {
        count++;
        right++;
        sum += right;
    } else if (sum < n) {
        right++;
        sum += right;
    } else {
        sum -= left;
        left++;
    }
  }

  return count;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution(15)); // 3
console.log(solution(1));  // 0
console.log(solution(3));  // 1

module.exports = { solution };