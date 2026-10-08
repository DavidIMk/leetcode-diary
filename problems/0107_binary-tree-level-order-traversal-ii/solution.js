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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  const levels = [];
  const queue = [root];

  while (queue.length) {
    const currentLength = queue.length;
    const currentLevel = [];
    for (let i = 0; i < currentLength; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      currentLevel.push(currentNode.val);
    }
    levels.unshift(currentLevel);
  }
  return levels;
};
