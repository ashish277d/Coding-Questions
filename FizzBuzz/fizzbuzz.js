function fizzBuzz(n){

    for(i=1;i<=n;i++){
        if(i%3===0) {
            console.log("fizz");
        }else if (i%5===0) {
            console.log("buzz");
        }
    }

}
fizzBuzz(20);
module.export=fizzBuzz;