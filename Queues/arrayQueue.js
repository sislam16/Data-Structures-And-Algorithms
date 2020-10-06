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
      const firstIn = 0;
      return this.array[firstIn];
    }
  
    isEmpty() {
      return this.array.length === 0;
    }
  
  }