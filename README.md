# 365-coding-challenge

이 저장소는 JavaScript로 **매일 코딩 테스트 문제 풀이 연습**을 하기 위한 환경입니다. 각 문제마다 별도의 `src/exN` 폴더를 만들어 문제 설명과 풀이 코드를 작성하고, Jest 테스트로 검증합니다.

## 📦 프로젝트 구조

```
365-coding-challenge/
├── src/           # 문제 풀이 코드 (ex1, ex2, ex3 ...)
│   ├── ex1/
│   │   ├── index.js
│   │   └── README.md
│   ├── ex2/
│   │   ├── index.js
│   │   └── README.md
│   └── ex3/
│       ├── index.js
│       └── README.md
├── tests/         # Jest 테스트 코드 (ex1.test.js 등)
├── package.json   # 의존성 및 스크립트
└── README.md      # 이 파일
```

## 🚀 시작하기

1. 저장소를 클론하고 의존성 설치:
   ```bash
   npm install
   ```

2. `src/` 폴더에 문제 풀 **폴더**를 만들어 `index.js`와 `README.md`를 넣습니다.
   예: `src/ex1/index.js`, `src/ex1/README.md`   - `index.js` 안에 함수 구현과 함께 `console.log` 예시를 두어서 폴더에서 `node index.js`로 바로 실행할 수 있습니다.
3. `tests/` 폴더에 해당 풀이를 검증하는 테스트을 작성합니다. 예: `tests/ex1.test.js` (현재 `ex1`, `ex2` 등)

폴더 구조 예시:
```
src/
├── ex1/
│   ├── index.js
│   └── README.md
├── ex2/
│   ├── index.js
│   └── README.md
├── ex3/
│   ├── index.js
│   └── README.md
```

각 문제 폴더의 `README.md`에는 문제 설명과 예시, 구현 아이디어를 적어두면 관리하기 편합니다. 3번 문제부터는 `src/ex3`처럼 연번을 사용하며, 이름은 자유롭게 붙여도 됩니다.

## 🧪 테스트 실행

- 전체 테스트 실행: `npm test`
- 변경된 파일만 감시하며 테스트: `npm run test:watch`
- 커버리지 보고서: `npm run test:coverage`

## 📁 폴더 설명

- **src/**: 문제 풀이 함수가 들어가는 폴더
- **tests/**: Jest 테스트 파일

🎯 매일 문제를 풀고 테스트를 추가하며 꾸준히 실력을 향상하세요!

---

## 📚 CS Study 레포 추가

이 저장소에는 간단한 **CS 개념 정리**를 위한 `cs-study/` 폴더도 포함되어 있습니다. 구조는 아래와 같습니다:

```
cs-study/
├── network/
├── os/
├── database/
└── data-structure/
```

- 매일 하나의 개념을 선택해 마크다운 문서로 정리하고 커밋하세요.
- 예: `cs-study/network/tcp_udp.md`에는 TCP와 UDP 차이 설명이 들어있습니다.
- AI에게 "오늘 CS 문제 하나 내줘"라고 요청하면 이 레포 내용을 기반으로 질문/답변을 진행할 수 있습니다.

이 방식은 CS 면접 준비에도 큰 도움이 됩니다!  