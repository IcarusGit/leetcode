/*
Example 1:
Input: num = "51230100"
Output: "512301"
Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

Example 2:
Input: num = "123"
Output: "123"
Explanation: Integer "123" has no trailing zeros, we return integer "123".
*/

/**
 * @param {string} num
 * @return {string}
 */
// MAY REGEX FUNCTION AKO SA BABA AS AN ALTERNATIVE... GINAWA KO LANG TO PARA MAGETS
var removeTrailingZeros = function(num) {
    // kinuha ko lang yung last index since dyan ko ilalagay yung pointer ko. => sa dulo 
    let i = num.length - 1
    console.log(i)
    
    // so habang 0 ang nasa mga right edi i minus minus hanggang sa maging non zero
    while(num[i] === '0'){
        i--
        console.log(i)
    }


    // after magkaroon ng non zero edi nag stop na yung loop then mag slice ngayon ako since si last parameter ng slice ay non inclusive
    // edi ang mangyayare mawawala pati yung pinakadulo kaya naman nag + 1 pa ako
    // may console log naman para malaman mo kung bakit ganoon
    return num.slice(0, i + 1)
};

let num = "51230100"

console.log(removeTrailingZeros(num))


// 0+ para makuha mga consucutive zero then pag may pumutol sa consecutive na yon then magstop na
// yung $ para magstart sa end ng string 
function removeTrailingZeros(num) {
    return num.replace(/0+$/, '');
};