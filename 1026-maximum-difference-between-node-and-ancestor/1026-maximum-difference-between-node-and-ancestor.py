# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.diff = 0

    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if not root:
                return [sys.maxsize, -sys.maxsize]

            if root.left == None and root.right == None:
                return [root.val, root.val]
            
            left = dfs(root.left)
            right = dfs(root.right)

            minVal = min(left[0], right[0])
            maxVal = max(left[1], right[1])
                
            self.diff = max(self.diff, max(abs(minVal - root.val), abs(maxVal - root.val)))

            minVal = min(minVal, root.val)
            maxVal = max(maxVal, root.val)

            return [minVal, maxVal]
        
        dfs(root)

        return self.diff 
        