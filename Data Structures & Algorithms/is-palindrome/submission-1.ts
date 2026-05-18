class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, '');
        for(let i=0;i<s.length / 2;i++) {
            if(s[i].toLowerCase() !== s[s.length-1-i].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}
