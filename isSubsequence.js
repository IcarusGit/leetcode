/*
Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // bale need ko ilagay sa variable si length si tatawag tawagin ko siya...
    // kapag kasi ata ganun gawa siya ng gawa ng variable so yung memory niya madami kaya 5% lang nakukuhang result
    let sLength = s.length

    // kapag walang laman si s or s === "" edi return true
    if (!s) return true
    // edge case lang din to shempre common na yan isipin mo nalang kung bakit
    if (sLength > t.length) return false

    let sPointer = 0

    for (let i = 0; i < t.length; i++){
        // kapag nag same yung dalawang letter na tinuturo nung dalawang pointer edi yung index ay iincrement naten
        if (t[i] === s[sPointer]) sPointer++;
        // bale eto naman kapag same na yung spointer at length edi return true
        if (sLength === sPointer) return true
    }

    // bale dito pwede sanang di na ko mag return true sa may for loop pwedeng diretsuhin ko na na 
    // return sPointer === sLength
    // kaso nalaman ko na pag iniistop pala yung program ora mismo edi less runtime din yun pak ganern
    return false 
};

let  s = "abc", t = "ahbgdc"

console.log(isSubsequence(s, t))