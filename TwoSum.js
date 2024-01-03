const nums = [4, -2, 5, 0, 6, 3, 2, 7]; // [2,7,11,15] & 9 || [3,2,4] & 6 || [3,3] & 6 || [3,5,1,4,-8] & 5
const target = 1;

// brute force
//time: O (n^2) , space: O(1) --improve--> time: O(n), space: O(n)
function twoSum(nums, target) {
  let number = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    console.log(`i: ${nums[i]}`);
    for (let j = 0; j < +nums.length; j++) {
      console.log(`i: ${nums[i]} ,j: ${nums[j]}`);
      if (nums[i] + nums[j] === target && i !== j) {
        number = [i, j];
        console.log(`got target at [i: ${nums[i]} ,j: ${nums[j]}]`);
        return number;
      }
    }
  }
}

// time: O(n), space: O(n)
function twoSumMap(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    // curr + x = target
    // x = target - cur
    let complement = target - cur;

    // Store the current number and its index in the Map
    map.set(nums[i], i);

    // Check if the complement exists in the Map
    if (map.has(complement)) {
      console.log('in if!!');
      return [map.get(complement), i];
    }

  }
  console.log('at end');
  throw new Error('No solution found');
}

let start = Date.now();
console.log(twoSum(nums, target));
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
start = Date.now();
console.log(twoSumMap(nums, target));
timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");