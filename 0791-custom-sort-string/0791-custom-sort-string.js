/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let answer = ""
    let res = ""
    let freq = {}
    
    s.split("").forEach((char, index) => {
        if (!(char in freq)) freq[char] = 0
        freq[char]++
    })
    
    order.split("").forEach((char, index) => {
        if (char in freq) { 
            for(let x = 0; x < freq[char]; x++) {
                answer += char
            }
            delete freq[char]
        }
    })
    
    freq = Object.entries(freq)
    
    freq.forEach(e => {
       for(let x = 0; x < e[1]; x++) {
            answer += e[0]
        } 
    })
    return answer
};