var isUnivalTree = function(root) {
    
if(!root){
    return false
}

if(root.left && root.left.val !== root.val){
    return false
}

if(root.right && root.right.val !== root.val){
    return false 
}

let isUnival = true
if(root.left){
  isUnival = isUnival && isUnivalTree(root.left)
}
if(root.right){
    isUnival = isUnival && isUnivalTree(root.right)
}
return isUnival 
};