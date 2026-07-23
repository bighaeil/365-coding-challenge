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
  let result = '';
  let pending = null; // 아직 결과에 기록하지 않은 "직전 영단어"의 숫자(char)
  let i = 0;

  while (i < s.length) {
    const ch = s[i];

    // 1~9 → 반복 횟수: 직전 영단어를 count번 반복해서 기록
    if (ch >= '1' && ch <= '9') {
      if (pending !== null) {
        result += pending.repeat(Number(ch));
        pending = null;
      }
      i += 1;
      continue;
    }

    // 영단어 → 직전 영단어가 반복 숫자 없이 끝났으면 1번만 기록 후, 새 영단어를 대기
    const word = WORDS.find((w) => s.startsWith(w, i));
    if (pending !== null) {
      result += pending;
      pending = null;
    }
    pending = String(WORDS.indexOf(word));
    i += word.length;
  }

  // 마지막 영단어가 반복 숫자 없이 끝난 경우 1번 기록
  if (pending !== null) result += pending;

  return result;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution('one2'));        // '11'
console.log(solution('one2two3'));    // '11222'
console.log(solution('onetwo'));      // '12'
console.log(solution('three3'));      // '333'

module.exports = { solution, WORDS };
