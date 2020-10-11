/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue1 = new Queue()
    this.stackQueue = new Queue()
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue1.enqueue(x)// creating el at position of size num

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.queue1.length === 0) {
        return null
    }
    while (!this.queue1.isEmpty()) {
        let poppedEl = this.queue1.dequeue() //saving the val of last el in queue
        if (this.queue1.isEmpty()) {
            this.queue1.enqueue(poppedEl)
            break;
        }
        this.stackQueue.push(poppedEl)
    }

    while (!this.stackQueue.isEmpty()) {
        this.queue1.enqueue(this.stackQueue.dequeue())
    }

    let removedEl = this.queue1.dequeue()
    return removedEl
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    let el;
    while (!this.queue1.isEmpty()) {
        el = this.queue1.dequeue()
        this.stackQueue.enqueue(el)
    }
    while (!this.stackQueue.isEmpty()) {
        this.queue1.enqueue(this.stackQueue.dequeue())
    }

    return el

};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue1.isEmpty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */