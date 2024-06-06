/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize != 0) return false;
	let m = new Map();

	for(let i=0; i<hand.length; i++) {
		m[hand[i]] = 0;
	}

	for(let i=0; i<hand.length; i++) {
		m[hand[i]]++;
	}	

	hand.sort((a, b) => a - b);	

	for(let i=0; i<hand.length; i++) {
		
		if (m[hand[i]] > 0) {
			for(let j=0; j<groupSize; j++) {
				if (m[hand[i]+j]>0)
					m[hand[i]+j]--;
				else 
					return false;
			}
		}            
	}

	return true;
};