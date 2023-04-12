/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let paths = path.split('/');
    let arr = [];
    for (let p of paths) {
        if (p === '..') {
            arr.pop();
        } else if(p !== '.' && p.length > 0) {
            arr.push(p);
        }
    }
    return '/' + arr.join('/');
};