function maxChars(Str){
var chars={};
let max=0;
let maxChar ='';

for(let char of Str ){

    chars[char] =  chars[char]+ 1 || 1;
}
console.log(chars);
for (let char in chars){
    if(chars[char]>max){
        max=chars[char];
        maxChar=char;
        
    }
}
console.log(max);
console.log(maxChar);
}
maxChars("hello Theeeeeeere 111111")
module.export=maxChars;