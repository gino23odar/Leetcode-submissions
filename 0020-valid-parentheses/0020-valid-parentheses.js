/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (inputString) {
    let brackets = {"(": ")","[": "]","{": "}"};
    let pmtr = inputString.split("");
    let closedBracket = [];
    
    for (let i = 0; i < pmtr.length; i++) {
        if (brackets[pmtr[i]]) {
            closedBracket.push(brackets[pmtr[i]]);
        } else if (pmtr[i] === closedBracket[closedBracket.length - 1]) {
            closedBracket.pop();
        } else return false
    }
  return closedBracket.length === 0;
};