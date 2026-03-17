const { reverseString } = require('./index');

describe('ex2. 문자열 뒤집기', () => {
  test('"hello" → "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('"abcd" → "dcba"', () => {
    expect(reverseString('abcd')).toBe('dcba');
  });

  test('"a" → "a"', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('"" → ""', () => {
    expect(reverseString('')).toBe('');
  });
});
