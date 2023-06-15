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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (!root) return 0;

    const max = {
        value: -Infinity,
        level: 0,
    };

    let levelNodes = [root];
    let currentLevel = 0;
    while (levelNodes.length > 0) {
        currentLevel++;

        let currentSum = 0;

        const levelNodesSize = levelNodes.length;

        for (let i = 0; i < levelNodesSize; i++) {
            const currentNode = levelNodes.shift();
            currentSum += currentNode.val;

            if (currentNode.left) levelNodes.push(currentNode.left);
            if (currentNode.right) levelNodes.push(currentNode.right);
        }

        if (currentSum > max.value) {
            max.value = currentSum;
            max.level = currentLevel;
        }
    }

    return max.level;
};