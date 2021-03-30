/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head
    
    if(!current){
        return head
    }
  
    while(current.next){
         while(current.val === current.next.val){
              if(!current.next.next){ 
                current.next = current.next.next
                return head
              }
            current.next = current.next.next  
            } 
         current = current.next
    }
    return head
};