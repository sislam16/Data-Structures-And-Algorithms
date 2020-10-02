/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */


var MyCircularQueue = function(k) {
    this.queue = [];
    this.maxSize = k;
    this.currentSize = 0;
    this.frontFilled = -1;
    this.rearFilled = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false
    }
    
    let newPosition = this.rearFilled + 1
    if(newPosition === this.maxSize){
        newPosition = 0
    }
        
    if(this.isEmpty()){
        this.frontFilled = newPosition
    }
    this.queue[newPosition] = value
    this.rearFilled = newPosition 

    this.currentSize += 1
    return true  
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false
    }
    
    this.frontFilled = this.frontFilled + 1
    this.currentSize -= 1
    
    if(this.frontFilled === this.maxSize){
        this.frontFilled = 0
    }
    return true 
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
     if(this.isEmpty()){
        return -1
    }
    
    return this.queue[this.frontFilled]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
    }
    
    return this.queue[this.rearFilled]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0
    
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.maxSize
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */