class Solution {
    private long computeTime(int[] piles, int k) {
        long res = 0;
        for(int pile : piles) 
            res += ((pile + k - 1) / k);
        return res;
    }

    private int bs(int[] piles, int left, int right, int h) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (computeTime(piles, mid) <= h) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int maxim = 0;
        for(int pile : piles) maxim = Math.max(pile, maxim);

        return bs(piles, 1, maxim, h);
    }
}