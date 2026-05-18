class Solution {
    private isAlphanumeric(char: string): boolean {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || // Números: 0-9
               (code >= 65 && code <= 90) || // Letras maiúsculas: A-Z
               (code >= 97 && code <= 122);  // Letras minúsculas: a-z
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1

        while(left < right){
            while(left < right && !this.isAlphanumeric(s[left])) {
                left++
                continue;
            }
            while(left < right && !this.isAlphanumeric(s[right])) {
                right--;
                continue;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
