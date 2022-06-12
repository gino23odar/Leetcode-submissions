/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 1) return new TreeNode(nums[0]);
    if(nums.length === 0) return null;
    
    let center = Math.floor(nums.length/2);
    let root = new TreeNode(nums[center]);
    
    let leftTree = nums.slice(0, center);
    root.left = sortedArrayToBST(leftTree);
    
    let rightTree = nums.slice(center+1, nums.length);
    root.right = sortedArrayToBST(rightTree);
    
    return root;
};