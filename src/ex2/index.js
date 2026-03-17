/**
 * ex2. 문자열 뒤집기 (Reverse String)
 * 문자열을 뒤집어 반환
 */

function reverseString(str) {
  // 여기에 풀이를 작성하세요
  return str.split('').reverse().join('');
}

// 실행 예시
console.log(reverseString('hello')); // 'olleh'

module.exports = { reverseString };
