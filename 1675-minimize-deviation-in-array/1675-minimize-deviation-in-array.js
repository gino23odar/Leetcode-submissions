/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let maxHeap = new MaxPriorityQueue();
    let min = Infinity;
    for(let num of nums){
        if(num % 2 === 1){ 
            num *= 2;
        }
        min = Math.min(min, num); 
        maxHeap.enqueue(num); 
    }
    let minDeviation = Infinity;
    while(maxHeap.size()){
        let max = maxHeap.dequeue().element; 
        let currDev = max-min; 
        minDeviation = Math.min(minDeviation, currDev); 
        if(max % 2 === 0){ 
            max = max/2; 
            min = Math.min(min, max); 
            maxHeap.enqueue(max); 
        } else {
            break; 
        }
    }
    return minDeviation;
};