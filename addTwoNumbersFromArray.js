/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//bale hahanapin niya yung mga index ng number na need i add para makuha yung target parameter
//kapag walang nakuha bale rereturn lang ng empty array
const twoSum = function(nums, target) {
    //first create a storage to store key:value pairs
    // ang key ay yung mismong content sa array niya mismo then yung 
    // value = index
    const storage = {}

    // mag loop ako ngayon para dun sa buong array
    for (let i = 0; i < nums.length; i++){
        // first i miminus ko na agad bale --> target - firstindex
        const checkStorage = target - nums[i]

        // kapag yung mininus ko ay nasa storage irereturn ko na agad yung index na nandun sa storage pati yung current i na nasa loop
        // yung checkStorage in Storage bale chinecheck niya yung key lagi automatic na yon so
        // so if si checkStorage kunyare ay = 4 then sa storage na object merong key na 4 
        // irereturn ko nalang yung index ni 4 using yung storage[checkStorage] which is ang itsura ay yung storage[4] 
        // so ang irereturn niyan sakin ay yung value which is yung index
        //so shempre since nakuha ko naman na yung target irereturn ko nalang din sa array yung current index which is yung i
        if (checkStorage in storage){
            return [storage[checkStorage], i];
        }

        // kung yung checkStorage naman ay wala pa sa storage shempre ilalagay na muna naten siya
        // so storage[array value in the current index] = current index or yung i
        storage[nums[i]] = i
    }
    return []
};


console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))