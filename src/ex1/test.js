const { uniqueArray } = require('./index');

describe('ex1. 중복 제거', () => {
  test('[1,2,2,3,3,4] → [1,2,3,4]', () => {
    expect(uniqueArray([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('[1,1,1] → [1]', () => {
    expect(uniqueArray([1, 1, 1])).toEqual([1]);
  });

  test('[] → []', () => {
    expect(uniqueArray([])).toEqual([]);
  });

  test('[1,2,3] → [1,2,3]', () => {
    expect(uniqueArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
