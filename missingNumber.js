/*
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // FORMULA: (n * (n+1)) / 2
    let total = (nums.length * (nums.length + 1))/2
    // bale yung length kasi ng nums eh yun din yung highest number na nasa array
    // so gagawin ko ngayon ay mag loop sa buong array at iminus lahat yun kay total at shempre kung may hindi siya mag zero edi ayun yung missing

    // kumbaga kunyare si length ay 4 so ang total niya diba ay 4+3+2+1 so === 10
    // so kung ang nasa array ay si 3, 2, at 1 lang edi 10 - 1 = 9 - 2 = 7 - 3 = 4
    // so si 4 ang missing shempre

    for ( let value of nums){
        total -= value
    }

    return total


};


let nums = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber(nums))