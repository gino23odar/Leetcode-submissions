/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sortArray = score.slice()
    sortArray.sort((a,b) => (b-a))
    let result = []
    for(let i = 0; i < score.length; i++) {
        const j = sortArray.indexOf(score[i])
        if(j === 0){
            result.push("Gold Medal")
        } else if(j === 1) {
            result.push("Silver Medal")
        } else if(j === 2) {
            result.push("Bronze Medal")
        } else {
            result.push((j + 1).toString())
        }
    }
    return result
};