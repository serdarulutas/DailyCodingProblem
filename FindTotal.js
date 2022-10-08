// Initialized: 2022-10-08

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

//Can't filter out numbers higher than the targeted number because the array can have negative integers.

function findTotal(arr, target = 0) {
  if (!Array.isArray(arr)) return;
  if (Number.isNaN(target)) target = 0;
  let iteration = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      iteration++;
      if (arr[i] + arr[j] === target) {
        console.log(`V1, Array size: ${arr.length},  Iteration: ${iteration}`);
        return [arr[i], arr[j]];
      }
    }
  }
}

function findTotal2(arr, target = 0) {
  if (!Array.isArray(arr)) return;
  if (Number.isNaN(target)) target = 0;
  let iteration = 0;

  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      iteration++;
      if (arr[i] + arr[j] === target) {
        console.log(`V2, Array size: ${arr.length},  Iteration: ${iteration}`);
        return [arr[i], arr[j]];
      }
    }
  }
}

const arr = [
  7, 15, 3, 7, 4, 12, 11, 14, 15, 1, 2, 4, 3, 5, 4, 1, 55, 1, 32, 2, 4, 1, 5, 3,
  5, 6, 3, 4, 5,
];
console.clear();
const target = 5;
console.log(findTotal(arr, target));
console.log(findTotal2(arr, target));
