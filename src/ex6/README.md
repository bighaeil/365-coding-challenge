# ex6. 두 수의 합 (Two Sum)

## 문제 설명
정수 배열 `nums`와 목표값 `target`이 주어질 때,
합이 `target`이 되는 두 수의 인덱스를 반환하세요.

## 입력 조건
- 2 ≤ nums.length ≤ 10,000
- 각 원소는 정수
- 정답은 반드시 하나만 존재
- 같은 원소를 두 번 사용할 수 없음

## 예제
입력: nums = [2, 7, 11, 15], target = 9
출력: [0, 1]

입력: nums = [3, 2, 4], target = 6
출력: [1, 2]

## 풀이 아이디어
- 브루트포스: 이중 for문 O(n²)
- 최적화: Map 활용 O(n)

## 해답

### 브루트포스 O(n²)
```javascript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

### 최적화 - Map 활용 O(n)

 (풀이 후 작성)


## 면접 팁
Map을 활용한 O(n) 풀이를 설명할 수 있으면 좋아요.
해시맵의 개념과 시간복잡도 트레이드오프를 함께 설명하세요.