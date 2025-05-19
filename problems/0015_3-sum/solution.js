/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < sorted.length; i++) {
      const val = sorted[i]

      let left = i + 1;
      let right = sorted.length - 1
      while (left < right) {
          if (sorted[left] + sorted[right] + val === 0) {
              result.push([sorted[left], sorted[right], val])
              left++
              while (sorted[left - 1] === sorted[left]) {
                  left++
              }
          } else if (sorted[left] + sorted[right] + val > 0) {
              right--
          } else {
              left++
          }
      }
  }
  return result
};