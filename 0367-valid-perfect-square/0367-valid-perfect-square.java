class Solution {
    public boolean isPerfectSquare(int num) {
        if(num == 1){
            return true;
        }
        
        long l = 0;
        long r = num-1;
        
        
        while(l <= r){
            long ps = l + (r-l)/2;
            long ch = ps * ps;
            
            if(ch == num){
                return true;
            } else if(ch > num){
                r = ps - 1;
            } else {
                l = ps + 1;
            }
        }
        return false;
    }
}