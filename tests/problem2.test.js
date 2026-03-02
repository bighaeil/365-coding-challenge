const { reverseString } = require('../src/ex2');

test('reverseString correctly reverses input', () => {
  expect(reverseString('hello')).toBe('olleh');
});
