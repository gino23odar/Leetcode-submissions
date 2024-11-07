class Solution {
    public int characterReplacement(String s, int k) {
        int l = 0;
        int max = 0;
        int r = 0;
        
        final int aCode = Character.codePointAt("A", 0);
        final int zCode = Character.codePointAt("Z", 0);
        
        int arraySize = zCode - aCode + 1;
        int[] chars = new int[arraySize];
        java.util.Arrays.fill(chars, 0);
        
        for(; r < s.length(); r++){
            int idx = Character.codePointAt(s,r) - aCode;
            chars[idx]++;
            max = Math.max(max, chars[idx]);
            
            if(r-l+1-max > k){
                chars[Character.codePointAt(s,l) - aCode]--;
                l++;
            }
        }
        return r-l;
    }
}