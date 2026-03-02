// 1번 문제: 정수 배열에서 중복된 값을 제거한 새 배열 반환
// 입력: [1,2,2,3] -> 출력: [1,2,3]

function uniqueArray(arr) {
  return [...new Set(arr)];
}

module.exports = { uniqueArray };
