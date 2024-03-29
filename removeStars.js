/*
Example 1:
Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:
Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
*/
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let container = []
    for (let i = 0; i < s.length; i++){
        // kapag yung container walang laman pa so faulty value pa siya and * yung current index edi mag mag push muna 
        // kapag naman nasatisfy yung true condition edi mag popop since ayun yung napansin kong logic sa example so kapag may * mag popop yung katabi niya
        s[i] === "*" && container ? container.pop() : container.push(s[i])
    }

    return container.join('')
};

let s = "erase*****"

console.log(removeStars(s))