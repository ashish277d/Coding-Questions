const Stack = require('./Stack');

class Queue extends Stack{

constructor() {
    super();
    this.first = new Stack();
    this.second = new Stack();
}
add(item){
    //console.log(item);
    this.first.push(item);
}
remove(){
    while(this.first.peek){
       // const record = this.first.pop();
        this.second.push(this.first.pop());
    }

    const record =this.second.pop();

    while(this.second.peek()){
        this.first.push(this.second.pop());

    }
    console.log(record);
    return record;
}
peek(){
        while(this.first.peek){
        this.second.push(this.first.pop());
    }
    const record =this.second.peek();
        while(this.second.peek()){
        this.first.push(this.second.pop());

    }
    console.log(record);
    return record;


}
}

this.Q = new Queue();
for(i=1;i<=5;i++){
this.Q.add(i);
}
//this.Q.remove();
this.Q.peek();

module.export = Queue;