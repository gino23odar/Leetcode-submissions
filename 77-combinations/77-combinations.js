/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n < k || k < 1) return [];
    
    var combs = [];
    helper(combs, [], 0, n, k);
    return combs;
};

const helper = (combs, temp, start, n, k) =>{
    if(k === 0){
        combs.push(Array.from(temp));
        return;
    }
    for(let i = start; i < n; i++){
        temp.push(i + 1);
        helper(combs, temp, i+1, n, k-1);
        temp.pop();
    }
};