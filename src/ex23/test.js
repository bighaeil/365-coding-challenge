const { solution } = require('./index');

describe('ex23. 영단어 반복 확장', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  // one=1, 2 = 앞의 '1'을 2번 반복 → '11'
  test("one2 → '11'", () => {
    expect(solution('one2')).toBe('11');
  });

  // one=1 ×2 → '11', two=2 ×3 → '222' → '11222'
  test("one2two3 → '11222'", () => {
    expect(solution('one2two3')).toBe('11222');
  });

  // three=3 ×3 → '333'
  test("three3 → '333'", () => {
    expect(solution('three3')).toBe('333');
  });

  // ── 반복 숫자가 없는 영단어(암묵적 1회) ───────────────────────────────────────
  // one=1(1회), two=2(1회) → '12'
  test("onetwo → '12'", () => {
    expect(solution('onetwo')).toBe('12');
  });

  // one=1 ×2 → '11', three=3(1회) → '3' → '113'
  test("one2three → '113'", () => {
    expect(solution('one2three')).toBe('113');
  });

  // five=5 ×1 → '5'
  test("five1 → '5'", () => {
    expect(solution('five1')).toBe('5');
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  // 반복 숫자 없이 영단어만: one=1, two=2, three=3 → '123'
  test("영단어만: onetwothree → '123'", () => {
    expect(solution('onetwothree')).toBe('123');
  });

  // 최대 반복: nine=9 ×9 → '9'가 9개
  test("nine9 → '999999999'", () => {
    expect(solution('nine9')).toBe('999999999');
  });

  // zero도 값으로 취급: zero=0 ×3 → '000'
  test("zero3 → '000'", () => {
    expect(solution('zero3')).toBe('000');
  });

  // 여러 영단어 + 반복이 섞인 종합 케이스
  // one=1 ×2 → '11', two=2(1회) → '2', six=6 ×2 → '66' → '11266'
  test("one2twosix2 → '11266'", () => {
    expect(solution('one2twosix2')).toBe('11266');
  });
});
