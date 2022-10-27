/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let len = img2.length;
    let set2 = new Set();
    for(let i = 0; i < len; i++) {
        for(let j = 0 ; j < len ; j++){
            if(img2[i][j] === 1) {
                set2.add(i * 100 + j);
            }
        }
    }
    let map = {};
    for(let i = 0; i < len; i++) {
        for(let j = 0 ; j < len ; j++){
            if(img1[i][j] === 1) {
                set2.forEach(sqr => { 
                    let o = i * 100 + j;
                    map[sqr - o] = ~~map[sqr - o] + 1;
                })
            }
        }
    }
    let res = 0;
    Object.keys(map).forEach(key => {
        res = Math.max(res, map[key]);
    })
    return res; 
};