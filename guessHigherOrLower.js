/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:
Input: n = 10, pick = 6
Output: 6

Example 2:
Input: n = 1, pick = 1
Output: 1

Example 3:
Input: n = 2, pick = 1
Output: 1
*/
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    // so need ko mag recursion and eto yung function na yon
    // bale si left and right ay parang start and end lang din so binary search to
    const findAnswer = (left, right) => {
        // shempre kukunin si middle then ipapasa ko siya dun sa built in na guess function na ang binabalik ay -1, 1 at 0
        let mid = Math.floor((left + right)/2)

        // ngayon after kong kunin yung result na galing sa guess function eh shempre kapag tumama ng hula edi return ko yung mid return ko na agad
        if (guess(mid) === 0) return mid

        // kapag naman 1 since meaning neto ay yung guess ay lower
        // edi kung lower si mid punta tayo sa right side so mid + 1 then ipasa ko lang si right which is si n yan sa unang value
        if (guess(mid) === 1) return findAnswer(mid + 1, right)

        // kapag naman -1 ibig sabihin higher so si left naman na parameter ang mareretain then si mid shempre since binary search ay minus 1
        if (guess(mid) === -1) return findAnswer(left,  mid - 1)
    }
    
    return findAnswer(1,n)
};