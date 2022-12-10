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

var maxProduct = function(root) {
    let treeSum = 0n,maxProduct = 0n;
    treeSum = dfsSum(root);
    function dfsSum(node){
        let sum = 0n;
        if(node === null){
            return 0n;
        }
        sum += BigInt(node.val);
        sum += dfsSum(node.left);
        sum += dfsSum(node.right);
        return sum;
    }
    
    maxProductHelper(root);
    
    return maxProduct % 1000000007n;
    
    function maxProductHelper(node){
        if(node === null){
            return 0n;
        }
        let leftSum,rightSum,remainingSum,product,sum=0n;
        sum += BigInt(node.val);
        leftSum = maxProductHelper(node.left);
        product = (treeSum - leftSum)*leftSum ;
        if(product>maxProduct){
            maxProduct = product;
        }
        rightSum = maxProductHelper(node.right);
        product = (treeSum - rightSum) * rightSum ;
        if(product > maxProduct){
            maxProduct = product;
        }
        return sum + leftSum + rightSum;
    }
};

