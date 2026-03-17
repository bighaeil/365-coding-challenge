/**
 * ex6. 두 수의 합 (Two Sum)
 * 합이 target이 되는 두 수의 인덱스를 반환
 */

function twoSum(nums, target) {
  // 여기에 풀이를 작성하세요
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

// 실행 예시
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]

module.exports = { twoSum };