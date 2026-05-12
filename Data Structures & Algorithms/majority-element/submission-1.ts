class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        let candidate = 0;
        let count = 0;

        for(let num of nums) {
            if(count == 0) {
                candidate = num
                count = 1
            } else {
                num == candidate ? count += 1 : count -= 1
            }
        }
        return candidate
    }
}

// Time: O(n) Space: O(1)
