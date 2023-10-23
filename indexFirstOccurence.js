/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    let isIncluded = haystack.indexOf(needle) 
    return isIncluded
};

console.log(strStr("codeleet", "leet"))