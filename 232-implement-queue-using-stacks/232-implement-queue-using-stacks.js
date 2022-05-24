
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let current = null;
    while((current = this.stack1.pop())){
        this.stack2.push(current);
    }
    this.stack2.push(x);
    while((current = this.stack2.pop())){
        this.stack1.push(current);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */