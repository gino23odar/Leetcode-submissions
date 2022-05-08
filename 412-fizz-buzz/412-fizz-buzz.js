/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({length: n}, (x,i) => {
        i = i + 1;
        if(i % 15 === 0 ) return "FizzBuzz";
        if(i % 5 === 0) return "Buzz";
        if(i % 3 === 0) return "Fizz";
        return (i) + "";
    })
};