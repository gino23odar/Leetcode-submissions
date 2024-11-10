class TrieNode{
    public boolean end;
    public Map<Character, TrieNode> children;
    
    public TrieNode() {
        this.end = false;
        this.children = new HashMap<>();
    }
}


class Trie {
    private TrieNode root;
    
    public Trie() {
        this.root = new TrieNode();    
    }
    
    public void insert(String word) {
        TrieNode cur = root;
        
        for(char c : word.toCharArray()){
            cur.children.putIfAbsent(c, new TrieNode());
            cur = cur.children.get(c);
        }
        
        cur.end = true;
    }
    
    public boolean search(String word) {
        TrieNode cur = searchPrefix(word);
        
        return cur != null && cur.end;
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    public TrieNode searchPrefix(String prefix){
        TrieNode cur = root;
        
        for (char c : prefix.toCharArray()) {
            if (!cur.children.containsKey(c)) {
                return null;
            }
            cur = cur.children.get(c);
        }
        return cur;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */