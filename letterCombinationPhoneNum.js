/*
Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {  
    // kapag !digits.length mas mabilis runtime at magaan memory kesa sa !digits lang
    // i dont know why
    if (!digits.length) return []
  
    let output = []    
    const numbersMap = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    }
    
    // backtracking function recursion
    // babalikbalikan yung mga letters isa isang iaadd
    let recursion = (string, digitsIndex) => {
        // kapag equal na kasi yung length ng string na nabuo or yung combination push mo na
        // pwede rin atang icompare sa digitsIndex e di lang sa digits.length
        if(string.length === digits.length){output.push(string)}
  
        else{
            // nag loop lang ako kada number then kada letter ng number na yon pinasahan ko ng letter ng sumunod na number
            for(let letter of numbersMap[digits[digitsIndex]]){
                recursion(string + letter, digitsIndex + 1)
            }
        }
    }
  
    // ANG HIRAP I EXPLAIN NG PROBLEM NA TO TANGINA HAHAHAAHHA
    // BASTA RECURSION SIYA SO GANITO I WILL TRY

    // unang value netong inassign kong parameters empty string muna and then yung index
    // yung empty string bale mag aadd ako ng isang letter sakanya kada tawag ko sa function na to so makikita mo yun dun sa for loop sa else statement
    // bale nag loop lang ako per letter so dun ko ngayon ginamit yung 0 para makuha yung per digits na ininput
    // bale kada kumpleto or na meet na yung length na required mag pupush nalang siya sa output so no need na mag return since kapag naman na push na
    // matatapos na rin naman yung recursion or yung function since wala na ibang condition
    // bale isipin mo nalang or ivisualize mo nalang yung logic magegets mo yan 
    // bale kada loop ng letter eh nag aadd din ako sa kanya ng isa pang kada loop ng letter hanggang sa mapush sila
    recursion("", 0)
    
  
    return output
      
};
  

let digits = "23"
console.log(letterCombinations(digits))