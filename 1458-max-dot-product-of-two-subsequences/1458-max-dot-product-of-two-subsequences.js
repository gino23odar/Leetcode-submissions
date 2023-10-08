/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
        var products = new Map(), leastNeg = Number.NEGATIVE_INFINITY, allNeg = true;
        var dotproduct = function(n1,n2,i1,i2)
        {
                if((i1 >= n1.length) || (i2 >= n2.length))
                        return 0;
                if(products.has(i1+'|'+i2))
                        return products.get(i1+'|'+i2);
                
                /* Try the 3 combinations involving i1 and i2. */
                var product1 = n1[i1] * n2[i2];
                if(product1 < 0)
                {
                        if(allNeg)
                                leastNeg = Math.max(leastNeg, product1);
                        product1 = 0;
                }
                else
                        allNeg = false;
                product1 += dotproduct(n1,n2,i1+1,i2+1);
                var product2 = dotproduct(n1,n2,i1+1,i2);
                var product3 = dotproduct(n1,n2,i1,i2+1);
//                console.log(i1,i2,product1,product2,product3);

                var product = Math.max(product1, product2, product3);
                products.set(i1+'|'+i2, product);
                return product;
        }
        var dp = dotproduct(nums1,nums2,0,0);
        if(allNeg)
                dp = leastNeg;
//        console.log(dp);
//        console.log(products);
        return dp;
};