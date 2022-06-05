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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    return helper(root, subRoot);
};

function helper(s, t, count = 0){
    if(!s) return false;
    if(s.val === t.val && isIdentical(s, t)){
        return true;
    } else {
        return helper(s.left, t, count++) || helper(s.right, t, count++);
    }
}

function isIdentical(s, t) {
    if (!s && !t) return true;
    if (!t) return false;
    if (!s) return false;
    if (s.val !== t.val) {
      return false;
    }
    return isIdentical(s.left, t.left) && isIdentical(s.right, t.right);
  }
