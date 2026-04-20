class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        count = {}

        for num in nums:
            count[num] = 1 + count.get(num, 0)

        sCount = sorted(count.items(), key=lambda x: x[1], reverse=True)

        res = []
        i = 0
        while i < k:
            res.append(sCount[i][0])
            i += 1

        return res

        