// 예시 문제: 두 수의 합
// 함수가 주어진 배열에서 두 수를 더해 특정 타겟을 만드는 인덱스 쌍을 반환합니다.

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

module.exports = { twoSum };
