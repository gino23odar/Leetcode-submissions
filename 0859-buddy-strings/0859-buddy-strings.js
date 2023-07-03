/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false;
    
    const freq = getFrequency(goal);
    
    if(s === goal) {
        let atLeastOne = false;
        freq.forEach(count => {
            if(count > 1) atLeastOne = true;
        });
        return atLeastOne;
    }
    
    let letterCount = s.length;
    for(const char of s) {
        if(!freq.has(char)) return false;
        const count = freq.get(char);
        if(count === 0) return false;
        freq.set(char, count - 1);
        letterCount -= 1;
    }
    
    if(letterCount !== 0) return false;
    
    let errors = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== goal[i]) {
            if(errors === 2) return false;
            errors += 1;
        }
    }
    
    return errors === 2;
};

const getFrequency = (goal) => {
    const freq = new Map();
    for(const char of goal) {
        if(!freq.has(char)) freq.set(char, 0);
        freq.set(char, freq.get(char) + 1);
    }
    
    return freq;
};