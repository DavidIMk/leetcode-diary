/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isValid = (node, min, max) => {
    const leftValid = node.val < max;
    const rightValid = node.val > min;
    if (!leftValid || !rightValid) {
      return false;
    } else {
      return (
        (!node.left || isValid(node.left, min, node.val)) &&
        (!node.right || isValid(node.right, node.val, max))
      );
    }
  };
  return isValid(root, -Infinity, Infinity);
};
