// BALE YUNG ISNTRUCTION AY PALITAN YUNG MGA INDEX NG GIVEN ARRAY INTO SET BALE UNIQUE TAS KUNG ANO MAN MANGYARE DUN SA MGA NAIWAN NA INDEXES/ELEMENT AY HAYAAN LANG


/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums){
    // check muna kung walang laman shempre then return 0
    if (nums.length === 0) return 0

    // shempre kung may laman ang unique element nandun ay 1 na agad which is yung first element or nums[0]
    let k = 1

    // mag luloop ako ngayon mula second element or nums[1] para icheck lahat ng elements
    for (let i = 1; i < nums.length; i++){
        // una kung si nums[1] ay !== or hindi equal kay nums[0] ibig sabihin ay unique siya unique si nums[1]
        // so etong condition na to ay tatakbo so ang mangyayare papalitan ko ngayon yung current index or yung 2nd element ng kung ano man yung current i
        // so if si second element for example ay 2 at si third element ay 2 rin bale walang mangyayare mag iincrement lang yung loop

        if(nums[i] !== nums[k-1]){
            nums[k] = nums[i]

            // shempre kung si current element ay !== sa last element diba napalitan na nga yung value
            // need din shempreng i iincrement si k para naman yung next na unique value ay malalagay sa next index hindi dun sa index 1 parin 
            // shempre pa add ng paadd ng paglalagyan na index
            k++
        }
    }
    // prinint ko lang yung k para makita since kapag return lang ay walang magigign output sa console
    console.log(k)
    return k
}

let numArray = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(numArray)


/*

const removeDuplicates = (nums) => {
    // same lang to sa nasa taas bale una kinuha ko muna yung mga unique values sa array
    let unique = new Set(nums)
    // then gumamit ako ng spread operator para maging array siya kasi yung new Set ay ang nirereturn niya ay object tapos ganto itsura niya: set(5) {0,1,2,3,4}
    let newArray = [...unique]
    // shempre kinuha ko yung length ng mga unique lang since yun yung need i return or iprint
    let k = newArray.length
    for (let i = 0; i < nums.length; i++){
        // dito niloop ko nalang para palitan yung mga index base dun sa nasa newArray
        nums[i] = newArray[i]
    }
    console.log(k)
    return k
}

*/