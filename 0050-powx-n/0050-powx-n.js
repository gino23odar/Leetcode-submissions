/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const helper = (x,n)=>{
        if(n === 0) return 1
		if(x === 0) return 0
		const mid = helper(x, Math.floor(n/2))

		if(n % 2 === 1){
			return mid * mid * x
		}else{
			return mid * mid
		}
    }
	let res = helper(x,Math.abs(n))
	return res = n >= 0 ? res : 1/res
};