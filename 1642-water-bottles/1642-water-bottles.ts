function numWaterBottles(numBottles: number, numExchange: number): number {
    let max = numBottles;

    while(numBottles >= numExchange){
        let refills = Math.floor(numBottles/numExchange);
        let rem = numBottles % numExchange;
        max += refills;
        numBottles = refills+rem;
    }

    return max;
};