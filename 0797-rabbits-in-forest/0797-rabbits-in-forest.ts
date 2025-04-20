function numRabbits(answers: number[]): number {
    let map = {};
    let ans = 0;
    for(let i = 0; i < answers.length; i++) {
        let n = answers[i];
        if(!map.hasOwnProperty(n) || map[n] == 0) {
            ans += n + 1;
            map[n] = n;
        } else {
            map[n] -= 1;
        }
    }
    return ans;
};