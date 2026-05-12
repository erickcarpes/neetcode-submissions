class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const base = strs[0];
        let max = base.length;

        for(let str of strs.slice(1, strs.length)){
            for(let i=0;i<base.length;i++){
                if(base[i] !== str[i]) {
                    if(max > i){
                        max = i;
                    }
                    break;
                }
            }
        }

        return base.slice(0, max);
    }
}
