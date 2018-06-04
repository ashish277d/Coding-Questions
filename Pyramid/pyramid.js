// Build a Pyramid based on the N
// if pyramid(2)
// ' # '
// '###'
// pyramid(3)
//  '  #  '   //[0,1,2,3,4]
//  ' ### '
//  '#####'
// pyramid(4)

//  '   #   '      
//  '  ###  '
//  ' ##### '
//  '#######'


function pyramid(n){
// Midpoint is very import factor for this problem 
const midpoint = Math.floor((2*n-1)/2);
// if n =3 then mid point will be 7/2 = 3
    for (let row=0; row < n; row++){
        //row counter starts at 0 and will iterate till row < 3

        let level =' ';
        for (let column=0; column<2*n-1; column++){
            // 0 , 0<7

            if(midpoint-row<=column && midpoint+row>=column){
                //3-0 <=0 && 3+0>=0
                

                level +='#';

            }else{
                level +='-';
            }
        }

    console.log(level);

    }
}
pyramid(2)
module.export=pyramid;