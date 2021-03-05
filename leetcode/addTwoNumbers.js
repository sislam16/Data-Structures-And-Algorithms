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
var addTwoNumbers = function (l1, l2) {
    //iterate thru LL's and push el into arr & join then parse
    //add the nums and turn it into a str snd split 
    //map through split and parse el's to return LL

    let l1Arr = []
    let l2Arr = []
    let output;
    let head;

    while (l1) {
        l1Arr.unshift(l1.val)
        l1 = l1.next
    }

    while (l2) {
        l2Arr.unshift(l2.val)
        l2 = l2.next
    }

    let num1 = BigInt(l1Arr.join(''))
    let num2 = BigInt(l2Arr.join(''))
    let total = num1 + num2 + ''

    for (let i = total.length - 1; i >= 0; i--) {
        if (!output) {
            output = new ListNode(Number(total[i]))
            head = output
        } else {

            output.next = new ListNode(Number(total[i]))
            output = output.next
        }
    }
    return head
};