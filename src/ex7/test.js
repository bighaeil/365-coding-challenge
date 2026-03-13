const { largestNumber } = require('./index');

describe('ex7. 숫자 배열에서 가장 큰 수 만들기', () => {
  test('[10, 2] → "210"', () => {
    expect(largestNumber([10, 2])).toBe("210");
  });

  test('[3, 30, 34, 5, 9] → "9534330"', () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
  });

  test('[0, 0] → "0"', () => {
    expect(largestNumber([0, 0])).toBe("0");
  });

  test('[1] → "1"', () => {
    expect(largestNumber([1])).toBe("1");
  });
});