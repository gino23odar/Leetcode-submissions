class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        final Map<Character, Character> matchingBrackets = Map.of(
            ')', '(',
            ']', '[',
            '}', '{'
        );
        
        for(char c : s.toCharArray()){
            if (c == '(' || c == '[' || c == '{') {
                stack.add(c);
            } else if(stack.size() == 0 || stack.pop() != matchingBrackets.get(c)) {
                    return false;
            }
        }
        return stack.size() == 0;
    }
}