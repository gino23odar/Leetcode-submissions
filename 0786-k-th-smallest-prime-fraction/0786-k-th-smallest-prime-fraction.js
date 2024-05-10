/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let q = new MinPriorityQueue({priority: (obj) => obj.val});
    
    let counter = 0;
    let smallestFraction = [];
    
    for(let i = 0; i < arr.length - 1; i++){
        let val = arr[i]/arr[arr.length - 1]; 
        let obj = {'i': i, 'j': arr.length - 1, 'val': val}
        q.enqueue(obj);
    }
	
    while(counter < k){
        let dequeObj = q.dequeue().element;
        let i = dequeObj.i; 
        let j = dequeObj.j;
        smallestFraction = [arr[i], arr[j]];
        if(j > i+1){
            let val = arr[i]/arr[j-1]; 
            let obj = {'i': i, 'j': j-1, 'val': val}
            q.enqueue(obj);
        }
        counter++;
    }

    return smallestFraction;
};