/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let one = s.split('').sort().join('');
    let two = t.split('').sort().join('');
    
    return one == two
};