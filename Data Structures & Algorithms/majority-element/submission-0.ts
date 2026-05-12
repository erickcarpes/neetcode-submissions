class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const map = new Map<number, number>()

        for(let num of nums){
            if(map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        let max = 0;
        let output = 0;
        for(let [num, freq] of map) {
            if(freq > max) {
                output = num;
                max = freq;
            }
        }
        return output;
    }
}

// Time: O(n) Space: O(m)
