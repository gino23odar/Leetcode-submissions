/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let ext = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if(ext == 1) {
            let sum = digits[i] + 1;
            if(sum >= 10) {
                digits[i] = sum - 10;

                if (i == 0){
                    digits.unshift(1); 
                } else {
                    ext = 1;
                }
            } else {
                digits[i] = sum;
                break;
            }
        }
    }
    return digits;
};