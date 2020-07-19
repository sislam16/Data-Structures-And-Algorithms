/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(node) {
	let tracker = new Set()
	let current = node
	
    if(!current){return false}
    
	while(current.next){
	if(!tracker.has(current)){
        tracker.add(current)
        current = current.next
    }else{
    return true
    }
}
	return false 
    
};