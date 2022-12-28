/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let pq = new MaxPriorityQueue({priority: x => x});
    for (const e of piles) pq.enqueue(e);
    while(k--) {
        let cur = pq.dequeue().element;
        let remove = parseInt(cur / 2);
        pq.enqueue(cur - remove);
    }
    let res = 0;
    while(pq.size()) res += pq.dequeue().element;
    return res;
};