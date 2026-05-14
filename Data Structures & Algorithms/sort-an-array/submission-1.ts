class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        if(nums.length <= 1) {
            return nums;
        }

        const left = this.sortArray(nums.slice(0, nums.length / 2))
        const right = this.sortArray(nums.slice(nums.length / 2))

        let l = 0;
        let r = 0;
        const output = [];

        while(l < left.length && r < right.length) {
            if(left[l] < right[r]) {
                output.push(left[l])
                l++;
            } else {
                output.push(right[r]);
                r++;
            }
        }

        while(l < left.length) {
            output.push(left[l])
            l++;
        }

        while(r < right.length) {
            output.push(right[r])
            r++;
        }

        return output;
    }
}
