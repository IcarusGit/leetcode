/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// const groupAnagrams = (strs) => {
//     let container = {};

//     strs.forEach(word => {
//         let key = word.split("").sort().join("")

//         if (container[key]){
//             container[key].push(word)
//         } else {
//             container[key] = [word]
//         }
//     })

//     console.log(container)
//     console.log(Object.values(container))

//     return Object.values(container)

// }


/*ETO GINAMIT KO KASI MAS MABILIS YUNG RUNTIME NIYA SA LEET CODE BEAT 90%*/
function groupAnagrams(strs){
    //nag declare muna ako ng object bale ang key niya yung naalphabetical na string tas yung value ay array na anagram nung string na yun
    let container = {}
    //dito minap or nirearrange ko muna yung kada element or kada index ng strs gamit yung map function bale check nalang yung nasa bottom lines para dun sa output nung sort,split,join
    let eachKeyForContainer = strs.map(word => word.split("").sort().join("")) 

    for (let i = 0; i < strs.length; i++){
        //una chineck ko muna sa may eachKeyForContainer, kung existing na yung key na yun sa container so ipupush ko nalang yung word sa value niya shempre kasi yung value ay array
        //imbis na ang ipush ka ay yung eachKeyForContainer[i]... ANG IPUPUSH KO NGAYON AY YUNG strs[i]
        //kasi yung sa eachKey ang laman non naka alphabetical na string pang check ko lang kasi yun... so ngayon ipupush ko yung original string kaya .push(strs[i])
        if(container[eachKeyForContainer[i]]){
            container[eachKeyForContainer[i]].push(strs[i])
        } else {
            // dito naman shempre kung di pa existing yung key sa container object or tinatawag din tong yung "MAP" so ngayon gumawa ako ng key at laman niya ay array
            // yung array na yun meron na agad value sa index 0 which is yung strs[i]
            // NOTE: importante na shempre ipasok sa square brackets yung strs[i] / ipasok sa [] kasi mag eerror siya shempre kugn ang value ay string lang di mo magagawa yung .push()
            container[eachKeyForContainer[i]] = [strs[i]]
        }
    }
    // pang print lang tong mga to para makita ko yung output
    console.log(container)
    console.log(Object.values(container))
    //so eto shempre ibato ko lang yung value para mabato siya as a 2D array pero anagram
    return Object.values(container)
}

let strs = ["eat","tea","tan","ate","nat","bat"]

// groupAnagrams(strs)


let print = console.log
print("sebastian")


/*
console.log(strs.join("===")) // eat===tea===tan===ate===nat===bat
console.log(strs[0].split()) // [ 'eat' ]
console.log(strs[0].split("")) // [ 'e', 'a', 't' ]
console.log(strs[0].split("").sort()) // [ 'a', 'e', 't' ]
console.log(strs[0].split("").sort().join()) // a,e,t
console.log(strs[0].split("").sort().join("")) // aet
*/