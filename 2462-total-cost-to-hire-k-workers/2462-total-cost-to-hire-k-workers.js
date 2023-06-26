/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let leftIndex = 0;
    let rightIndex = costs.length - 1;
    const minPriorityQueue = new MinPriorityQueue({ 
        compare: (a, b) => a.value === b.value ? a.index - b.index : a.value - b.value
    });
    let sum = 0, element;
    const take = Math.min(Math.ceil(costs.length / 2), candidates);

    for (let i = 0; i < take; ++i) {
        minPriorityQueue.enqueue({ index: i, value: costs[i] });
        ++leftIndex;
    }

    for (let i = 0; i < candidates && leftIndex < rightIndex; ++i) {
        minPriorityQueue.enqueue({ index: rightIndex, value: costs[rightIndex--] });
    }

    for (let i = 0; i < k; ++i) {
        element = minPriorityQueue.dequeue();
        sum += element.value;
        if (leftIndex <= rightIndex) {
            if (element.index < leftIndex) minPriorityQueue.enqueue({ index: leftIndex, value: costs[leftIndex++] });
            else minPriorityQueue.enqueue({ index: rightIndex, value: costs[rightIndex--] });
        }
    }

    return sum;
};