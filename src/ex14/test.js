const { solution } = require('./index');

describe('ex14. 전화번호 목록', () => {
  // ── 기본 케이스 ─────────────────────────────────────────────────────────────
  test('접두사 있음: 119가 1195524421의 접두사 → false', () => {
    expect(solution(['119', '97674223', '1195524421'])).toBe(false);
  });

  test('접두사 없음: 123, 456, 789 → true', () => {
    expect(solution(['123', '456', '789'])).toBe(true);
  });

  test('접두사 있음: 12가 123의 접두사 → false', () => {
    expect(solution(['12', '123', '1235', '567', '88'])).toBe(false);
  });

  // ── 엣지 케이스 ─────────────────────────────────────────────────────────────
  test('번호가 1개 → true', () => {
    expect(solution(['123'])).toBe(true);
  });

  test('완전히 같은 길이의 번호들 → true', () => {
    expect(solution(['111', '222', '333'])).toBe(true);
  });

  test('접두사가 목록 맨 끝에 있는 경우 → false', () => {
    expect(solution(['1195524421', '97674223', '119'])).toBe(false);
  });

  test('첫 번째가 두 번째의 접두사 → false', () => {
    expect(solution(['1', '12', '123'])).toBe(false);
  });

  test('접두사 없이 긴 번호들 → true', () => {
    expect(solution(['12345', '67890', '11111'])).toBe(true);
  });
});