
var MyCalendar = function() {
    this.calendar = {start: -1, end: -1, next: {start: Infinity, end: Infinity}}
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let cur = this.calendar, last = cur;
    while(start >= cur.end){
        last = cur;
        cur = cur.next;
    }
    if(cur.start < end){
        return false;
    }
    last.next = {start: start, end: end, next: cur};
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */