/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let res = 0
    people.sort((a, b) => b - a)
    let len = people.length
    let i = 0;
    let j = len;
    for(; i < j;i++) { 
        if (limit >= people[i] + people[j - 1]) {
            j--
        }
    }
    return i
};