# Day 002 - 가장 긴 부분 문자열 (Longest Substring Without Repeating Characters)

## 난이도

Medium (기술면접 빈출)

## 문제

문자열 `s`가 주어졌을 때, **중복 문자가 없는 가장 긴 부분 문자열(substring)의 길이**를 반환하세요.

## 조건

- `0 <= s.length <= 50,000`
- `s`는 영문자, 숫자, 공백, 특수문자로 구성

## 예시

| 입력 | 출력 | 설명 |
|------|------|------|
| `"abcabcbb"` | `3` | `"abc"` |
| `"bbbbb"` | `1` | `"b"` |
| `"pwwkew"` | `3` | `"wke"` |
| `""` | `0` | 빈 문자열 |
| `"dvdf"` | `3` | `"vdf"` |

## 힌트

- **슬라이딩 윈도우(Sliding Window)** 패턴을 활용하세요.
- `Set` 또는 `Map`을 사용하여 현재 윈도우 내 문자를 추적하세요.

## 풀이

### 접근 방식: 슬라이딩 윈도우 + Map

1. `left`, `right` 두 포인터로 윈도우를 관리
2. `Map`에 각 문자의 마지막 등장 인덱스를 저장
3. `right` 포인터를 한 칸씩 이동하며 윈도우를 확장
4. 중복 문자를 만나면 `left`를 중복 문자의 다음 위치로 이동
5. 매 단계마다 최대 길이를 갱신

### 코드

 (풀이 후 작성)


### 동작 예시 (`"abcabcbb"`)

```
right=0: char='a' → window="a"   → maxLen=1
right=1: char='b' → window="ab"  → maxLen=2
right=2: char='c' → window="abc" → maxLen=3
right=3: char='a' → 중복! left=1 → window="bca" → maxLen=3
right=4: char='b' → 중복! left=2 → window="cab" → maxLen=3
right=5: char='c' → 중복! left=3 → window="abc" → maxLen=3
right=6: char='b' → 중복! left=5 → window="cb"  → maxLen=3
right=7: char='b' → 중복! left=7 → window="b"   → maxLen=3
```

### 복잡도

- 시간복잡도: **O(n)** — 문자열을 한 번 순회
- 공간복잡도: **O(min(n, m))** — m은 문자 집합의 크기

### 면접 포인트

- **브루트포스 O(n³)** → **슬라이딩 윈도우 O(n)** 최적화 과정을 설명할 수 있는가
- `Set` vs `Map` 선택의 차이를 이해하는가 (`Map`은 인덱스 추적이 가능해 `left`를 바로 점프 가능)
- 엣지 케이스 (빈 문자열, 모두 같은 문자, 전체가 고유 문자) 처리

## 회고

- 걸린 시간:
- 어려웠던 점:
- 배운 점: