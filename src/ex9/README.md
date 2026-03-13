# ex9. 피보나치 수열 (Fibonacci)

## 문제 설명
정수 n이 주어질 때, n번째 피보나치 수를 반환하세요.
피보나치 수열: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

## 입력 조건
- 0 ≤ n ≤ 30

## 예제
입력: n = 0
출력: 0

입력: n = 1
출력: 1

입력: n = 6
출력: 8

입력: n = 10
출력: 55

## 풀이 아이디어
- 재귀: 직관적이지만 O(2^n)으로 느림
- DP (메모이제이션): 이미 계산한 값 저장 O(n)
- 반복문: 가장 효율적 O(n), 공간 O(1)

## 해답
(풀이 후 작성)

## 면접 팁
재귀 → DP → 반복문 순서로 최적화 과정을 설명할 수 있으면 좋아요.
메모이제이션의 개념과 시간복잡도 개선 이유를 함께 설명하세요.

## 📋 문제 목록 행
> 아래 행을 root README.md의 문제 목록 표에 복사하세요.

| ex9 | 피보나치 수열 (Fibonacci) | n번째 피보나치 수 반환 | DP | 브론즈 | 2026-03-13 |







# 

**세 가지 방법 모두 보여드릴게요!**

---

### 1단계. 재귀 O(2^n) - 느림

```javascript
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
```

같은 값을 중복 계산해서 n이 커질수록 급격히 느려져요.

---

### 2단계. DP 메모이제이션 O(n) - 개선

```javascript
function fib(n) {
  const memo = {};

  function dp(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = dp(n - 1) + dp(n - 2);
    return memo[n];
  }

  return dp(n);
}
```

이미 계산한 값을 `memo`에 저장해서 중복 계산을 제거해요.

---

### 3단계. 반복문 O(n), 공간 O(1) - 최적

```javascript
function fib(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
```

변수 두 개만으로 순서대로 계산해서 메모리도 가장 효율적이에요.

---

**면접에서는 이 흐름으로 설명하면 좋아요.**

> "처음엔 재귀로 구현했는데 O(2^n)이라 비효율적이어서, 메모이제이션으로 O(n)으로 개선했고, 추가로 반복문으로 바꿔 공간복잡도도 O(1)로 줄였습니다."