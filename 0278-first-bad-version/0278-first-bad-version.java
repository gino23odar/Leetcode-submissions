/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int minB = n;
        int l = 0;
        int r = n;
        
        while(l <= r){
            int mid = l + (r-l)/2;
            if(isBadVersion(mid)){
                minB = Math.min(mid, minB);
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return minB;
    }
}