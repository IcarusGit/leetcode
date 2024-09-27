/*
Example 1:
Input: hours = [0,1,2,3,4], target = 2
Output: 3
Explanation: The company wants each employee to work for at least 2 hours.
- Employee 0 worked for 0 hours and didn't meet the target.
- Employee 1 worked for 1 hours and didn't meet the target.
- Employee 2 worked for 2 hours and met the target.
- Employee 3 worked for 3 hours and met the target.
- Employee 4 worked for 4 hours and met the target.
There are 3 employees who met the target.

Example 2:
Input: hours = [5,1,4,2,2], target = 6
Output: 0
Explanation: The company wants each employee to work for at least 6 hours.
There are 0 employees who met the target.
*/

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    // finilter kung ilan per index yung nakahit ng target so it means either equal or greater than sa target
    return hours.filter(hour => hour >= target).length
};


// alternative
function numbersWhoMet(hours, target){
    // alternative solution lang ito so ang nangyare nag loop lang then naka if statement lang to check kung nahit ba ang target
    let met = 0

    for (let i = 0; i < hours.length; i++){
        // then shempre kapag na hit si target edi increment yung met since ayun yung tracker naten ng kung ilan naka hit
        if(hours[i] >= target) met++
    }

    return met
}