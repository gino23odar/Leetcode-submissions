/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    arr.sort((a,b) => a - b);
    let len = arr.length, map = new Map(), ans = 0;
    for(let i = 0; i < len; i++){
        let num = arr[i], conf = 1, lim = Math.sqrt(num);
        for(let j = 0, fA = arr[0]; fA <= lim; fA = arr[++j]){
            let fB = num / fA;
            if(map.has(fB)) conf += map.get(fA) * map.get(fB) * (fA === fB ?1 :2);
        }
        map.set(num, conf);
        ans += conf;
    }
    return ans % 1000000007;
};