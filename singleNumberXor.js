/*
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let xor = 0
    // for (let i of nums){
    //     xor = xor ^ i
    // }

    // return xor


    return nums.reduce((previous,current) => { return previous ^ current })

    // kapag nag reduce() function ka di na need mag declare pa muna ng 0 dahil ang unang value niya na agad ay si first element
    // then yung current ay si current element




    // NOTE: si xor ay kapag magkaparehas na 0 or 1 mag rereturn siya ng 0
    // NOTE: a number if nag xor ka sakanya gamit 0 bale 7 ^ 0 for example === 7
    // NOTE: 3 ^ 3 === 0
    // bale kasi sa xor ginagaw niyang binary so mangyayare ay 
    // 011
    // 011   ===> SO DITO I COCOMPARE NIYA BALE
    // 000   ===> so ayan ang sagot 000 dahil nga kapag same na 0 or 1 ay equals to 0

    // SO NGAYON IMAGININE MO NALANG SA SECOND EXAMPLE:
    // 4^1^2^1^2 ===> pwede natin siyang igroup as ==> 4 ^ (2^2) ^ (1^1)
    // so magiging 4 ^ 0 ^ 0 
    // so equals to 4 siya!!!
    
};

let nums = [4,1,2,1,2]

console.log(singleNumber(nums))