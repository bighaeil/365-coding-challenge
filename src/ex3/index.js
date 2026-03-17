/**
 * ex3. 유효한 괄호 (Valid Parentheses)
 * 문자열 s의 괄호가 올바르게 짝지어져 있는지 판별
 */

function isValid(s) {
  // 여기에 풀이를 작성하세요
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// 실행 예시
console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false

module.exports = { isValid };
