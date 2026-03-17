const { intersect } = require('./index');

describe('ex5. 두 배열의 교집합 II', () => {
  test('[1,2,2,1], [2,2] → [2,2]', () => {
    expect(intersect([1, 2, 2, 1], [2, 2]).sort()).toEqual([2, 2].sort());
  });

  test('[4,9,5], [9,4,9,8,4] → [4,9]', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4]).sort()).toEqual([4, 9].sort());
  });

  test('[1], [1] → [1]', () => {
    expect(intersect([1], [1])).toEqual([1]);
  });

  test('[1], [2] → []', () => {
    expect(intersect([1], [2])).toEqual([]);
  });
});
