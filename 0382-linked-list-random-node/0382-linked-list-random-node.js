/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
	this.list = [];
	while (head) {
		this.list.push(head.val);
		head = head.next;
	} 
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
   const minIndex = 0;
   const maxIndex = this.list.length - 1;
   const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
   return this.list[randomIndex];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */