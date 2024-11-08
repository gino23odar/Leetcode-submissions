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
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(root == null || subRoot == null) return false;
        
        if(isSame(root, subRoot)) return true;
        
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
    
    public boolean isSame(TreeNode node, TreeNode subRoot){
        if(node == null && subRoot == null) return true;
        if(node == null || subRoot == null) return false;
        
        return node.val == subRoot.val && isSame(node.left, subRoot.left) && isSame(node.right, subRoot.right);
    }
}