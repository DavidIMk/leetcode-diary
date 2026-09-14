/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const subset = [];

  const createSubset = (i) => {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    createSubset(i + 1);

    subset.pop();
    createSubset(i + 1);
  };
  createSubset(0);
  return result;

  backtrack([], 0);
  return result;
};
