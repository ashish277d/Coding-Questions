class QueueTwoStacks {
 constructor() {
    // initialize an empty array
    this.firstStack = [];
    this.secondStack = [];
}


enqueue(item) {
    this.firstStack.push(item);
}

dequeue () {
    if (this.secondStack.length === 0) {

        // Move items from inStack to outStack, reversing order
        while (this.firstStack.length > 0) {
            var newestInStackItem = this.firstStack.pop();
            this.secondStack.push(newestInStackItem);
        }

        // If outStack is still empty, raise an error
        if (this.secondStack.length === 0) {
            return undefined;
        }
    }
    console.log(this.secondStack.pop());
    return this.secondStack.pop();
}
}
this.q = new QueueTwoStacks();
for(i=2;i<=5;i++){
this.q.enqueue(i);
}
this.q.dequeue();
module.export = QueueTwoStacks;