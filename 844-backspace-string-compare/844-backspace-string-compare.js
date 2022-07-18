/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const type = s => {
    	const ans = [];
    	for(let x of s.split('')) {
        	x === '#' ? ans.pop() : ans.push(x);
    	}
    	return ans.join('');
	}
	return type(s) === type(t);
};