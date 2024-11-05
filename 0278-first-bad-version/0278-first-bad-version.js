/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 0;
        let r = n;
        
        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            let test = isBadVersion(mid);
            let prev = isBadVersion(mid-1);
            // console.log(prev);
            // console.log(mid);
            if(test && prev == false){
                return mid;
            } else if(!test){
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        // console.log('def');
        return r;
    };
};