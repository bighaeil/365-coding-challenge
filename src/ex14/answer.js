/**
 * ex14. 전화번호 목록 (Phone Number List)
 * 어떤 번호가 다른 번호의 접두사인 경우 false, 아니면 true 반환
 * 카카오 코딩테스트 실제 출제 유형
 */

/**
 * @param {string[]} phoneBook
 * @returns {boolean}
 */
function solution(phoneBook) {
  // 여기에 풀이를 작성하세요
  phoneBook.sort();

  for (let i = 0; i < phoneBook.length - 1; i++) {
    if (phoneBook[i + 1].startsWith(phoneBook[i])) return false;
  }

  return true;
}

// ─── 실행 예시 ───────────────────────────────────────────────────────────────
console.log(solution(['119', '97674223', '1195524421'])); // false
console.log(solution(['123', '456', '789']));             // true
console.log(solution(['12', '123', '1235', '567', '88'])); // false

module.exports = { solution };