const { lengthOfLongestSubstring } = require('./index');

describe('ex4. 가장 긴 부분 문자열', () => {
  test('"abcabcbb" → 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('"bbbbb" → 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('"pwwkew" → 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('"" → 0', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('"abcde" → 5', () => {
    expect(lengthOfLongestSubstring('abcde')).toBe(5);
  });
});
