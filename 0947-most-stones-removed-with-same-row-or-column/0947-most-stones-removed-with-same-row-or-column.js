/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let arr = [];
    let islandSet = new Set([...stones.map(a=>a[0]), ...stones.map(a => ~a[1])]);
    let island = islandSet.size;
    islandSet.forEach(i => {
        arr[i] = i;
    });
    function findRoot(t) {
        while(arr[t] !== arr[arr[t]]) {
            // root has new root
            arr[t] = arr[arr[t]];
        }
        return arr[t];
    } 
    stones.forEach(([a,b]) => {
        b = ~b;
        ar = findRoot(a);
        br = findRoot(b);
        if(ar !== br) {
            arr[ar] = br;
            island--;
        }
    });
    return stones.length - island;
};