# ex8. 이진 탐색 (Binary Search)

## 문제 설명
오름차순으로 정렬된 정수 배열 `nums`와 목표값 `target`이 주어질 때,
`target`의 인덱스를 반환하세요. 없으면 -1을 반환하세요.

## 입력 조건
- 1 ≤ nums.length ≤ 10,000
- 배열은 오름차순 정렬되어 있음
- 중복 없음

## 예제
입력: nums = [-1, 0, 3, 5, 9, 12], target = 9
출력: 4

입력: nums = [-1, 0, 3, 5, 9, 12], target = 2
출력: -1

## 풀이 아이디어
- left, right 포인터로 중간값(mid)을 계속 비교
- target < mid → right = mid - 1
- target > mid → left = mid + 1
- target === mid → mid 반환
- 시간복잡도 O(log n)

## 해답
```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

## 면접 팁
이진 탐색은 O(log n)이 왜 나오는지 설명할 수 있어야 해요.
탐색 범위가 매 단계마다 절반으로 줄어드는 원리를 설명하세요.
left <= right 조건과 mid 계산 방식도 자주 질문돼요.