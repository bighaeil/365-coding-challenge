# ex11. 최소값 스택 (Min Stack)

## 문제 설명
다음 기능을 지원하는 스택을 구현하세요.
- push(val): 스택에 값 추가
- pop(): 스택 최상단 값 제거
- top(): 스택 최상단 값 반환
- getMin(): 스택의 최솟값 반환 (O(1))

## 입력 조건
- -2^31 ≤ val ≤ 2^31 - 1
- pop, top, getMin은 스택이 비어있지 않은 상태에서 호출됨

## 예제
입력:
push(-2), push(0), push(-3)
getMin() → -3
pop()
top()    → 0
getMin() → -2

## 풀이 아이디어
- 스택을 두 개 사용 (메인 스택 + 최솟값 전용 스택)
- push 시 최솟값 스택에도 현재 최솟값 기록
- pop 시 두 스택 모두 제거
- getMin은 최솟값 스택의 top 반환

## 해답
(풀이 후 작성)

## 면접 팁
getMin()을 O(1)로 만드는 게 핵심이에요.
왜 스택을 두 개 써야 하는지, 최솟값 스택에 어떤 값을 저장하는지 설명할 수 있어야 해요.

## 📋 문제 목록 행
> 아래 행을 root README.md의 문제 목록 표에 복사하세요.

| ex11 | 최소값 스택 (Min Stack) | push/pop/top/getMin을 O(1)으로 지원하는 스택 구현 | 스택 | 실버 | 2026-03-13 |


# 

**풀이**

```javascript
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // 최솟값 전용 스택
  }

  push(val) {
    this.stack.push(val);
    // 최솟값 스택이 비어있거나 val이 현재 최솟값 이하면 추가
    const min = this.minStack.length === 0 
      ? val 
      : Math.min(val, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop(); // 동시에 제거
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
```

---

**동작 시각화**

```
push(-2):  stack=[-2]        minStack=[-2]
push(0):   stack=[-2, 0]     minStack=[-2, -2]
push(-3):  stack=[-2, 0, -3] minStack=[-2, -2, -3]

getMin() → minStack의 top = -3 ✅

pop():     stack=[-2, 0]     minStack=[-2, -2]

top()    → stack의 top = 0 ✅
getMin() → minStack의 top = -2 ✅
```

---

**핵심 아이디어**

매 push마다 minStack에 **그 시점의 최솟값**을 같이 기록해요. 그래서 pop으로 값이 빠져도 이전 최솟값이 minStack에 그대로 남아있어서 getMin()이 항상 O(1)이에요 💪