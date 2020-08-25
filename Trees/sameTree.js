var isSameTree = function(p, q) {
    let checked; 
    
    if(!p && !q){
        return true
    }
 
    if(!p || !q){
        return false
    }
    
    // if(p.val !== q.val){
    //     return false
    // }
    
    // return  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    
    if(p && q){
         if(p.val === q.val){
            let pleft = p.left
            let qleft = q.left
            checked = isSameTree(pleft, qleft)
             
            if(checked === true){
                let pright = p.right
                let qright = q.right
                checked = isSameTree(pright, qright)
                    }
                return checked 
             } 
              return false 
         } 
    };