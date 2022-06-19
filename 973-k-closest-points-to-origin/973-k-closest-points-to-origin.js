/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const queue = [];
    for(let i = 0; i < points.length; i++){
        let area = getSize(points[i]);
        if(queue.length < k){
            queue.push([area, points[i]]);
            continue;
        }
        //console.log(queue);
        maxHeap(queue);
        if(area <= queue[0][0]){
            queue.shift();
            queue.push([area, points[i]]);
        }
    }
    //console.log(queue);
    return queue.reduce((acc, res) =>{
        acc.push(res[1]);
        return acc;
    }, []);
};

const maxHeap = (arr) =>{
    arr.sort((a,b) => b[0] - a[0]);
}

const getSize = (el) =>{
    const [x,y] = el;
    return x*x + y*y;
}