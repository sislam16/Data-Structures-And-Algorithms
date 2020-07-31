/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let merge;
    let current1 = l1
    let current2 = l2
    
    if(!current1 && !current2){
        return false
    }
    
    while(current1 !== null && current2 !== null){
        if(current1.val > current2.val){
            merge =current1.splice(0,0)
            current2= current2.splice(1,0,merge)
            console.log(current2)
            // merged.val = current2.val
            // merged.next= current1.val
            current1= current1.next
            current2 = current2.next
        } else if(current2.val > current1.val){
             merge =current2.splice(0,0)
            current1= current1.splice(1,0,merge)
            console.log(current2)
            // merged.val = current1.val
            // merged.next =current2.val
            current1=current1.next
            current2 = current2.next
        }
    }
console.log(merged)  
    return merged
};