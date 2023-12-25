/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let decoding = [
      '1',  '2',  '3',  '4',  '5',
      '6',  '7',  '8',  '9',  '10',
      '11', '12', '13', '14', '15',
      '16', '17', '18', '19', '20',
      '21', '22', '23', '24', '25',
      '26'
    ];
    
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    
    for(let i = 0; i <= s.length; i++) {
        for(let code of decoding) {
            if(s.slice(i, i + code.length) === code) {
                dp[i + code.length] += dp[i];
                //console.log(i, i + code.length, code)
            }
        }    
    }
    return dp[s.length];
};