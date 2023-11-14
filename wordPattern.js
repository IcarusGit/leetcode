/*
Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // shempe una split ko muna since wala naamng mga excess spaces para kung anong index nung nasa pattern same din ng index ng new array naten na si newS
    let newS = s.split(" ")
    console.log(newS)

    // shempre kapag di equal ng length si patter at ng new array S naten edi false na agad
    if (pattern.length !== newS.length) return false
    let map = {}

    for (let i in pattern){
        // kapag may pattern[i] na KEY na sa map ichecheck lang naten kung yung value ba ng key na to ay hindi equal value sa newS[i]
        // then shempre kung hindi nagtugma return false malamang
        if (pattern[i] in map){
            console.log(i)
            console.log(`${pattern[i]}: ${newS[i]}`)
            if (map[pattern[i]] !== newS[i]) return false


        } else {
            // dito naman diba dapat kapag wala pa sa object or sa map naten ang gagawin agad natin ay iassign gamit yung map[pattern[i]] = newS[i]
            // pero ichecheck din muna naten kung yung value ba ay existing na
            // kasi what if abbc ang pattern
            // then dog cat cat dog ang values
            // edi si c magiging value niya ay dog din ===> c: dog
            // edi kung a: dog so c: dog rin
            // so dahil doon ay ifafalse naten kung yung value na iaassign naten ay existing na
            if (Object.values(map).includes(newS[i])) return false


            console.log(i)
            // so eto dito yung assign na agad if yung condition sa Object.values ay hindi naman nasatisfy
            map[pattern[i]] = newS[i]            
            console.log(`${pattern[i]}: ${newS[i]}`)
        }        
    }

    return true
};

let pattern = "abbc", s = "dog dog dog dog"
// NOTE: CHECK MO RIN YUNG MGA NAKACONSOLELOG KASI HELPFUL YAN SAYO
console.log(wordPattern(pattern, s))