const { reverseString } = require('../src/problem2');

test('reverseString correctly reverses input', () => {
  expect(reverseString('hello')).toBe('olleh');
});
