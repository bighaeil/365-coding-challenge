/**
 * ex23. 영단어 반복 확장 (Word Repeat Expansion)
 * ex19의 변형 — 영단어는 숫자로, 숫자는 "바로 앞 영단어를 그 횟수만큼 반복"
 * 예) 'one2' → one=1, 2 = 앞의 '1'을 2번 반복 → '11'
 */

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/**
 * @param {string} s
 * @returns {string}
 */
function solution(s) {
  // 여기에 풀이를 작성하세요
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution('one2'));        // '11'
console.log(solution('one2two3'));    // '11222'
console.log(solution('onetwo'));      // '12'
console.log(solution('three3'));      // '333'

module.exports = { solution, WORDS };
