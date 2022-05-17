/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    
    
    function helper(image, sr, sc, newColor){
        if(image[sr][sc] == color){
            image[sr][sc] = newColor
        }
        else{
            return;
        }
        
        if (sr >= 0 && sr < image.length && sc + 1 >= 0 && sc + 1 < image[0].length && image[sr][sc + 1] == color){
            helper(image, sr, sc + 1, newColor);
            } 
        
        if (sr >= 0 && sr < image.length && sc - 1 >= 0 && sc - 1 < image[0].length && image[sr][sc - 1] == color){
            helper(image, sr, sc - 1, newColor);
        }
        
        if (sr + 1 >= 0 && sr + 1 < image.length && sc >= 0 && sc < image[0].length && image[sr + 1][sc] == color){
            helper(image, sr + 1, sc, newColor);
        }
        
        if (sr - 1 >= 0 && sr - 1 < image.length && sc >= 0 && sc < image[0].length && image[sr - 1][sc] == color){
            helper(image, sr - 1, sc, newColor);
        }
        
        return image;
    }
    
    if (color == newColor) {
        return image;
    } else {
        return helper(image, sr, sc, newColor);
    }
}  