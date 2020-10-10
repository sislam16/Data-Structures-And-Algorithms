import {Queue} from './arrayQueue'
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue = new Queue()
    this.size = 0
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enqueue(x)// creating el at position of size num
    this.size++ // increase stack size by1
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.size === 0){
        return null
    }
    let poppedEl = this.queue[this.size-1] //saving the val of last el in queue
    this.queue[this.size-1] = null // reassigning to null
    this.size -=1 //reducing size by 1
    return poppedEl // return val of el removed
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    if(this.size === 0){
        return null
    }
   return this.queue[this.size-1] // last el in stack but first in queue
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */