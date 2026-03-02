// 2번 문제: 문자열을 뒤집어 반환하는 함수

function reverseString(str) {
  // 간단한 풀이: split, reverse, join
  return str.split('').reverse().join('');
}

module.exports = { reverseString };
