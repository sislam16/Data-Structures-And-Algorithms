class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class Queue {
   
    constructor() {
      this.head = null;
      this.length = 0
    }
  
    enqueue(value) {
        let node = new Node(value)
        let current;
        if(this.head === null){
           this.head = node
            current = node
        } else{
            current = this.head // adds the new node as the next el of existing list
            while(current.next){ 
                current = current.next // while there is a next node, the current will be next 
            }
            current.next = node //creates new node
        }
        this.length += 1
    }
  
    dequeue() {
        let current = this.head
        if(current){ // if there is an el in the front of list
            let el = current.el
            current = current.next
            this.head = current
            this.length -=1
            return current
        }
        return null    
    }
  
    peek() {
        if(head){
            return head.val
        }
        return null
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
  }

  let q = new Queue()
  q.enqueue(5)
  q.enqueue(4)
  q.enqueue(3)
  q.enqueue(1)
  console.log(q)

  q.dequeue()
  console.log(q)

