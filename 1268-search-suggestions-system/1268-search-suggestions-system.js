/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    let list = [], len = searchWord.length;
    products.sort();
    for(let i = 0; i < len; i++){
        let suggestions = [];
        for(let j = 0; j < products.length; j++){
            if(i < products[j].length && (products[j].substring(0, i+1) === searchWord.substring(0, i+1)) && suggestions.length < 3){
                suggestions.push(products[j]);
            }
        }
        list.push(suggestions);
    }
    return list;
};