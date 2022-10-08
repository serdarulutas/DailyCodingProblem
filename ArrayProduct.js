// Initialized: 2022-10-08

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function arrayProduct(arr) {
  if (!Array.isArray(arr)) return;

  return arr.map((_, index, mapArr) => {
    return mapArr.reduce((previousValue, _, currArrIndex, reduceArr) => {
      if (index !== currArrIndex) {
        return previousValue * reduceArr[currArrIndex];
      } else {
        return previousValue;
      }
    }, 1);
  });
}

console.log(arrayProduct([1, 2, 3, 4, 5]));

console.log(arrayProduct([1, 2, 3]));

console.log(arrayProduct([3, 2, 1]));

console.log(arrayProduct([5, 23, 4, 6, 12]));
