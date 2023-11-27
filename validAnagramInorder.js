/*
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false 
    let map = {}

    // so una kinuha ko muna per letter ni s then nag key and value ako so yung value ay kung ilang beses siya nag appear
    for(let letter of s){
        if(!map[letter]){
            map[letter] = 1
        } else {
           map[letter]++
        }
    }

    // then dito miminusan ko ngayon yung letter na yon
    for (let checker of t){
        if(!map[checker]){
            return false
        } 
        map[checker]--            
    }


    // so dapat kapag nag minus ako ng nagminus lahat ng value ay zero para masabi kong same number of letters
    // then nag object.values lang ako then nag every ako since dapat lahat ng value ay 0 so pag nag false ibig sabihin may isang hindi 0 
    return Object.values(map).every(length => length === 0)
};