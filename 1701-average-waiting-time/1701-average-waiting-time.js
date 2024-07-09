/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let chef = customers[0][0];
    let time = 0;
    for(let i = 0; i < customers.length; i++){
        if(chef < customers[i][0]) chef = customers[i][0]
        chef += customers[i][1]
        time += chef - customers[i][0]
        // console.log(time)
    }
    return time/customers.length
};