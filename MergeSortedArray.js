const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
const m = 3;
const n = 3;

// brute force
function merge(nums1, m, nums2, n) {
  // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...
  let i = m - 1,
    j = n - 1;
  // Initialize a variable k to store the last index of the 1st array...
  let k = m + n - 1;
  // Create a loop until either of i or j becomes zero..
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      console.log('1st if');
      nums1[k] = nums1[i];
      i--;
    } else {
      console.log('2nd if');
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // fill nums1 with leftover nums2 elements
  // While i does not become zero...
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--, k--; 
  }
  return nums1;
}

console.log(nums1, nums2);
console.log(merge(nums1, m, nums2, n));
