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
    let mergedHead = null
    let currentMerged = null
    let current1 = l1
    let current2 = l2
    
//     if(!current1 && !current2){
//         return false
//     }
    
    while(current1 !== null && current2 !== null){
        if(current1.val > current2.val){
            let newNode = new ListNode(current2.val)
            if(!mergedHead){
                mergedHead = newNode 
            }
            currentMerged = newNode            
            current2 = current2.next
        } else{
            let newNode = new ListNode(current1.val)
            if(!mergedHead){
                mergedHead = newNode
            }
            currentMerged.next = newNode
            currentMerged = newNode
            current1=current1.next
        }
    }
console.log(merged)  
    return mergedHead
};