/**
 * ex7. 유효한 괄호 (Valid Parentheses)
 * 괄호가 올바르게 닫혀 있는지 확인
 */

function isValid(s) {
  // 여기에 풀이를 작성하세요
}

// 실행 예시
console.log(isValid("()"));     // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true

module.exports = { isValid };