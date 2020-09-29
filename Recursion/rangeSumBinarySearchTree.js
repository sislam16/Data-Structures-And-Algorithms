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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum ;
    
    if(!root){
        return 0
    }
    
    if(root.val <= R && root.val >= L){ // if the root val is greater than the left lead and less than the right leaf add those numbers in between
        sum = root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
    }else if (root.val > R){ // if root val is greater than the R just check the left sub tree
        sum = rangeSumBST(root.left, L, R)
    } else{ // if root val is greater than the left sub tree root check right 
        sum = rangeSumBST(root.right, L, R)
    }
    
    return sum
};