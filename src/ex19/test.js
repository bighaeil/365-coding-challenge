const { solution } = require('./index');

describe('ex19. 숫자 문자열과 영단어', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  // one=1, 4, seven=7, eight=8 → 1478
  test('one4seveneight → 1478', () => {
    expect(solution('one4seveneight')).toBe(1478);
  });

  // 2, 3, four=4, 5, six=6, 7 → 234567
  test('23four5six7 → 234567', () => {
    expect(solution('23four5six7')).toBe(234567);
  });

  // one=1, 1, two=2 → 112
  test('one1two → 112', () => {
    expect(solution('one1two')).toBe(112);
  });

  // ── 각 영단어 변환 확인 ──────────────────────────────────────────────────────
  // zero=0 → 0
  test('zero → 0', () => {
    expect(solution('zero')).toBe(0);
  });

  // nine=9 → 9
  test('nine → 9', () => {
    expect(solution('nine')).toBe(9);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  // 숫자만 있는 경우: '123' → 123
  test('숫자만: 123 → 123', () => {
    expect(solution('123')).toBe(123);
  });

  // 영단어만 있는 경우: one=1, two=2, three=3 → 123
  test('영단어만: onetwothree → 123', () => {
    expect(solution('onetwothree')).toBe(123);
  });

  // 영단어 중첩 케이스('eightwo' 등)는 카카오 실제 문제에서 주어지지 않으므로 제외
});