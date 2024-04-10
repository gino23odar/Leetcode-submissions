/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => {return b - a})
    let result = []
    result.unshift( deck.shift() )
    for( let data of deck ) {
        result.unshift(result.pop())
        result.unshift( data )
    }
    return result
};