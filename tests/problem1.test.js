const { uniqueArray } = require('../src/ex1');

test('uniqueArray removes duplicates correctly', () => {
  expect(uniqueArray([1,2,2,3,3,4])).toEqual([1,2,3,4]);
});
