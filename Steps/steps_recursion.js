
//Algo
// 1. If row == n then we are at end of our problem
// 2. if stair has length of ==n then we are at end of row
// if length of stair <= row number we are working on then we add a # else add a space


function steps(n,row=0,stair=''){
    // 1. If row == n then we are at end of our problem
    if (n===row){
        return;
    }
    // 2. if stair has length of ==n then we are at end of row
    if (n===stair.length){
        console.log(stair);
        return steps(n, row+1);
    }
    //3. if length of stair <= row number we are working on then we add a # else add a space
    if(stair.length<=row){
        stair +='#'
    }else{
        stair +=' ';
    }
    steps(n,row,stair);
}

steps(3,0);
module.export=steps;

