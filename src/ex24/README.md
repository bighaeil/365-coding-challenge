# ex24. 압축 문자열 해제 / 이터레이터 (Decompress String / Compressed String Iterator)

> **ex23(영단어 반복 확장)과 같은 "런렝스 디코딩" 계열** — `LeetCode 604. Design Compressed String Iterator` 유형입니다. 에이블리 코딩테스트에서 봤던 그 문제!

## 문제 설명

`'문자 + 반복 횟수'` 형태로 압축된 문자열 `s`가 주어집니다.
각 블록은 **하나의 문자**와 그 뒤에 붙은 **반복 횟수(양의 정수, 여러 자리 가능)** 로 이루어집니다.

이를 원래 문자열로 **해제(압축 해제)** 한 결과를 반환하세요.

> 원본: `LeetCode 604`는 전체를 펼치지 않고 `next()` / `hasNext()`로 한 글자씩 꺼내는 **이터레이터 설계** 문제입니다. 이 문제에서는 두 가지를 모두 다룹니다. (방법 1: 전체 해제 / 방법 2: 이터레이터)

## 입력 조건

- `s`는 `소문자 + 숫자`가 번갈아 나오는 형태입니다. (`'a2b1c5a3'`)
- 각 문자 뒤의 반복 횟수는 `1` 이상이며 **여러 자리일 수 있습니다.** (`'x12'` → `x` 12개)
- `s`의 길이는 `1` 이상 `1,000` 이하입니다.

## 예제

**예제 1**
```
입력: s = 'a2b1c5a3'
출력: 'aabcccccaaa'
설명: a×2, b×1, c×5, a×3 → 'aa' + 'b' + 'ccccc' + 'aaa'
```

**예제 2**
```
입력: s = 'x12'
출력: 'xxxxxxxxxxxx'
설명: 반복 횟수가 두 자리(12)인 경우
```

**예제 3**
```
입력: s = 'a2b3'
출력: 'aabbb'
```

## 풀이 아이디어

### 방법 1. 전체 문자열 해제 — O(출력 길이)

앞에서부터 훑으면서 **문자 하나 → 뒤따르는 숫자(여러 자리)** 를 읽고, 문자를 그 횟수만큼 `repeat`해서 이어붙입니다.

```
s = 'a2b1c5a3'

i=0  ch='a', num='2'  → 'aa'
i=2  ch='b', num='1'  → 'aab'
i=4  ch='c', num='5'  → 'aabccccc'
i=6  ch='a', num='3'  → 'aabcccccaaa'
```

```javascript
function solution(s) {
  let result = '';
  let i = 0;
  while (i < s.length) {
    const ch = s[i++];
    let num = '';
    while (i < s.length && s[i] >= '0' && s[i] <= '9') num += s[i++];
    result += ch.repeat(Number(num || '1'));
  }
  return result;
}
```

**포인트**: 반복 횟수가 두 자리 이상일 수 있으므로, **숫자를 한 글자씩이 아니라 "연속된 숫자 덩어리"로** 읽어야 합니다. (`'x12'`를 `x`×1 + `2`로 잘못 읽지 않도록)

### 방법 2. 이터레이터 디자인 — LeetCode 604의 핵심

전체를 미리 펼치면, `'a1000000000'`처럼 횟수가 **10억**이면 메모리가 터집니다.
그래서 604는 **필요할 때 한 글자씩만** 꺼내도록 설계합니다. (지연 평가, lazy)

- `next()` : 다음 문자를 반환 (없으면 `' '`)
- `hasNext()` : 남은 문자가 있는지 반환

현재 문자 `ch`와 남은 횟수 `count`만 상태로 들고, `count`가 `0`이 되면 그때 다음 블록을 읽습니다. → **메모리 O(1)**

```javascript
class StringIterator {
  constructor(s) {
    this.s = s; this.i = 0; this.ch = ''; this.count = 0;
  }
  _advance() {
    this.ch = this.s[this.i++];
    let num = '';
    while (this.i < this.s.length && this.s[this.i] >= '0' && this.s[this.i] <= '9') num += this.s[this.i++];
    this.count = Number(num || '1');
  }
  hasNext() {
    while (this.count === 0 && this.i < this.s.length) this._advance();
    return this.count > 0;
  }
  next() {
    if (!this.hasNext()) return ' ';
    this.count--;
    return this.ch;
  }
}
```

## 해답

(풀이 후 작성)

## 면접 팁

- **"방법 1과 방법 2 중 뭘 쓰나요?"** → 전체 결과가 필요하면 방법 1, 앞에서 몇 글자만 필요하거나 **반복 횟수가 매우 커서 다 펼치면 메모리가 위험**하면 방법 2(이터레이터). 604가 이터레이터를 요구하는 이유가 바로 이 메모리 문제입니다.
- **"반복 횟수 파싱에서 실수하기 쉬운 곳은?"** → 두 자리 이상 숫자. `s[i]`가 숫자인 동안 계속 이어붙여 하나의 수로 만들어야 합니다.
- **"`hasNext`에서 `while`을 쓴 이유는?"** → 만약 횟수 `0`인 블록이 있을 수 있다면(`'a0b3'`), `count===0`인 블록을 건너뛰고 실제 남은 문자가 나올 때까지 진행해야 하기 때문입니다.
- **비슷한 유형** → `LeetCode 394. Decode String`(중첩 대괄호 `'3[a2[c]]'`), ex23(영단어 반복 확장). 모두 **런렝스 디코딩** 계열입니다.

## 📊 복잡도

| | 방법 1 (전체 해제) | 방법 2 (이터레이터) |
|--|--|--|
| 시간 | O(출력 길이) | `next` 1회 O(1) 상각 |
| 공간 | O(출력 길이) | **O(1)** — 현재 문자/횟수만 유지 |

## 📋 문제 목록 행

> 아래 행을 root README.md의 문제 목록 표에 복사하세요.

| ex24 | 압축 문자열 해제 | '문자+횟수' 압축 문자열을 해제하고, 이터레이터(next/hasNext)로도 한 글자씩 반환 | 문자열 파싱/설계 | 실버 | 2026-07-23 |
