class Solution {
    public List<String> res = new ArrayList<>();
    public Map<Character, String> a = new HashMap<>();
    
    public List<String> letterCombinations(String digits) {
        if(digits.isEmpty()){
            return res;
        }
        
        a.put('2', "abc");
        a.put('3', "def");
        a.put('4', "ghi");
        a.put('5', "jkl");
        a.put('6', "mno");
        a.put('7', "pqrs");
        a.put('8', "tuv");
        a.put('9', "wxyz");
        
        backtrack(0, "", digits);
        return res;
    }
    
    private void backtrack(int index, String combination, String digits){
        if(index == digits.length()){
            res.add(combination);
            return;
        }
        
        String letters = a.get(digits.charAt(index));
        for(char c : letters.toCharArray()){
            backtrack(index+1, combination+c, digits);
        }
    }
}