/**
 * Day 003 - 두 배열의 교집합 II (Intersection of Two Arrays II)
 *
 * 두 정수 배열 nums1과 nums2가 주어졌을 때, 교집합을 배열로 반환하세요.
 * 결과에서 각 원소는 두 배열에 나타나는 횟수만큼 포함되어야 합니다.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  // 여기에 코드를 작성하세요
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

// ===== 테스트 =====
const testCases = [
  { nums1: [1, 2, 2, 1], nums2: [2, 2], expected: [2, 2] },
  { nums1: [4, 9, 5], nums2: [9, 4, 9, 8, 4], expected: [4, 9] },
  { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: [] },
  { nums1: [1], nums2: [1], expected: [1] },
  { nums1: [3, 1, 2], nums2: [1, 1], expected: [1] },
  { nums1: [1, 2, 2, 3, 3, 3], nums2: [2, 2, 3, 3], expected: [2, 2, 3, 3] },
  { nums1: [], nums2: [1, 2, 3], expected: [] },
];

testCases.forEach(({ nums1, nums2, expected }, i) => {
  const result = intersect(nums1, nums2);
  const pass = result.sort((a, b) => a - b).join(",") === expected.sort((a, b) => a - b).join(",");
  const status = pass ? "PASS" : "FAIL";
  console.log(`${status} | Test ${i + 1}: nums1=[${nums1}], nums2=[${nums2}] → result=[${result}], expected=[${expected}]`);
});