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
    insertAtIndex(index, data){        
        if (index === 0 ){
            this.head = new Node(data, this.head)

            // pwede ring tawagin nalang yung insert First function bale 
            // insertFirst(data)

            /* pwedeng ganito pero mas mabilis kapag ginamit yung code sa taas shempre na katulad ng insert first
            node.next = this.head
            this.head = node
            */

            // return para di na irun pa yung mga code sa bottom
            return;
        }

        if (index < 0 || index >= this.size){
            console.log("Index is not existing after insertAtIndex")
            return
        }

        let node = new Node(data)
        let current = this.head, previous;
        let count = 0

        while (count < index){
            previous = current
            current = current.next
            
            count++
        }
        node.next = current
        previous.next = node

        this.size++
    }

    // get a certain index
    getIndex(index){
        if (index < 0 || index >= this.size){
            console.log("Index not existing after getIndex")
            return
        }
        let count = 0
        let current = this.head

        // can also be ====> while(current !== null)
        while(current){
            if (count === index){
                // print ko lang yung laman ng index no need na ireturn unless needed
                console.log(`Index ${index} has value/data of: ${current.data}`) 
            }

            current = current.next
            count++
        }

        return null
    }

    // clear this linked list
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // delete at a certain index
    delete(index){
        if (index < 0 || index >= this.size){
            console.log(`Index is not existing after delete()`)
            return
        }
        let current = this.head, previous;
        for(let count = 0; count < index; count++){
            previous = current
            current = current.next
        }

        previous.next = current.next;
        this.size--
    }

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
linkedListSample.insertFirst(12345)
linkedListSample.insertLast(300)
linkedListSample.insertAtIndex(3, 789)
linkedListSample.insertAtIndex(-1, 200)
linkedListSample.delete(2)
// linkedListSample.reverse()

linkedListSample.getIndex(-1)


// console.log(linkedListSample)
// wag mo nalagyan ng console.log AHAHAHHA may lalabas na undefined dyan
// AHAAHAHAHHAHAHA kasi nga naman print na function mo ipiprint mo pa yung function
linkedListSample.print()