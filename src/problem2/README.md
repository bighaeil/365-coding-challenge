# 문제 2: 문자열 뒤집기

문자열이 입력되면 그 문자열을 뒤집어서 반환하는 함수를 구현하세요.

## 설명
- 입력: 문자열
- 출력: 뒤집힌 문자열

## 예시
```
입력: "hello"
출력: "olleh"
```

## 풀이 아이디어
자바스크립트 문자열을 배열로 바꾼 뒤 `reverse` 메서드를 이용하고 다시 합치면 쉽게 구현할 수 있습니다.

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

## 테스트
`tests/problem2.test.js`에 다음 테스트가 있습니다:

```js
const { reverseString } = require('../src/problem2');

test('reverseString correctly reverses input', () => {
  expect(reverseString('hello')).toBe('olleh');
});
```
