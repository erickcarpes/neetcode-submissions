class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while(left < right) {
            if(target > numbers[right] + numbers[left]) {
                left++;
                continue;
            } else if (target < numbers[right] + numbers[left]) {
                right--;
                continue;
            }
            return [left + 1, right + 1];
        }
    }
}
