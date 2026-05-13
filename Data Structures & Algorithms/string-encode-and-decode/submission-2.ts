class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = ""
        for(const str of strs) {
            result += str.length + '#' + str
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []
        let i = 0;
        console.log("string", str)
        while(i<str.length) {
            let size: string = "";
            while(str[i] !== '#') {
                console.log(str[i], i)
                size += str[i];
                i++;
            }
            i++;
            console.log("size", size)
            const word = str.slice(i, i + Number(size));
            console.log("word", word)
            result.push(word);
            i += Number(size);
            console.log("i", i)
        }

        return result;
    }
}
