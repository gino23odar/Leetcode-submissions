class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        xor = 0
        # get the xor of the 2 unique values
        for num in nums:
            xor ^= num
        
        # find the one differentiating bit => first '1' from the right
        # finding this bit in the xor will guarantee that it only exits in one
        # of the 2 unique values
        diff = 1
        while (diff & xor) == 0:
            diff <<= 1;
        
        # use the differentiating bit to split the values into 2 groups
        # each unique value will be the xor of each group
        a,b = 0,0
        for num in nums:
            if (num & diff) == 0:
                a ^= num
            else:
                b ^= num
        return [a,b]