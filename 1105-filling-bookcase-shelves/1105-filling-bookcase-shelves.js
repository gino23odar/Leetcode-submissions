/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let dp = new Array(books.length).fill(0)
    dp[0] = 0
    dp[1] = books[0][1]
    
    for(let i = 2; i <= books.length; i++){
        let rem = shelfWidth - books[i-1][0]
        let max_h = books[i-1][1]
        dp[i] = books[i-1][1] + dp[i-1]
        
        let j = i - 1
        while(j > 0 && (rem - books[j-1][0]) >= 0){
            max_h = Math.max(max_h, books[j-1][1])
            rem -= books[j-1][0]
            dp[i] = Math.min(dp[i], max_h + dp[j-1])
            j -= 1
        }
    }
    return dp[books.length]
};