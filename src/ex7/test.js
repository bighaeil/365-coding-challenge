const { isValid } = require('./index');

describe('ex7. 유효한 괄호', () => {
  test('"()" → true', () => {
    expect(isValid("()")).toBe(true);
  });

  test('"()[]{}" → true', () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test('"(]" → false', () => {
    expect(isValid("(]")).toBe(false);
  });

  test('"([)]" → false', () => {
    expect(isValid("([)]")).toBe(false);
  });

  test('"{[]}" → true', () => {
    expect(isValid("{[]}")).toBe(true);
  });
});