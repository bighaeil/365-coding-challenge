/**
 * ex24. 압축 문자열 해제 / 이터레이터 (Decompress String / Compressed String Iterator)
 * LeetCode 604. Design Compressed String Iterator 유형
 * '문자 + 반복 횟수'로 압축된 문자열을 원래대로 펼친다.
 * 예) 'a2b1c5a3' → 'aabcccccaaa'
 */

/**
 * 방법 1. 전체 문자열을 한 번에 해제
 * @param {string} s  압축 문자열 (문자 뒤에 반복 횟수, 횟수는 여러 자리 가능)
 * @returns {string}
 */
function solution(s) {
  let result = '';
  let i = 0;

  while (i < s.length) {
    const ch = s[i]; // 문자
    i += 1;

    // 뒤따르는 숫자(반복 횟수) 읽기 — 여러 자리일 수 있음
    let num = '';
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
      num += s[i];
      i += 1;
    }

    result += ch.repeat(Number(num || '1'));
  }

  return result;
}

/**
 * 방법 2. 이터레이터 디자인 (LeetCode 604)
 * 전체를 펼치지 않고 필요한 문자만 하나씩 꺼낸다 — 횟수가 매우 커도 메모리 O(1).
 */
class StringIterator {
  /** @param {string} compressed */
  constructor(compressed) {
    this.s = compressed;
    this.i = 0;      // 압축 문자열 포인터
    this.ch = '';    // 현재 반복 중인 문자
    this.count = 0;  // 현재 문자의 남은 반복 횟수
  }

  /** 다음 (문자, 횟수) 블록을 읽어 ch/count 세팅 */
  _advance() {
    this.ch = this.s[this.i];
    this.i += 1;

    let num = '';
    while (this.i < this.s.length && this.s[this.i] >= '0' && this.s[this.i] <= '9') {
      num += this.s[this.i];
      this.i += 1;
    }
    this.count = Number(num || '1');
  }

  /** @returns {boolean} 남은 문자가 있는지 */
  hasNext() {
    // 현재 블록이 소진됐으면 다음 블록으로 (count 0인 블록은 건너뜀)
    while (this.count === 0 && this.i < this.s.length) this._advance();
    return this.count > 0;
  }

  /** @returns {string} 다음 문자 (없으면 ' ') */
  next() {
    if (!this.hasNext()) return ' ';
    this.count -= 1;
    return this.ch;
  }
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution('a2b1c5a3')); // 'aabcccccaaa'
console.log(solution('x12'));      // 'xxxxxxxxxxxx'

const it = new StringIterator('a2b1c5a3');
let out = '';
while (it.hasNext()) out += it.next();
console.log(out); // 'aabcccccaaa'

module.exports = { solution, StringIterator };
