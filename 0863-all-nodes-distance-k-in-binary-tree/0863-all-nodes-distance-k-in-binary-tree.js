/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  if(!root) return []
  const node = findTarget(root, null, target)  
  const res = []
  findAllkApart(node, k, res)
  return res
};

function findTarget(root, parent, target){
  if(!root) return null
  root.parent = parent
  if(root === target){    
   return root 
  }    
  return findTarget(root.left, root, target) || findTarget(root.right, root, target)    
}

function findAllkApart(root, k, res){
  if(!root || root.visited) return res
  if(k == 0){
    res.push(root.val)
    return res
  }   
  root.visited = true
  findAllkApart(root.left, k-1, res)
  findAllkApart(root.right, k-1, res)
  findAllkApart(root.parent, k-1, res)
  return res
}