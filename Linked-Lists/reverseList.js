var reverseList = function (head) {
    let current = head;
    let previous = null;
    let next = head;


    while (current !== null) {
        next = next.next //head.next
        current.next = previous//head.next becomes previous 
        previous = current //precious is now the current 
        current = next //current is previous.next 
    }
    return previous
};