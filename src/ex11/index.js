/**
 * ex11. 최소값 스택 (Min Stack)
 * push/pop/top/getMin을 O(1)으로 지원하는 스택 구현
 */

class MinStack {
  constructor() {
    // 여기에 초기화를 작성하세요
  }

  push(val) {
    // 여기에 풀이를 작성하세요
  }

  pop() {
    // 여기에 풀이를 작성하세요
  }

  top() {
    // 여기에 풀이를 작성하세요
  }

  getMin() {
    // 여기에 풀이를 작성하세요
  }
}

// 실행 예시
const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin()); // -3
stack.pop();
console.log(stack.top());    // 0
console.log(stack.getMin()); // -2

module.exports = { MinStack };