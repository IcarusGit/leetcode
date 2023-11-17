class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insertFirst ==> unshift()
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }

    // insertLast ==> push()
    insertLast(data){
        let node = new Node(data)
        // if the head is empty then just do a code similar to insert first
        if (!this.head){
            this.head = node
        } else {
            let current = this.head

            // could also be ===> while(current.next)
            while (current.next !== null){
                current = current.next
            }

            current.next = node
        }

        this.size++
    }

    // insert at a certain index

    // get a certain index

    // clear this linked list

    // delete at a certain index

    // print all data or values of each node
    print(){
        let current = this.head
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

    // reverse the linkedlist()
    reverse(){
        // previous
        let previous = null
        let current = this.head
        // holder
        let next

        while(current){
            // si next ang paglalagyan ng next nung current node bale itatago lang muna para pag minodify yung next ng current ay makukuha tong naiwan na to
            next = current.next
            // so shempre etong next ay yung previous na since null muna ang unang value ng previous
            current.next = previous
            // dadagdagan lang ng dadagdagan para eto yung magiging head mamaya
            previous = current
            //so yung next na kukunin shempre edi si next
            current = next
        }

        // so shempre nabaliktad na naten yung linkedlist edi yung head na ngayon ay yung previous since ayun yung pinaka pinagbaliktad na e
        this.head = previous

    }
}

let linkedListSample = new LinkedList()
linkedListSample.insertFirst(100)
linkedListSample.insertFirst(200)
linkedListSample.insertLast(300)
// linkedListSample.reverse()


// console.log(linkedListSample)
// wag mo nalagyan ng console.log AHAHAHHA may lalabas na undefined dyan
// AHAAHAHAHHAHAHA kasi nga naman print na function mo ipiprint mo pa yung function
linkedListSample.print()