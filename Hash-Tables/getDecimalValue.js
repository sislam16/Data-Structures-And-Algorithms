/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

//determine the length of the list and save in a variable
//iterate through list again and subtract the saved length by 1 until we get to 0
//return sum decimal numbers from linked list 
var getDecimalValue = function(head) {
    let listLength = 0;
    let sum = 0;
    let current = head 
    let next = current.next

    while(current.next !== null){
      current = next
      next = current.next
      listLength += 1
    }
    
    current = head 
    while(current !==null ){
        sum += Math.pow(2, listLength) * current.val
        // console.log(sum, current.val, listLength)
        current = current.next
        listLength = listLength - 1
    }
    return sum
};