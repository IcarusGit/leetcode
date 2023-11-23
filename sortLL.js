/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // so check muna mga common sense na condition
    if (!head || !head.next) return head

    // so first naggawa muna ako ng variable na pag sstorean ni head since later ay kukunin ko lahat ng value ng head so ipopoint ko ng ipoint si head
    // which means maiiba ng value si head
    let current = head

    // then eto bale mag luloop kasi ako para kunin lahat ng value then isosort ko siya so eto muna ang magiging container nila
    let container = []

    // so eto na nga yung loop para kunin lahat ng .val
    while(head){
        container.push(head.val)
        head = head.next 
    }

    // IMPORTANT!!! bale kasi nga iniba iba ko ng value si head kanina sa while loop diba so ngayon ibabalik ko na si head sa dati niyang itsura
    // bale head = current yung piang lagyan ko sa taas kanina check mo nalang
    head = current

    // so eto na nga yun sort
    container.sort((a,b) => a - b)


    // now since naka array na yung mga values kunin ko na sila isa isa
    // NOTE: bale yung head kasi at current ay equal na sa isat isa so same na sila pag dating sa lines na to
    // NOTE: which means yung last node ay naka point parin sa null
    // IMPORTANT: ang gagawin natin ay papalitan lang naman naten ng mga value di naten ipopoint sa kung saan saan
    // that means na di na naten poproblemahin kung yung dulo ba ay nakapoint sa null OKAY?!!!
    for (const val of container){
        // SO AYUN PALITAN KO SI VALUE LANG
        current.val = val
        // THEN PUNTA NA KO SA NEXT NODE PARA PALITAN YUNG VALUE NON 
        current = current.next
    }

    // EDI SHEMPRE RETURN KO SI HEAD SINCE SI CURRENT YUNG GINAMIT KO PARA I SORT SI HEAD
    return head
};