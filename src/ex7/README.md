# ex7. 유효한 괄호 (Valid Parentheses)

## 문제 설명
문자열 `s`가 주어질 때, 괄호가 올바르게 닫혀 있으면 `true`, 아니면 `false`를 반환하세요.

괄호의 종류는 `(`, `)`, `{`, `}`, `[`, `]` 입니다.

## 입력 조건
- 1 ≤ s.length ≤ 10,000
- s는 괄호 문자로만 이루어짐
- 열린 괄호는 반드시 같은 종류의 닫힌 괄호로 닫혀야 함
- 열린 괄호는 올바른 순서로 닫혀야 함

## 예제
입력: s = "()"
출력: true

입력: s = "()[]{}"
출력: true

입력: s = "(]"
출력: false

입력: s = "([)]"
출력: false

입력: s = "{[]}"
출력: true

## 풀이 아이디어
- 스택(Stack) 활용
- 여는 괄호는 스택에 push
- 닫는 괄호가 나오면 스택 top과 쌍이 맞는지 확인
- 끝까지 순회 후 스택이 비어있으면 true

## 해답

### 스택 활용 O(n)
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if (!map[char]) {
      // 여는 괄호면 push
      stack.push(char);
    } else {
      // 닫는 괄호면 스택 top과 비교
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

## 면접 팁
스택의 LIFO(Last In First Out) 특성이 왜 이 문제에 적합한지 설명할 수 있으면 좋아요.
map으로 괄호 쌍을 관리하는 방식도 함께 설명하세요.