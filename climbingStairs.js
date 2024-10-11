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


    /* 
    so ngayon pwede dito si alternative sa baba or eto:
    // so dito bale imagine ang array ay [1,1,2,3,5,8]
    
    let indexZero = 1
    let indexOne = 1

    for (let i = 2; i <=n; i++){
        [indexZero, indexOne] = [indexOne, indexOne + indexZero]
    }
    return indexOne;

    */
};

let n = 5

console.log(climbStairs(n))



// =============================================================================================================================
// POSSIBLE SOLUTION RIN TO BALE diba kung ano ang n bale aalamin yung steps nun pero magandang diskarte ay mag umpisa sa n or sa dulo diba since
// ang answer ay n-1 plus n-2
// so eto siya
// NOTE: SO ETONG ALTERNATIVE NA TO AY INIISA ISA NIYA TALAGA FROM THE START INA ADD ADD LANG 
// BALE ANG NANGYARE DITO SA ALTERNATIVE EH NAG ARRAY PA KO SO INISTORE KO ISA ISA UNLIKE SA TAAS NA NAG PAPALITAN LANG NG VALUE LIKE NAG SWITCH LANG

// let alt = (n) => {
//     let arr = []
//     // arr[1] = 1
//     // arr[2] = 2
//     let one = 1
//     let two = 2

//     for (let i = 3; i <=n; i++){
//         // arr[i] = arr[i-1] + arr[i-2];
//         [one, two] = [two, two + one]
//     }

//     // return arr[n];
//     return two;
// }
// 
// console.log(alt(n))