# 365-coding-challenge

이 저장소는 JavaScript로 **매일 코딩 테스트 문제 풀이 연습**을 하기 위한 환경입니다. Jest를 사용하여 알고리즘 문제를 풀고 자동으로 테스트할 수 있도록 구성되어 있습니다.

## 📦 프로젝트 구조

```
365-coding-challenge/
├── src/           # 문제 풀이 코드
├── tests/         # Jest 테스트 코드
├── package.json   # 의존성 및 스크립트
└── README.md      # 이 파일
```

## 🚀 시작하기

1. 저장소를 클론하고 의존성 설치:
   ```bash
   npm install
   ```

2. `src/` 폴더에 문제 풀 **폴더**를 만들어 `index.js`와 `README.md`를 넣습니다.
   예: `src/problem1/index.js`, `src/problem1/README.md`   - `index.js` 안에 함수 구현과 함께 `console.log` 예시를 두어서 각 폴더에서 `node index.js`로 바로 실행할 수 있습니다.3. `tests/` 폴더에 해당 풀이를 검증하는 테스트을 작성합니다. 예: `tests/problem1.test.js`

폴더 구조 예시:
```
src/
├── problem1/
│   ├── index.js
│   └── README.md
├── problem2/
│   ├── index.js
│   └── README.md
```

각 문제 폴더의 `README.md`에는 문제 설명과 예시, 구현 아이디어를 적어두면 관리하기 편합니다.

## 🧪 테스트 실행

- 전체 테스트 실행: `npm test`
- 변경된 파일만 감시하며 테스트: `npm run test:watch`
- 커버리지 보고서: `npm run test:coverage`

## 📁 폴더 설명

- **src/**: 문제 풀이 함수가 들어가는 폴더
- **tests/**: Jest 테스트 파일

🎯 매일 문제를 풀고 테스트를 추가하며 꾸준히 실력을 향상하세요!