let cache = new Array(this.capacity);/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity; 
  this.map = new Map();
  this.head = {}; 
  this.tail = {};
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
    let c = this.map.get(key);
      
    c.prev.next = c.next;
    c.next.prev = c.prev;
      
    this.tail.prev.next = c;
      
    c.prev = this.tail.prev;
    c.next = this.tail;
      
    this.tail.prev = c;
      
    return c.value;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.get(key) !== -1){
    this.tail.prev.value = value; 
  } else {
    if(this.map.size === this.capacity) { 
      this.map.delete(this.head.next.key);
      this.head.next = this.head.next.next;
      this.head.next.prev = this.head; 
    }

    let newNode = {
      value, 
      key
    };
      
    this.map.set(key, newNode);
    this.tail.prev.next = newNode;
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev = newNode;
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */