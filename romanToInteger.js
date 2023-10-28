/*
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    let result = 0
    for (let i = 0; i < s.length; i++){
        // if (i === s.length - 1 || romans[s[i]] >= romans[s[i + 1]]){
        //     result += romans[s[i]]
        // } else {
        //     result -= romans[s[i]]
        // }


        // bale chineck ko lang kung yung current index ba mas malaki kesa sa next index or next roman numeral
        // kapag mas malaki yung next index => i miminus ko sa result or sa total yung value ng current index == yung value dun sa object na romans
        // kapag naman mas maliit yung next index => i aadd ko sa result yung current index
        // bale etong 1 liner na ternary operation na to, ang chinecheck ko lang ay kung mas malaki ba yung next index 
        // bale check mo nalang yung cinomment sa itaas kasi dun chinecheck kung yung index ay sumobra na kasi diba may i + 1 
        // so kung ang length ay 4 tapos nasa i = 4 ka na bale magiging 5 yung i + 1 and ang value non ay undefined
        // may sample ako sa baba para icheck >< ng isang number sa undefined... lagi siyang mag fafalse
        // NOTE: yung condition na i === s.length - 1 para lang macheck kung yung i ay nasa dulo lang nung array
        romans[s[i]] < romans[s[i + 1]] ? result -= romans[s[i]] : result += romans[s[i]]
    }

    return result
};

console.log(romanToInt("MCMXCIV"))

let b = [1,2,3]
console.log(b[3]) // undefined
console.log(b[0] < b[3]) // false
console.log(b[0] > b[3]) // false