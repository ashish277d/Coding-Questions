function reverseStr(str){
let reversed ='';
for (let char of str){
    reversed = char;
}
console.log(reversed)
return reversed;
}
reverseStr("hello");

module.export =reverseStr;