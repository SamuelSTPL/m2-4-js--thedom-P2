// We import (require) the function that we want to test.
const convertToString = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(convertToString([1, 2, 3, 4, 5])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);
  expect(convertToString([5, 1000, 10, 3])).toStrictEqual([
    "5",
    "1000",
    "10",
    "3",
  ]);
  expect(convertToString([1, 10, 100, 1000, 10000])).toStrictEqual([
    "1",
    "10",
    "100",
    "1000",
    "10000",
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
