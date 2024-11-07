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
    public boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }
    
    private int checkHeight(TreeNode node){
        if(node == null) return 0;
        
        int leftH = checkHeight(node.left);
        if(leftH == -1) return -1;
            
        int rightH = checkHeight(node.right);
        if(rightH == -1) return -1;
        
        if(Math.abs(leftH - rightH) > 1){
            return -1;
        }
        
        return Math.max(leftH, rightH) + 1;
    }
}