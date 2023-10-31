/*
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Constraints:
-2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
// SAME LANG ETO SA => INTEGERISPALINDROME
// bale may constraints lang and then yugn initialX pangcheck ko lang kuing negative or positive instead na as a palindrome
var reverse = function(x) {
    let reversedNum = 0, initialX = x

    if (x < 0) x *= -1
    while(x > 0){
        reversedNum = (reversedNum * 10) + (x % 10)
        // console.log(reversedNum)
        x = Math.floor(x / 10)
        // console.log(x)
    }

    // constraints
    if (reversedNum <= (-2)**31 || reversedNum >= (2**31) - 1) return 0
    return initialX < 0 ? reversedNum * -1 : reversedNum
};


let abc = -125440

console.log(reverse(abc))