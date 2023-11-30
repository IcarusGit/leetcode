/*
Example 1
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1
    let two = 1
    // let holder

    // bale kasi nagstart muna ko sa tuktok instead dun sa pinaka babang step
    // so ngayon ang 9 ko ay si n - 1
    // bale dapat diba minus 2 since given na yung one and two variable ko
    // bale kaya -1 kasi sa for loop condition ko ay i > 0 naman so hanggang 1 lang siya bale nabawasan na rin nung isa pang iteration so parang n-2 lang din
    for(let i = n - 1; i > 0; i--){
        // holder = one
        // one = one + two
        // two = holder

        [one, two] = [one + two, one]
    }

    // etong si one and dulong one ay equals to index 0
    return one
    
};

let n = 5

console.log(climbStairs(n))