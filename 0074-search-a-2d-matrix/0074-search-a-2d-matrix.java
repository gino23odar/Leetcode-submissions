class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int row = matrix.length;
        int col = matrix[0].length;
        int l = 0;
        int r = row*col - 1;
        
        while(l <= r){
            int mid = l + (r-l)/2;
            int rowVal = mid/col;
            int colVal = mid%col;
            
            if(matrix[rowVal][colVal] == target){
                return true;
            } else if (matrix[rowVal][colVal] > target){
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;
    }
}