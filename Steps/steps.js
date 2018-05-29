//Write a function that accepts a poistive number N.
//The Function should console log a step shape.
//with N levels using # character.Make sure the steps has spaces on the right hand side.
// ---Examples
// steps(2)
//      '# '
//      '##'
// steps(3)
//      '# '
//      '## '
//      '###'
function steps(n){
// Iterate through Rows
 for(row=0; row<n; row++){
     //Create an empty strin to hold # and space
     let stairs='';
     for (col=0;col<n;col++){
         // if the current  column is equla to or less than curren row then add #
         if(col<=row){
             stairs +='#';
         }else{
             // else add a space to stairs
             stairs +=' ';
         }
     }
 console.log(stairs)
 }

}

steps(3);
module.export=steps;