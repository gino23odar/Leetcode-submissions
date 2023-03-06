/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missed = [], last;
	for(let i=1; i<arr[arr.length-1]; i++){
		if(!arr.includes(i) && missed.length <= k){
        missed.push(i)
        }
    }
    last = arr[arr.length-1]
    let rem = k-missed.length;
    while(rem > 0){
        missed.push(++last);
        rem--;
    }
    return missed[k-1]
};