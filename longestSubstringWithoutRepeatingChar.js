/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // bale gagamit tayo ng left and right pointer
    let left = 0;
    // silongest yung magiging tracker ko ng length ng pinakamahaba
    let longest = 0;

    // so now gagamit ako ng set()..... PERO BAKIT new Set() ang ginamit ko instead nung normal na map lang like let mySet = {}
    // bale kasi kapag yung normal na object lang agad ay di ako makakagamit nung .add() at .has() na function
    // pero kaya naman sa normal set bale pag .add edi mySet.push kaso nga shempre ichecheck ko pa kung may duplicate e
    // then sa .has() naman edi possible yung every or kahit anong function na may contains keme keme
    let mySet = new Set();

    // mySet.add()
    // mySet.has()
    for (let i = 0; i < s.length; i++){
        // so now kada index ichecheck ko kung nasa set ko na siya so kung nasa set ko na siya ang gagawin ko ay idedelete ko yung pinopoint ni left pointer
        // so bakit, kasi nga longest na walang repeating so kung nag repeat edi idedelete ko from the left muna
        // di ko pwedeng idelete lang yung kaparehas niya, dapat ang idelete ko from the left since need matanggal yun
        // so now kung kunyare abcdc, so nakay C na dulo kunyare yung right pointer so sa while loop as long as existing yung C sa set eh idedelete ko si left
        // so ang mangyayare ngayon dyan ang maiiwan lang sa set ay si D since nasa pangatlo pa yung c na nagarepeat
        while (mySet.has(s[i])){
            mySet.delete(s[left]);
            // then shempre move ko na nga si left pointer since nag delete nga tayo so shempre need magmove for the next index 
            left++;
        }

        // so ngayon since sa while kinuha na agad naten yung condition if nasa set ba siya edi now shempre lagi natin ilalagay sa set kung wala pa naman siya don
        // pero kasi diba kung nasa set na siya... kapag nasa set na siya edi idedelete nga naten diba so ang mangyayare e kapag na delete na yung current char na nag repeat
        // shempre yung pinopoint ni right ay ibabalik ulit naten so kanina si C diba yung need alisin
        // nung naiwan si D nalang bale eto na yung next, ipapasok na ulit natin si C
        mySet.add(s[i]);


        // then eto tamang compare nalang ulit para sa longest 
        // bale ayun din kinagandahan kay Set(), meron siyang .size()
        longest = Math.max(longest, mySet.size);
    }

    return longest;
};

// let s = "abcabcbb";
// let s = "bbbbb";
let s = "pwwkew";

console.log(lengthOfLongestSubstring(s));