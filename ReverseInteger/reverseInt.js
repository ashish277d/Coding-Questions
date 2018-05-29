function reverseInt(number){
    let reversed = 0;
        while(number!=0){
        reversed *= 10;
        
         reversed += number % 10;
         console.log(reversed);
        
         number -= number % 10;
         
         number /= 10;
       
        } 
        
        return reversed;
}
reverseInt(231);
module.export=reverseInt;