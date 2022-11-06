/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
	if (k === 0) return s;
    else if (k > 1) return s.split('').sort().join('');

	let result = 0, L = s.length;

	for (let i = 1; i < L; i++) {
        for (let j = 0; j < L; j++) {
			let d = s.charCodeAt((result + j) % L) - s.charCodeAt((i + j) % L);
			if (d !== 0)  {
				if (d > 0) result = i;
				break;
			}
		}
	}

	return s.slice(result) + s.slice(0, result);
};