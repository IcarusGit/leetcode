/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //first chineck muna kung ang length ay nothing so return empty
    if (strs.length === 0 || !strs) return "I entered an empty parameter"
    //dito kinuha ko yung first string sa array para sakanya ko icocompare lahat ng remaning index
    let commonPrefix = strs[0]
    //mag luloop ako simula index 1 hanggang strs.length bale simula 2nd string hanggang dulo
    for (let i = 1; i< strs.length; i++){
        //ngayon ichecheck ko muna si 2nd string which is strs[i] since nakalagay saken na let i = 1
        //kapag si strs[i] hindi equal or hindi sila same ni commonPrefix mag rereturn siya ng negative 1
        //so kung negative 1 siya di sila equal... tatanggalin ko ngayon si last letter then uulit ulit sa pag check 
        //bale tanggal ng tanggal sa last letter lang hanggat mag equal sila
        //kapag nag equal na ay mag rereturn na siya ng 0 so after non ay next index naman na so same process lang
        //sa kahit anong index kapag may word na walang katugma so mag tatanggal ng lahat ng letter so mag rereturn siya ng empty string parin
        while (strs[i].indexOf(commonPrefix) !== 0 ){
            commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1)
        }

        if (commonPrefix === "") return ""
    }

    return commonPrefix
};

// let strs = ["dog","racecar","car"]
let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))