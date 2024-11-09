/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private long cur = Long.MIN_VALUE;
    
    public boolean isValidBST(TreeNode root) {
        if(root == null) return true;
        return inOrder(root);
    }
    
    private boolean inOrder(TreeNode node){
        if(node == null) return true;
        
        if(!inOrder(node.left)) return false;
        if(node.val <= cur) return false;
        cur = node.val;
        
        return inOrder(node.right);
    }
}