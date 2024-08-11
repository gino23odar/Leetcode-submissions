/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = [];

    operations.forEach(op => {
        if (op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (op === 'D') {
            stack.push(2 * stack[stack.length - 1]);
        } else if (op === 'C') {
            stack.pop();
        } else {
            stack.push(parseInt(op));
        }
    });

    return stack.reduce((acc, score) => acc + score, 0);
};