const { twoSum } = require('../src/sample');

test('twoSum returns correct indices', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});
