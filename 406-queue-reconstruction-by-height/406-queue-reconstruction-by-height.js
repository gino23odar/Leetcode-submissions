/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((per1, per2) =>{
        if(per1[0] != per2[0]){
            return per2[0] - per1[0];
        } else {
            return per1[1] - per2[1];
        }
    })
    let ans = [];
    people.forEach(person => {
        ans.splice(person[1], 0, person);
    })
    return ans;
};