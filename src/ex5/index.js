/**
 * ex5. 두 배열의 교집합 II (Intersection of Two Arrays II)
 * 두 정수 배열의 교집합을 배열로 반환 (중복 허용)
 */

function intersect(nums1, nums2) {
  // 여기에 풀이를 작성하세요
  const countMap = new Map();
  const result = [];

  for (const num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    if (countMap.has(num) && countMap.get(num) > 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }

  return result;
}

// 실행 예시
console.log(intersect([1, 2, 2, 1], [2, 2]));       // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]

module.exports = { intersect };
