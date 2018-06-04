class Stack {
 constructor() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
 push (item) {
     //console.log(item);
    this.items.push(item);
};

// remove the last item
pop(){
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
peek() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};
}
// this.s=new Stack();
// for(i=1;i<=5;i++){
// this.s.push(i);
// }
module.exports = Stack;