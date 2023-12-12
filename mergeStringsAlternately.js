/*
Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = ""
    // kinuha ko muna yung pinaka mataas na length
    const length = word1.length > word2.length ? word1.length : word2.length

    // ngayon mag luloop ako base dun sa lengths na yun lang 
    for (let i = 0; i < length; i++){
        // so paano kung yung isang parameter mas mahikli kesa dun sa isa edi nag OR (||) para maglagay lang siya ng empty string
        merged += (word1[i] || "") + (word2[i] || "")
    }

    return merged
};

let word1 = "abc", word2 = "pqr"

console.log(mergeAlternately(word1, word2))


// console.log(word1.slice(1)) // bc


// ANOTHER METHOD LANG ITO GAMIT YUNG SLICE FUNCTION
const alternativeFunc = (word1, word2) => {
    let merged = ""
    i = 0
    while (i < word1.length && i < word2.length){
        merged += word1[i]
        merged += word2[i]

        i++
    }

    if (word1.length > i){
        merged += word1.slice(i)
    }

    if (word2.length > i){
        merged += word2.slice(i)
    }

    return merged
}
