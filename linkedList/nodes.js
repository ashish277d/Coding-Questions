class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        //head property just know the first node of linked list
        this.head=null;
    }
    
    insertFirst(data){
        this.head = new Node(data,this.head);
    }

    size(){
        let counter =0;
        let node = this.head;
        while(node){
            counter++
            node =node.next;
        }
        return counter;
    }
    getFirst(){
        let node = this.head;
        return node;

    }
    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node =node.next;
        }
       

    }
    clear(){
        this.head =null;
    }

    removeFirst(){
        //let node = this.head;
        if(!this.head){
            return;
        }
        this.head =this.head.next;
    }

    removeLast(){

         if(!this.head){
            return null;
        }
        if (!this.head.next){
            this.head=null;
            return;
        }
        let previous=this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node =node.next;
        }
        previous.next=null;

    }
    insertLast(data){
        let lastNode=this.getLast();
        if(!lastNode){
           this.head= new Node(data);
        }else{2

        let newNode = new Node(data);
        last.next=newNode
        }

    }
    getAt(index){
        let node = this.head
        let counter = 0;
        while(node){
            
            if(couter === index){
                return node;
            }else {
                node =node.next;
                counter++
            }
        }
        return null;
    }
    removeAt(index){
         if(!this.head){
            return;
        }
        if (index === 0){
            this.head = this.head.next;
            return;
        }
        let previous = this.getAt(index-1);
        if (!previous||!previous.next){
            return;
        }
        previous.next = previous.next.next;

    }
    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        if(index==0){
            this.head=new Node(data,this.head);
            return;
        }
        const previous = this.getAt(index-1)||getLast();
        const node=new Node(data,previous.next)
        previous.next=node;

    }
    reverse(){
        if(!this.head){
            return
        }
  var node = this.head;
  var previous = null;

  while(node) {
    // save next or you lose it!!!
    var save = node.next;
    // reverse pointer
    node.next = previous;
    // increment previous to current node
    previous = node;
    // increment node to next node or null at end of list
    node = save;
  }
  this.head = previous;   // Change the list head !!!

    }
}

let node1 = new Node(8);
const list = new LinkedList();
list.head=node1;
list.insertFirst(10);
list.insertFirst(15);
list.insertFirst(20);
list.insertFirst(25);
//console.log(list);
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.removeFirst());
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.removeLast());
// console.log(list.size());
console.log(list);
console.log(list.size())
list.reverse();
console.log(list.size())
console.log(list);


module.export = {Node,LinkedList};