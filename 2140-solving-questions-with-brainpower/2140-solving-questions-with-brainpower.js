/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let totalQuestions = questions.length;
    let map = new Map();
    
    return solveOrSkip(0);
    
    function solveOrSkip(index) {
        if(map.has(index)) return map.get(index);
        
        if(index >= totalQuestions) return 0;
        
        let solve = questions[index][0] + solveOrSkip(index + questions[index][1] + 1);
        let skip = solveOrSkip(index + 1);
        let result = Math.max(solve, skip);
        
        map.set(index, result);
        
        return result;
    }
};