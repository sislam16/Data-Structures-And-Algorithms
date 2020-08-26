var invertTree = function(root) {
    if(!root){
        return null 
    }
    
    
    if(root){
        prevLeft = root.left 
        root.left = root.right
        root.right = prevLeft
        invertTree(root.left)
        invertTree(root.right)

    }
    return root

  
    
};