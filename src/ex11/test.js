const { MinStack } = require('./index');

describe('ex11. 최소값 스택', () => {
  test('기본 동작', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  test('단일 요소', () => {
    const stack = new MinStack();
    stack.push(5);
    expect(stack.top()).toBe(5);
    expect(stack.getMin()).toBe(5);
  });

  test('같은 값 여러 개', () => {
    const stack = new MinStack();
    stack.push(1);
    stack.push(1);
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
  });
});