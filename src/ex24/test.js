const { solution, StringIterator } = require('./index');

describe('ex24. 압축 문자열 해제 (방법 1)', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  // a×2, b×1, c×5, a×3 → 'aabcccccaaa'
  test("a2b1c5a3 → 'aabcccccaaa'", () => {
    expect(solution('a2b1c5a3')).toBe('aabcccccaaa');
  });

  // 여러 자리 횟수: x×12
  test("x12 → 'xxxxxxxxxxxx'", () => {
    expect(solution('x12')).toBe('xxxxxxxxxxxx');
  });

  // a×2, b×3
  test("a2b3 → 'aabbb'", () => {
    expect(solution('a2b3')).toBe('aabbb');
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  // 횟수 1
  test("a1 → 'a'", () => {
    expect(solution('a1')).toBe('a');
  });

  // 한 문자 최대 반복
  test("z9 → 'zzzzzzzzz'", () => {
    expect(solution('z9')).toBe('zzzzzzzzz');
  });
});

describe('ex24. 압축 문자열 이터레이터 (방법 2, LeetCode 604)', () => {
  // hasNext()/next()를 반복 호출하면 방법 1과 같은 문자열이 나와야 한다
  test("이터레이터로 전부 꺼내면 'aabcccccaaa'", () => {
    const it = new StringIterator('a2b1c5a3');
    let out = '';
    while (it.hasNext()) out += it.next();
    expect(out).toBe('aabcccccaaa');
  });

  // 소진 후 next()는 ' ', hasNext()는 false
  test('소진 후 동작: next는 공백, hasNext는 false', () => {
    const it = new StringIterator('a1');
    expect(it.next()).toBe('a');
    expect(it.hasNext()).toBe(false);
    expect(it.next()).toBe(' ');
  });

  // 호출 순서 정확성 (LeetCode 604 예시 형태)
  test('next/hasNext 호출 순서', () => {
    const it = new StringIterator('a2b1');
    expect(it.next()).toBe('a');     // 'a'
    expect(it.hasNext()).toBe(true); // 아직 a 하나 + b 남음
    expect(it.next()).toBe('a');     // 'a'
    expect(it.next()).toBe('b');     // 'b'
    expect(it.hasNext()).toBe(false);
    expect(it.next()).toBe(' ');     // 소진
  });
});
