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
var longestUnivaluePath = function(root) {
    let length=0;
    
    if(!root){
        return 0
    }
    
    if(root.left && root.left.val !== root.val){
        length =0
    } 
    
    if(root.right && root.right.val !== root.val){
    length =0
    }  
    
    let isUnival = true
    if(root.left){
        isUnival = isUnival && longestUnivaluePath(root.left)
        length +=1
    }
    
    if(root.right){
    isUnival = isUnival && longestUnivaluePath(root.right)
        length++
}
    return length
};
