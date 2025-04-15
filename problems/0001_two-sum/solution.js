/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    if (map[target - nums[j]] !== undefined && j !== map[target - nums[j]]) {
      return [j, map[target - nums[j]]];
    }
  }
};
