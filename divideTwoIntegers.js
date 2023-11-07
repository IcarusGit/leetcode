/*
Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // alam mo naman kung ano yung quotient eh diba
    let quotient = dividend / divisor
    // etong dalawang to nasa constraints siya
    if(quotient > (2**31) - 1) return 2**31 - 1 
    if(quotient < (-2)**31) return (-2)**31 

    // bale yung Math.trunc() ibabalik niya yung pinaka whole number pero unlike dun sa mga math.floor at math.ceil
    // if negative ang integer ibabalik niya parin as negative so no need to check na
    return Math.trunc(quotient)
    
};

let dividend = 7, divisor = -3

console.log(divide(dividend, divisor))