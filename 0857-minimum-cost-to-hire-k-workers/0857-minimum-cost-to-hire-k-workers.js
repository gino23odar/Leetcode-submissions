/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    let ratios = []

    for(let i = 0; i < quality.length; i++) {
        ratios.push([wage[i] / quality[i], quality[i], wage[i]]);
    } 

    ratios.sort((a, b) => a[0] - b[0]);

    let res = Infinity;
    let maxHeap = new PriorityQueue({compare: (a, b) => b - a});
    let heapSum = 0;

    for(let i = 0; i < ratios.length; i++) {
        let ratio = ratios[i][0];

        let [ , qual, ] = ratios[i];

        maxHeap.enqueue(qual);
        heapSum += qual;

        if(maxHeap.size() > k) {
            heapSum -= maxHeap.dequeue();
        }

        if(maxHeap.size() === k) {
            res = Math.min(res, heapSum * ratio);
        }

    } 

    return res;
};

