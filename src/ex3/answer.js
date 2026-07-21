/**
 * Day 001 - 유효한 괄호 (Valid Parentheses)
 *
 * 문자열 s가 괄호 (, ), {, }, [, ] 로만 이루어져 있을 때,
 * 괄호가 올바르게 짝지어져 있는지 판별하세요.
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = []

  for (const char of s) {
    if (pairs[char]) {
      stack.push(char)
    } else if (pairs[stack.pop()] !== char) {
      return false
    }
  }
  return stack.length === 0
}

// ===== 테스트 =====
console.log(isValid("()"));      // expected: true
console.log(isValid("()[]{}"));  // expected: true
console.log(isValid("(]"));      // expected: false
console.log(isValid("([)]"));    // expected: false
console.log(isValid("{[]}"));    // expected: true
console.log(isValid(""));        // expected: true
console.log(isValid("((("));     // expected: false
console.log(isValid(")"));       // expected: false