# ex18. 연속된 부분 배열의 합 (Subarray Sum Equals K... wait, Continuous Subarray Sum)

# ex18. 연속된 자연수의 합 (Consecutive Natural Number Sum)

## 문제 설명

양의 정수 `n`이 주어질 때, **연속된 자연수의 합으로 n을 표현하는 방법의 수**를 반환하세요.

단, 최소 2개 이상의 자연수를 사용해야 합니다.

## 입력 조건

- `n`은 `1` 이상 `10,000,000` 이하입니다.

## 예제

**예제 1**
```
입력: n = 15
출력: 3
설명:
  1+2+3+4+5 = 15
  4+5+6     = 15
  7+8       = 15
```

**예제 2**
```
입력: n = 1
출력: 0
설명: 연속된 자연수 2개 이상으로 1을 만들 수 없음
```

**예제 3**
```
입력: n = 3
출력: 1
설명: 1+2 = 3
```

## 풀이 아이디어

### 핵심 아이디어
투 포인터로 연속 구간 `[left, right]`의 합을 관리합니다.
- 합 < n → right 확장
- 합 > n → left 축소
- 합 == n → count++, right 확장

### 방법. 투 포인터 — O(n)

```
n = 15

left=1, right=1, sum=1
→ sum(1) < 15 → right++

left=1, right=2, sum=3
→ sum(3) < 15 → right++

... (계속 right 확장)

left=1, right=5, sum=15 → count=1, right++
left=1, right=6, sum=21 → sum > 15 → left++
left=2, right=6, sum=19 → sum > 15 → left++
left=3, right=6, sum=18 → sum > 15 → left++
left=4, right=6, sum=15 → count=2, right++
left=4, right=7, sum=22 → sum > 15 → left++
left=5, right=7, sum=18 → sum > 15 → left++
left=6, right=7, sum=13 → sum < 15 → right++
left=6, right=8, sum=21 → sum > 15 → left++
left=7, right=8, sum=15 → count=3, right++
... (right > n/2+1 이 되면 종료)

→ 3 반환
```

## 해답

(풀이 후 작성)

## 면접 팁

- **"왜 투 포인터가 성립하나요?"** → 자연수의 연속 합은 단조 증가/감소 성질이 있어서, left/right를 한 방향으로만 이동해도 모든 경우를 탐색할 수 있습니다.
- **"right의 최댓값은?"** → `n/2 + 1`까지만 탐색하면 됩니다. 두 수의 최솟값이 `n/2`이기 때문입니다.
- **"완전탐색과의 차이는?"** → 완전탐색은 O(n²)이지만 투 포인터는 O(n)입니다. n이 최대 1000만이므로 완전탐색은 시간 초과입니다.
- **카카오 실전 팁**: 투 포인터는 **정렬된 배열** 또는 **연속 구간**에서 합/조건을 만족하는 경우를 찾을 때 O(n)으로 풀 수 있는 강력한 패턴입니다.

## 📋 문제 목록 행

> 아래 행을 root README.md의 문제 목록 표에 복사하세요.

| ex18 | 연속된 자연수의 합 | 연속된 자연수의 합으로 n을 표현하는 방법의 수 반환 | 투 포인터 | 실버 | 2026-03-16 |

#

**투 포인터** 풀이입니다!

---

### 🔍 동작 흐름 (`n=15`)

```
left=1, right=1, sum=1  → sum<15 → right++
left=1, right=5, sum=15 → count=1, right++
left=1, right=6, sum=21 → sum>15 → left++ (sum-=1)
left=2, right=6, sum=20 → sum>15 → left++
left=3, right=6, sum=18 → sum>15 → left++
left=4, right=6, sum=15 → count=2, right++
left=4, right=7, sum=22 → sum>15 → left++
left=5, right=7, sum=18 → sum>15 → left++
left=6, right=7, sum=13 → sum<15 → right++
left=6, right=8, sum=21 → sum>15 → left++
left=7, right=8, sum=15 → count=3, right++
left=7, right=9, sum=24 → left(7) > n/2(7.5)? → 종료

→ 3 반환 ✓
```

### 💡 핵심 포인트

- `left <= n/2` 조건 — left가 `n/2`를 넘으면 두 수의 합이 이미 n을 초과하므로 탐색 불필요
- sum이 n과 같을 때 `right++`로 이어서 탐색 → 같은 left에서 더 긴 구간 가능성 확인

### 📊 복잡도

| | |
|--|--|
| 시간 | O(n) |
| 공간 | O(1) |