class Queue {
    constructor() {
      this.array = [];
    }
  
    enqueue(value) {
      this.array.push(value);
    }
  
    dequeue() {
      return this.array.shift();
    }
  
    peek() {
        if(!this.isEmpty()){
            return this.array[0];
        }
    }
  
    isEmpty() {
      return this.array.length === 0;
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

