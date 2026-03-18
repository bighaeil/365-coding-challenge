/**
 * ex17. 체육복 (Gym Suit)
 * 여벌 체육복으로 최대한 많은 학생이 수업을 들을 수 있는 수 반환
 * 프로그래머스 Level 1 / 카카오 유사 유형
 */

/**
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns {number}
 */
function solution(n, lost, reserve) {
  // 여기에 풀이를 작성하세요
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  for (const student of reserve) {
    if (lostSet.has(student)) {
      lostSet.delete(student);
      reserveSet.delete(student);
    }
  }

  for (const student of lostSet) {
    if (reserveSet.has(student - 1)) {
      lostSet.delete(student);
      reserveSet.delete(student - 1);
    } else if (reserveSet.has(student + 1)) {
      lostSet.delete(student);
      reserveSet.delete(student + 1);
    }
  }

  return n - lostSet.size;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3]));         // 4
console.log(solution(3, [3], [1]));            // 2

module.exports = { solution };