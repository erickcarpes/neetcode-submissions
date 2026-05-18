class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        
        let i = 1;
        let max = 0;
        for(let num of set) {
            if(!set.has(num-1)) {
                
                while(set.has(num+i)) {
                    i++;
                }
                if(i > max) {
                    max = i;
                }
            }
            i = 1;
        }
        return max;
    }
}
