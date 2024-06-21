/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let max = 0;
    let issues = [];
    let freebies = 0;
    
    // check which minutes truly count when using its secret technique
    for(let i = 0; i < grumpy.length; i++){
        issues.push(customers[i]*grumpy[i])
        if(grumpy[i] == 0) freebies += customers[i]
    }
    // console.log(issues)
    // start max with the first window
    for(let i = 0; i < minutes; i++){
        max += issues[i]
    }
    // console.log(max)
    let newMax = max
    // use a window to check when it is better to use the secret technique
    for(let i = 0; (i+minutes) < issues.length; i++){
        newMax = newMax - issues[i] + issues[i+minutes];
        if(newMax > max) max = newMax
    }
    return max + freebies
};