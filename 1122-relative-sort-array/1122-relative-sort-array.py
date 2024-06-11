class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        m = {}
        for i,x in enumerate(arr2):
            m[x] = i
        for num in arr1:
            if num not in m:
                m[num] = num + 1000
        sorted_arr = sorted(arr1, key=lambda x: m[x])
        return sorted_arr