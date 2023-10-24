/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    // yung indexOf kasi ibabalik niya yung index nung firstletter ng needle if lang ha
    // IF yung buong word ng needle at nasa haystack
    let isIncluded = haystack.indexOf(needle) 
    // so eto irereturn lang niya yungindex ng first letter if existing pero kapag wala naman ay -1 lang irereturn
    return isIncluded
};

console.log(strStr("codeleet", "leet"))