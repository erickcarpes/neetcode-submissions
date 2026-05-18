class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        const colArray = Array.from({ length: 9}, () => new Set());
        const boxArray = Array.from({ length: 3}, () => Array.from({ length: 3}, () => new Set()))
        console.log(boxArray)

        for(let l=0;l<board.length;l++){
            const lineSet = new Set()

            for(let c=0;c<board[l].length;c++){
                const char = board[l][c];
                if(char === '.') {
                    continue;
                }

                let boxRow = Math.floor(l / 3)
                let boxCol = Math.floor(c / 3)

                if(lineSet.has(char)) return false;
                if(colArray[c].has(char)) return false;
                if(boxArray[boxRow][boxCol].has(char)) return false;

                lineSet.add(char);
                colArray[c].add(char)
                boxArray[boxRow][boxCol].add(char);
            }
        }
        return true;
    }   
}
