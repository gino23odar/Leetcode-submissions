class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size) return -1;
    
    let cur = this.head;
    
    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }
    
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    
    node.next = this.head;
    this.head = node;
    this.size++;
    
    return;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.size == 0) {
        this.addAtHead(val);
        return;
    }
    
    let cur = this.head;
    
    while (cur.next != null) {
        cur = cur.next;
    }
    
    const node = new Node(val);
    
    cur.next = node;
    this.size++;
    
    return;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;
    
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    
    let cur = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    
    const next = cur.next;
    const node = new Node(val);
    
    cur.next = node;
    node.next = next;
    this.size++;
    
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) return;
    
    if (index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    
    let curr = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    
    curr.next = curr.next.next;
    this.size--;
    
    return;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */