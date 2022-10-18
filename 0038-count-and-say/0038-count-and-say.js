/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let cur = "1";
    for (let i = 1; i < n; ++i) {
        let tmp = "", ptr = 0, lastChar = cur[0], count = 0;
        while (ptr < cur.length) {
            if (lastChar !== cur[ptr]) {
                tmp += count + lastChar;
                lastChar = cur[ptr];
                count = 0;
            }
            ptr += 1;
            count += 1;
        }
        tmp += count + lastChar;
        cur = tmp;
    }
    
    return cur;
};