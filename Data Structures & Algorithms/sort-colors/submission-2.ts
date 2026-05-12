class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let left = 0;
        let mid = 0;
        let right = nums.length - 1;

        while(mid <= right) {
            if(nums[mid] == 1) {
                mid++;
            } else if (nums[mid] == 0) {
                const temp = nums[left];
                nums[left] = nums[mid];
                nums[mid] = temp;

                left++;
                mid++;
            } else {
                const temp = nums[right];
                nums[right] = nums[mid];
                nums[mid] = temp;

                right--;
            }
        }
    }
}
