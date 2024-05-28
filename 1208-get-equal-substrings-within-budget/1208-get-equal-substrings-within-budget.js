/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let i=0
    let j=0
    let res = 0

    for(i=0;i<s.length;i++){
        let cost = Math.abs(s.charCodeAt(i) - t.charCodeAt(i))
        maxCost-=cost

        while(maxCost < 0){
            let cost = Math.abs(s.charCodeAt(j) - t.charCodeAt(j))
            maxCost+=cost
            j++
        }
        res = Math.max(res, i-j+1)
    }
    return res
};