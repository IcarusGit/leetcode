/*
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    // this is possible pero pwede ring isalpak nalang yugn /\s+/ sa mismong split
    // kapag kasi sa replace function need pa ng g para global
    // global means para ma replace lahat ng occurence since kapag walang g edi yung first occurrence lang papalitan
    
    // return s.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ")


    // ONE LINER BUT FEWER!!!
    return s.trim().split(/\s+/).reverse().join(" ")    
};

let s = "a good   example"

console.log(reverseWords(s))