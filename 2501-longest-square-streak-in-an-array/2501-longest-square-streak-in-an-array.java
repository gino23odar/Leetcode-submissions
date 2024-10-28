import java.util.*;

class Solution {
    public int longestSquareStreak(int[] nums) {
        int maxLen = 0;

        Set<Integer> set = new HashSet<>();
        for (int n : nums) {
            set.add(n);
        }

        Set<Integer> visited = new HashSet<>();
        
        for (int n : nums) {
            if (visited.contains(n)) continue;
            int len = 1;
            int current = n;

            while (current > 0 && current <= Math.sqrt(Integer.MAX_VALUE) && set.contains(current * current)) {
                visited.add(current);
                current *= current;
                len++;
            }
            maxLen = Math.max(maxLen, len);
        }

        return maxLen > 1? maxLen : -1;
    }
}