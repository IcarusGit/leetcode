const factorial = (number) => {
    // una icheck muna naten kung 1 or 0 pababa kasi ang 1! at 0! equal na agad siya sa 1
    // also kung recurssion need mo shempre ng condition pa i-stop yung function base sa instruction
    // kapag kasi di mo chineck bale magkakaron ka nung error na cinomment ko sa baba
    if (number <= 1) return 1

    // then na yung irereturn niya bale imumultiply ko yung number sa (number-1) pero pababa ng pababa bale 1 liner nalang siya
    // imbis na mag loop ka pa di mo na need pang mag for loop i recursive function mo nalang siya ganern
    return number * factorial(number - 1)
}
// 5 * 4 * 3 * 2 * 1

console.log(factorial(4))




/* 
The "Maximum call stack size exceeded" error occurs in JavaScript (and other programming languages) when a recursive function or a chain of function 
calls becomes too deep, and it exhausts the available call stack space.
*/