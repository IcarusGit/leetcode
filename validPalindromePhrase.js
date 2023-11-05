/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // bale una pwedeng di na ko mag declare ng variable nga e rektahin ko na yung value netong cleanString
    // una nireplace ko muna so lahat ng hindi 0-9 at a-z gagwing kong "" which is empty lang wala lang yung /gi naman nastack overflow ko lang yan
    // then nag trim din ako wala lang trip ko lang kasi para maging familiar ako sa trim
    // NOTE: pero kapg inalis yang trim() na yan gagana parin siya papasa sa lahat ng textcase since si replace hinahanap niya lahat ng hindi 0-9 at a-z
    // then shempre ginawa kong lowercase para talagang machecheck ng maayos
    let cleanString = s.replace(/[^0-9a-z]/gi, "").trim().toLowerCase()

    // eto ngayon kasi diba si cleanString base sa experience naten eh kahit nakastore na sa variable eh mababago parin si s or si string na parameter
    // so need ko ngayong i split("") siya para maging array then saka ko irereverse() since si reverse() ay para lang sa mga array
    // then shempre para ibalik sila as string edi nag join("") na ko
    let checkerString = cleanString.split("").reverse().join("")


    // so ngayon i rereturn ko nalang yung condition nila para mag output ng true or false
    return checkerString === cleanString
};

let s = "A man, a plan, a canal: Panama"

console.log(isPalindrome(s))