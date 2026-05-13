class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()

        for(let i=0;i<nums.length;i++) {
            if(!map.has(nums[i])) map.set(nums[i], 0);
            map.set(nums[i], map.get(nums[i]) + 1)
        }

        const bucket = Array(nums.length + 1).fill(null).map(() => []);

        for(let [num, freq] of map.entries()) {
            bucket[freq].push(num);
        }
        
        const output = []

        for(let i=bucket.length-1;i>=0;i--){
            if(bucket[i].length > 0) {
                for(const num of bucket[i]){
                    output.push(num);
                    if(output.length == k) return output;
                }
            }
        }
    }
}
