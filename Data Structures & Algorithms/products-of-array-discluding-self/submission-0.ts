class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const multipleLeft = [1];
        const multipleRight = [];
        const output = [];

        for(let i=1;i<nums.length;i++) {
            multipleLeft[i] = multipleLeft[i - 1] * nums[i - 1];
        }

        multipleRight[nums.length - 1] = 1
        for(let i=nums.length - 2;i>=0;i--) {
            multipleRight[i] = multipleRight[i + 1] * nums[i + 1];
        }

        for(let i=0;i<nums.length;i++){
            output[i] = multipleLeft[i] * multipleRight[i];
        }

        return output;;
    }
}
