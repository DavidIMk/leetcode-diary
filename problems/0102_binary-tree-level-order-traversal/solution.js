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
var levelOrder = function (root) {
    if (!root) {
        return []
    }

    const queue = [root]
    const levels = []
    while (queue.length) {
        const currentLength = queue.length
        const currentLevels = []
        for (let i = 0; i < currentLength; i++) {
          const currentNode = queue.shift();
          if (currentNode.left) {
            queue.push(currentNode.left);
          }
          if (currentNode.right) {
            queue.push(currentNode.right);
          }
          currentLevels.push(currentNode.val);
        }
        levels.push(currentLevels)
    }
    return levels
};