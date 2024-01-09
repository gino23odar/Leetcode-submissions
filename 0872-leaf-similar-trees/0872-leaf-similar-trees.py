# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        tree1 = []
        tree2 = []
        
        def preorder(node, tree):
            if node is None:
                return 
            if node.left is None and node.right is None:
                tree.append(node.val)
            preorder(node.left, tree)
            preorder(node.right, tree)
        
        preorder(root1, tree1)
        preorder(root2, tree2)
        
        if len(tree1) != len(tree2):
            return False
        
        for i in range(len(tree1)):
            if tree1[i] != tree2[i]:
                return False
        return True