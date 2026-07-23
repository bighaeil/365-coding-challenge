/**
 * ex24. 압축 문자열 해제 / 이터레이터 (Decompress String / Compressed String Iterator)
 * LeetCode 604. Design Compressed String Iterator 유형
 * '문자 + 반복 횟수'로 압축된 문자열을 원래대로 펼친다.
 * 예) 'a2b1c5a3' → 'aabcccccaaa'
 */

/**
 * 방법 1. 전체 문자열을 한 번에 해제
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
  // 여기에 풀이를 작성하세요
}

/**
 * 방법 2. 이터레이터 디자인 (LeetCode 604)
 * 전체를 펼치지 않고 필요한 문자만 하나씩 꺼낸다.
 */
class StringIterator {
  /** @param {string} compressed */
  constructor(compressed) {
    // 여기에 초기화를 작성하세요
  }

  /** @returns {string} 다음 문자 (없으면 ' ') */
  next() {
    // 여기에 풀이를 작성하세요
  }

  /** @returns {boolean} 남은 문자가 있는지 */
  hasNext() {
    // 여기에 풀이를 작성하세요
  }
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution('a2b1c5a3')); // 'aabcccccaaa'
console.log(solution('x12'));      // 'xxxxxxxxxxxx'

module.exports = { solution, StringIterator };
