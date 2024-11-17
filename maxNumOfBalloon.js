/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1
Example 2:

Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
*/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const charCount = new Array(26).fill(0);

    for (let i = 0; i < text.length; i++) {
        charCount[text.charCodeAt(i) - 97]++;
    }

    let min = charCount[1]; // 'b'
    min = Math.min(min, charCount[0]); // 'a'
    min = Math.min(min, Math.floor(charCount[11] / 2)); // 'l' (needs to be 2 so divide by 2)
    min = Math.min(min, Math.floor(charCount[14] / 2)); // 'o' (needs to be 2 so divide by 2)
    min = Math.min(min, charCount[13]); // 'n'

    return min;
};