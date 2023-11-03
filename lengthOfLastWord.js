/*
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // yung parameters ng replace ichatgpt mo nalang yung ginagawa niya pag nalimutan mo kasi mahaba explanation
    // bale yung sa replace kasi ichecheck niya lahat ng mga spaces or consecutive na spaces or kahit tab man yan
    // after non palitan niya yon ng second parameter so yung akin ginawa kong ' ' so isang space lang ang ginawa ko
    // so shempre kung may space sa beginning and sa end gagamitan ko ngayon siya ng trim() since yung function ng trim ay to remove spaces
    // sa beginning and ending ng mga string
    // bale check mo nalang yung console.log ko sa baba para malaman yung mga examples
    let newArr = s.replace(/\s+/g, " ").trim().split(" ")

    return newArr[newArr.length - 1].length
    // NOTE: kapag .split("") ang ginamit mo bale hahatiin niya per letter at per space i console.log mo nalang para maniwala ka
    // NOTE: kapag naman .split(" ") so hahatiin niya kada isang space so mahahati na ngayon siya per word



    //IMPORTANT/BETTER/  ONE LINER!!
    return s.trim().split(' ').at(-1).length
    // bale dito trinim ko lang yung mga spaces sa dulo then since kukunin ko lang naman yung length ng nasa last word so wala na tayong pake sa
    // sa mga spaces sa gitna o kung ano man yan
    // then yung at(-1) ayan yung para makuha yung last index ng array since diba kapag nag .split() tayo anf result niyan ay array then 
    // sa dulo nag .length lang ako para makuha shempre yung length
    
};
let  s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))


// let a = "          sebastian       Icarus Joson  "
// console.log(a.replace(/\s+/g, ""))// sebastianIcarusJoson
// console.log(a.replace(/\s+/g, "===")) // ===sebastian===Icarus===Joson===
// NOTE: trim removes only the begining and end spaces
// console.log(a.trim()) // "sebastian       Icarus Joson"

// let b = "Sebastian Icarus C. Joson"
// console.log(b.split(" "))
