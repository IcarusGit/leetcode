/*
Example 1:
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

Example 2:
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
*/

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    // bale kung ichecheck mo sa example sa taas ay parang array yung arguments
    // so gumamit ng spread operator para mapasa yun isa isa then kahit ano man yung mga yon mag rereturn lang ako ng string which is yung 
    // hello world
    // sa mga real life applications bale pwedeng salpakan to ng mga functions na trip mo
    return function(...args) {
        return ("Hello World")
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */