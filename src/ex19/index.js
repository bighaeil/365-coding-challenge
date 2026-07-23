/**
 * ex19. 숫자 문자열과 영단어 (Number String and English Words)
 * 영단어와 숫자가 섞인 문자열을 숫자로 변환
 * 카카오 2021 신입 공채 기출
 */

const WORDS = ['zero','one','two','three','four','five','six','seven','eight','nine'];

/**
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  // 여기에 풀이를 작성하세요
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution('one4seveneight')); // 1478
console.log(solution('23four5six7'));    // 234567
console.log(solution('one1two'));        // 112

module.exports = { solution, WORDS };