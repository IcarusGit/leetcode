/*
Example 1:

Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // una gumawa muna ko nung mga array para sa values and yung mismong roman numerals
    // may EXAMPLE CODE BELOW din para isang variable lang yung madeclare
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    // eto yung magiging container ng roman numerals na ma ooutput so siya yung irereturn
    let str = ''

    // so una i luloop ko muna kada values 
    // need ko kasi i substract yung mga values hanggang sa mag 0
    for (let i = 0; i < values.length; i++){
        // so sa first i ay magchcheck muna ako kung yung ininput ba na number ay > or equal sa values[i]
        // if yung 1000 which is the first index ng values for eample ay mas maliit sa num edi imiminus ko ngayon siya so 
        // num -= values[i] || then shempre need ko rin mag add ng letter kung ano man mininus ko which is yung M
        // so uulit ng uulit ng uulit mag minus ng 1000 or kung anong index man hanggat num >= values[i] 
        // so what if kunyare 4 nalang value ng num since na subtract na nga 
        // since equals sila mag miminus parin naman sicne ayun condition ko so magiging 0 na yung num at hindi na tatakbo yung while loop 
        // then matatapos nalang din agad yung for loop 
        
        while(num >= values[i]){
            console.log(`${i}: A LOOP EXECUTED HERE`)

            str += romans[i]

            console.log(`num is: ${num}`)
            console.log(`The current str is NOW: ${str}`)
            
            console.log(`I subtracted ${values[i]} to ${num}`)

            num -= values[i]
            
            console.log(`num is NOW: ${num}`)
            console.log('--------------------------')
        }
    }

    return str

    // check lahat ng naka console.log kasi ayun yung mas makakapagpagets sayo
};


intToRoman(4894)

/*
var intToRoman = function(num) {
    const romans = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

    let str = ""

    for(let i = 0; i < romans.length; i++){
        while(num >= romans[i][0]){ 
            str += romans[i][1]; num -= romans[i][0] 
        }
    }
    return str
};
*/