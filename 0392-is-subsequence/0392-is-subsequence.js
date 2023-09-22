/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
    let j = 0;
    let i = 0;
    const s_list = s.split('');
    const t_list = t.split('');
    let isSub = [];
    while(i < t.length) {
        if (j >= s.length) break;
        let item = s[j];
        if (item === t_list[i]) {
            isSub.push(1);
            j++;
        }
        i++;
    }
    return isSub.length === s.length;
};