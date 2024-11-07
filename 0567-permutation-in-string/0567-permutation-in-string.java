class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] count = new int[26];
        
        for(int idx = 0; idx < s1.length(); idx++){
            count[s1.charAt(idx) -97]++;
        }
        int left = 0;
        
        for(int right = 0; right < s2.length(); right++){
            count[s2.charAt(right) - 97]--;
            if(right - left + 1 > s1.length()){
                count[s2.charAt(left) - 97]++;
                left++;
            }
            if(allElementsAreZero(count)){
                return true;
            }
        }
        return false;
    }
    public static boolean allElementsAreZero(int[] array) {
        for (int e : array) {
            if (e != 0) {
                return false;
            }
        }
        return true;
    }
}