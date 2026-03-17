/**
 * ex8. 이진 탐색 (Binary Search)
 * 정렬된 배열에서 target의 인덱스 반환, 없으면 -1
 */

function search(nums, target) {
  // 여기에 풀이를 작성하세요
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

// 실행 예시
console.log(search([-1, 0, 3, 5, 9, 12], 9));  // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // -1
console.log(search([5], 5));                    // 0

module.exports = { search };