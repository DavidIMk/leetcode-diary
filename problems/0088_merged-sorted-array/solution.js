/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let curM = 0;
  let curN = 0;
  let res = [];
  while (curM < m || curN < n) {
    if (curM >= m) {
      res.push(nums2[curN]);
      curN++;
      continue;
    }
    if (curN >= n) {
      res.push(nums1[curM]);
      curM++;
      continue;
    }

    if (nums1[curM] < nums2[curN]) {
      res.push(nums1[curM]);
      curM++;
    } else {
      res.push(nums2[curN]);
      curN++;
    }
  }
  for (let i = 0; i < res.length; i++) {
    nums1[i] = res[i];
  }
};
