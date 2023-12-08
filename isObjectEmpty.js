/*
Example 1:
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.

Example 2:
Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.

Example 3:
Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
*/

// ETO YUNG FASTEST HALOS NA NAKUHA KO SA LEETCODE SA MEMORY AT SPEED KEME
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // so una nag eearly exit ako sa mga edge cases bale pampabilis kasi to ng runtime e
    // so kung null edi shempre empty siya so return true na base sa conditions
    // bae and object at ang array kasi kapag nag typeof kasa kanya laging object yun since si array kasi parang secret key niya ay nag uumpisa sa 0
    if (typeof obj !== 'object' || obj === null) {
      return true;
    }
  
    // since nag eexit na ako kung di siya object bale matik na pag napunta dito ay either object siya or array
    // so kung hindi siya array kukunin ko lang lahat ng keys then bibilangin ko yung length since if 0 eh dun mo malalaman kung empty
    if (!Array.isArray(obj)) {
      return Object.keys(obj).length === 0;
    }
  
    // so eto otherwise, edi matik array na siya then ayun check nalang din
    return obj.length === 0;
};

// eto yung more detailed nung nasa taas bale i mean more specific para mas magets mo
var isEmpty = function(obj) {
    if (typeof(obj) === 'object' && !Array.isArray(obj)){
        return Object.keys(obj).length === 0
    }
    
    if (Array.isArray(obj)){
        return obj.length === 0
    }

    return false
};


// alternative
const emptyChecker = (obj) => {
    for (const i in obj) return false
    return false

    // If array/object is not empty, interpreter will enter the for loop so it will return false
    // If array/object is empty, interpreter won't enter for-in loop so mag rereturn true
}