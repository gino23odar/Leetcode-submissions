/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let pen = 0;

    for (let i = 0; i < customers.length; i += 1) {
        const customer = customers.charAt(i) === "Y";
        if (!customer) {
            pen += 1;
        }
    }
    
    let minPen = pen;
    let minH = customers.length;
    
    for (let i = customers.length - 1; i >= 0; i -= 1) {
        const customer = customers.charAt(i) === "Y";

        if (customer) {
            pen += 1;
        } else {
            pen -= 1;
        }

        if (pen <= minPen) {
            minPen = pen;
            minH = i;
        }
    }
    return minH;
};