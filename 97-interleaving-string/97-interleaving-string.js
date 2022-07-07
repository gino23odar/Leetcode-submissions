/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let n = s1.length + 2, m = s2.length + 2;
    if(m + n - 4 !== s3.length) return false;
    let dinp = new Uint8Array(m);
    dinp[1] = 1;
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            let top = dinp[j] && s1[i-2] === s3[j+i-3];
            let left = dinp[j-1] && s2[j-2] === s3[j+i-3];
            dinp[j] = top || left;
        }
    }
    return dinp[m-1];
};