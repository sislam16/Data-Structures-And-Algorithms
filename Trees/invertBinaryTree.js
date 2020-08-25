var invertTree = function(root) {
    if(!root){
        return null 
    }
    
    
    if(root.left && root.right){
        // console.log(root)
        prevLeft = root.left 
        root.left = root.right
        root.right = prevLeft
        console.log(root)
        invertTree(root)

    }
    return root

  
    
};