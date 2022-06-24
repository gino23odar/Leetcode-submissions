/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let queue = new MaxPriorityQueue({priority: x => x});
    let sum = 0;
    
    for(let num of target){
        sum += num;
        queue.enqueue(num);
    }
    
    while(queue.front().element !== 1){
        let num = queue.dequeue().element;
        sum -= num;
        if(num <= sum || sum < 1) return false;
        num %= sum;
        sum += num;
        queue.enqueue(num || sum);
    }
    return true;
};