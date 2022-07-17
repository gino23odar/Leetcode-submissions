/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let map = {};
    let cows = 0, bulls = 0;
    
    for(let i = 0; i < secret.length; i++){
        if(secret[i] === guess[i]){
            bulls++;
        } else if(map[secret[i]]){
            map[secret[i]]++;
        } else {
            map[secret[i]] = 1;
        }
    }
    for(let j = 0; j < guess.length; j++){
        if(guess[j] !== secret[j] && map[guess[j]]){
            cows++;
            map[guess[j]]--;
        }
    }
    return bulls + 'A' + cows + 'B';
};