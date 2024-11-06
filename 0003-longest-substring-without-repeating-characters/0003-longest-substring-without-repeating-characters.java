class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        
        int maxL = 0;
        int start = 0;
        
        for(int end = 0; end < s.length(); end++){
            char c = s.charAt(end);
            if(map.get(c) != null && map.get(c) >= start){
                start = map.get(c) + 1;
            }
            
            map.put(c,end);
            maxL = Math.max(maxL, end-start+1);
        }
        return maxL;
    }
}