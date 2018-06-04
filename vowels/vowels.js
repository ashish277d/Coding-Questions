function vowels(str){
    let count =0;
    let strVowel =["a","e","i","o","u"];
    for(let char of str.toLowerCase()){
        if(strVowel.includes(char)){
            count++;

        }

    }
    console.log(count);
    return count;

}
vowels("INDIA");
module.exports=vowels;