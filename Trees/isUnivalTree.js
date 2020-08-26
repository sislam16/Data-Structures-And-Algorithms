var isUnivalTree = function(root) {
    // let valCheck = root.val
    
    if(!root){
        return false
    }
    
    if(root){
        let rootVal = root.val 
        let left = root.left
        let right = root.right
        
        if(left.val === rootVal && right.val === rootVal){
             return true
        }
       return false
    }
    
    isUnivalTree(root.left)
    isUnivalTree(root.right)
    
};