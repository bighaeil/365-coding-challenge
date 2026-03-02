# 문제 1: 중복 제거

정수 배열이 주어졌을 때, 배열에 포함된 중복된 값을 모두 제거하고 새로운 배열을 반환하는 함수를 구현하세요.

## 설명
- 입력: 정수로 이루어진 배열
- 출력: 중복이 제거된 새 배열
- 원본 배열은 변경하지 않습니다.

## 예시
```
입력: [1, 2, 2, 3, 3, 4]
출력: [1, 2, 3, 4]
```

## 풀이 아이디어
JavaScript의 `Set` 자료구조를 이용하면 배열에서 중복을 쉽게 제거할 수 있습니다. `Set`에 배열을 전달한 뒤 다시 배열로 변환하면 자동으로 중복이 제거됩니다.

```js
function uniqueArray(arr) {
  return [...new Set(arr)];
}
```

## 사용 방법
폴더에서 직접 실행하려면:
```
node index.js
```
출력: `[1,2,3,4]` (예시)

## 테스트
`tests/ex1.test.js` 파일에 아래와 같은 테스트가 작성되어 있습니다:

```js
const { uniqueArray } = require('../src/ex1');

test('uniqueArray removes duplicates correctly', () => {
  expect(uniqueArray([1,2,2,3,3,4])).toEqual([1,2,3,4]);
});
```

---

이 파일은 문제 설명과 예시, 구현 방법을 간단히 기록하기 위한 목적입니다.