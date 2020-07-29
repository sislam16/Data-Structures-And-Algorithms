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
    let merged = new LinkedList() 
    let current1 = node
    let current2 = node
    
    if(!current1 && !current2){
        return false
    }
    while(current1 && current2){
        if(current1 > current2){
            if(merged.head === null){
                this[head] = new Node(current2.value)
            }
            
        }
    }
    
};