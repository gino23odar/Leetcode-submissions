/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let st = 0, end = letters.length - 1;
    if(letters[end] < target) return letters[0];
    if(letters[st] > target) return letters[0];
    while(st <= end){
        let mid = Math.trunc((st + end) / 2);
        if(letters[mid] <= target){
            st = mid + 1
        } else {
            end = mid - 1
        }
    }
    if(st > letters.length - 1){
        return letters[0]
    }

    return letters[st]
};
