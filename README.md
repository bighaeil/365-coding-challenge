# 365-coding-challenge

이 저장소는 JavaScript로 **매일 코딩 테스트 문제 풀이 연습**을 하기 위한 환경입니다. 각 문제마다 별도의 `src/exN` 폴더를 만들어 문제 설명과 풀이 코드를 작성하고, Jest 테스트로 검증합니다.

## 📦 프로젝트 구조

```
365-coding-challenge/
├── src/                  # 문제 풀이 코드 (ex1, ex2, ex3 ...)
│   ├── ex0/              # 문제 템플릿
│   │   ├── index.js      # EMPTY
│   │   ├── test.js       # EMPTY
│   │   └── README.md     # EMPTY
│   ├── ex1/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   ├── ex2/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   ├── ex3/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   ├── ex4/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   ├── ex5/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   ├── ex6/
│   │   ├── index.js
│   │   ├── test.js
│   │   └── README.md
│   └── ex7/
│       ├── index.js
│       ├── test.js
│       └── README.md
├── cs-study/             # CS 개념 정리
│   ├── network/
│   ├── os/
│   ├── database/
│   └── data-structure/
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 시작하기

1. 저장소를 클론하고 의존성 설치:

   ```bash
   npm install
   ```

2. `src/` 폴더에 문제 풀 **폴더**를 만들어 `index.js`, `test.js`, `README.md`를 넣습니다.

   예: `src/ex7/index.js`, `src/ex7/test.js`, `src/ex7/README.md`

## 🧪 테스트 실행

```bash
# 전체 테스트 실행
npm test

# 변경된 파일만 감시하며 테스트
npm run test:watch

# 커버리지 보고서
npm run test:coverage
```

## 📝 코딩 테스트 포맷

각 문제는 다음 형식으로 구성하세요.

### 1. 폴더 생성

`src/exN/` 폴더를 생성합니다. N은 연속 번호입니다.

### 2. index.js

```javascript
/**
 * exN. 문제 제목
 * 문제 설명 한 줄 요약
 */

function solution(input) {
  // 여기에 풀이를 작성하세요
}

// 실행 예시
console.log(solution(...)); // 예상 출력

module.exports = { solution };
```

### 3. README.md

```markdown
# exN. 문제 제목

## 문제 설명
문제 내용

## 입력 조건
- 조건 1
- 조건 2

## 예제
입력: ...
출력: ...

## 풀이 아이디어
- 접근 방법

## 해답
(풀이 후 작성)

## 면접 팁
면접에서 활용할 수 있는 포인트

## 📋 문제 목록 행
> 아래 행을 root README.md의 문제 목록 표에 복사하세요.

| exN | 문제 제목 | 문제 설명 한 줄 요약 | 유형 | 난이도 | 날짜 |
```

### 4. test.js

```javascript
const { solution } = require('./index');

describe('exN. 문제 제목', () => {
  test('케이스 설명', () => {
    expect(solution(...)).toEqual(...);
  });
});
```

## 📚 CS Study

CS 개념 정리를 위한 `cs-study/` 폴더도 포함되어 있습니다.

```
cs-study/
├── network/
├── os/
├── database/
└── data-structure/
```

- 매일 하나의 개념을 선택해 마크다운 문서로 정리하고 커밋하세요.
- 예: `cs-study/network/tcp_udp.md`
- AI에게 "오늘 CS 문제 하나 내줘"라고 요청하면 문답식으로 진행할 수 있습니다.

## 📋 문제 목록

새 문제를 추가할 때마다 아래 표에 한 줄씩 추가하세요.

| # | 제목 | 설명 | 유형 | 난이도 | 날짜 |
|---|------|------|------|--------|------|
| ex1 | 중복 제거 | 정수 배열에서 중복된 값을 제거한 새 배열 반환 | 배열 | 브론즈 | - |
| ex2 | 문자열 뒤집기 | 입력 문자열을 뒤집어 반환 | 문자열 | 브론즈 | - |
| ex3 | 유효한 괄호 | 괄호 짝이 올바른지 판별 | 스택 | 실버 | - |
| ex4 | 가장 긴 부분 문자열 | 중복 없는 가장 긴 부분 문자열 길이 반환 | 슬라이딩 윈도우 | 실버 | - |
| ex5 | 두 배열의 교집합 II | 두 배열의 교집합 반환 (중복 허용) | 해시맵 | 실버 | - |
| ex6 | 두 수의 합 (Two Sum) | 합이 목표값이 되는 두 인덱스 반환 | 해시맵 | 실버 | 2026-03-13 |
| ex7 | 숫자 배열에서 가장 큰 수 만들기 | 배열의 숫자들을 이어 붙여 만들 수 있는 가장 큰 수 반환 | 정렬 | 실버 | 2026-03-13 |
| ex8 | 이진 탐색 (Binary Search) | 정렬된 배열에서 target의 인덱스 반환, 없으면 -1 | 이진 탐색 | 실버 | 2026-03-13 |
| ex9 | 피보나치 수열 (Fibonacci) | n번째 피보나치 수 반환 | DP | 브론즈 | 2026-03-13 |
| ex10 | 클라이밍 계단 (Climbing Stairs) | n개의 계단을 오르는 방법의 수 반환 | DP | 실버 | 2026-03-13 |
| ex11 | 최소값 스택 (Min Stack) | push/pop/top/getMin을 O(1)으로 지원하는 스택 구현 | 스택 | 실버 | 2026-03-13 |
| ex12 | 연결 리스트 사이클 감지 | 단일 연결 리스트에서 사이클 존재 여부 판별 | 연결 리스트 | 실버 | 2026-03-14 |
| ex14 | 전화번호 목록 | 번호 중 다른 번호의 접두사가 존재하면 false 반환 | 정렬/해시 | 실버 | 2026-03-14 |

🎯 매일 문제를 풀고 테스트를 추가하며 꾸준히 실력을 향상하세요!