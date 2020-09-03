var mergeTwoLists = function(l1, l2) {
    let mergedHead = null
    let currentMerged = null
    
    if(!l1 && !l2){
        return 0
    }

    while(l1 !== null && l2 !== null){
        if(l1.val > l2.val){
            let newNode = new ListNode(l2.val)
            if(!mergedHead){
                mergedHead = newNode
                currentMerged = mergedHead
            }
            currentMerged.next= newNode
            currentMerged = currentMerged.next
            l2 = l2.next
        } else{
            let newNode = new ListNode(l1.val)
            if(!mergedHead){
                mergedHead = newNode
                currentMerged = mergedHead

            }
            currentMerged.next = newNode
            currentMerged = currentMerged.next
            l1=l1.next
        }

    }
  
    while(l1 !== null){
        let newNode = l1
        currentMerged.next = newNode
        currentMerged = currentMerged.next
         l1=l1.next
    }
    
      while(l2 !== null){
        let newNode = l2
        currentMerged.next = newNode
        currentMerged = currentMerged.next
         l2=l2.next
    }
    
console.log(mergedHead)  
    return mergedHead
};