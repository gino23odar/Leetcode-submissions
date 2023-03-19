var TrieNode = function() {
    this.children = {};
    this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var current = this.root;
    
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in current.children)) {
            current.children[word[i]] = new TrieNode();
        }
        current = current.children[word[i]];
    }
    
    current.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var search = function(current, level) {
        // Cannot search for the word
        if (!current || (level === word.length && !current.isEnd)) {
            return false;
        }
        
        if (level === word.length && current.isEnd) {
            return true;
        }
        
        if (word[level] === '.') {
            for (let i = 0; i < 26; i++) {
                var ch = String.fromCharCode(97 + i);
                
                if (search(current.children[ch], level + 1)) {
                    return true;
                }
            }
            
            return false;
        }
        
        return search(current.children[word[level]], level + 1);
    };
    
    return search(this.root, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */