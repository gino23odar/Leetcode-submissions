/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] - b[1]);
    let tot = 0;
    //max Heap
    let pqueue = new MaxPriorityQueue({priority: x => x});
    
    for(let [dur, lD] of courses){
        if(dur + tot <= lD){
            tot += dur;
            pqueue.enqueue(dur);
        } else if(pqueue.front() && pqueue.front().element > dur){
            tot += dur - pqueue.dequeue().element;
            pqueue.enqueue(dur);
        }
    }
    return pqueue.size();
};