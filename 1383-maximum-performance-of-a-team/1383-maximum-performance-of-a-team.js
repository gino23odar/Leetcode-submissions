/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    let order = Array.from({length: n}, (_,i)=> i), mPQ = new MinPriorityQueue(), totalSpeed = 0n , best = 0n;
    order.sort((a,b) => efficiency[b] - efficiency[a]);
    
    for(let i of order){
        mPQ.enqueue(speed[i]);
        if(mPQ.size() <= k){
            totalSpeed += BigInt(speed[i]);
        } else {
            totalSpeed += BigInt(speed[i] - mPQ.dequeue().element);
        }
        let res = totalSpeed * BigInt(efficiency[i]);
        if(res > best) best = res;
    }
    return best % 1000000007n;
};