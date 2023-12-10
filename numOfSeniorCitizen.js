/*
Example 1:
Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
Output: 2
Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

Example 2:
Input: details = ["1313579440F2036","2921522980M5644"]
Output: 0
Explanation: None of the passengers are older than 60.
*/
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    // bale dineclare ko muna na 0 yung count since kapag walang senior citizen edi di mag aadd so retain zero ang irereturn ko
    let count = 0
    // so nag loop ako sa details gamit yung for of
    for (let human of details){
        // then inislice ko yung index nung age then need na parseint para magawa ko yung operation na pangcheck if greater than 60
        // so shempre after macheck if senior edi count++
        if (parseInt(human.slice(11,13)) > 60) count++
    }
    return count
};

let details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
console.log(countSeniors(details))