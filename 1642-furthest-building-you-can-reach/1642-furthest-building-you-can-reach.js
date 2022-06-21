/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1, heap = [,];
    
    const turnHeap = (i) => {
        let j = heap.length;
        let par = j >> 1;
        let tmp;
        
        heap.push(i);
        while(heap[par] > heap[j]){
            tmp = heap[par];
            heap[par] = heap[j];
            heap[j] = tmp;
            j = par;
            par = j >> 1;
        }
    }
    
    const ext = () =>{
        if(heap.length === 1) return null;
        let top = heap[1], tmp, right, left;
        let i = 1;
        let child = heap[3] < heap[2] ?3 :2;
        
        if(heap.length > 2){
            heap[1] = heap.pop();
        } else {
            heap.pop();
        }
        while(heap[i] > heap[child]){
            tmp = heap[child];
            heap[child] = heap[i];
            heap[i] = tmp;
            i = child;
            left = i << 1;
            right = left + 1;
            child = heap[right] < heap[left] ?right :left;
        }
        return top;
    }
    
    for(let i = 0; i < len; i++){
        let dif = heights[i+1] - heights[i];
        if(dif > 0){
            if(ladders > 0){
                turnHeap(dif);
                ladders--;
            } else if(heap.length > 1 && dif > heap[1]){
                turnHeap(dif);
                bricks -= ext();
            } else {
                bricks -= dif;
            }
            if(bricks < 0) return i;
        }
    }
    return len;
};