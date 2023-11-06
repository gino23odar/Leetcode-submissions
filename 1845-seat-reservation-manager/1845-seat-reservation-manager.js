/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.minHeap = new MinPriorityQueue();
    this.cur = 1;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if(this.minHeap.size() > 0) {
        return this.minHeap.dequeue().element;
    }

    return this.cur++;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.minHeap.enqueue(seatNumber)
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */