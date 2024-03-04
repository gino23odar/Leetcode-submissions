/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens = tokens.sort((a,b) => a - b);
    let plays = tokens.length;
    let score = 0;
    
    while(plays){
        if(power >= tokens[0]){
            power -= tokens.shift();
            score++;
        } else {
            if(score == 0 || plays == 1) break;
            score--;
            power += tokens.pop();
        }
        plays--
    }
    return score
};