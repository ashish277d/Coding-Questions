function capatilize(str){
    let result = str[0].toUpperCase();
    for (i=1;i<str.length;i++){
        if (str[i-1]===' '){
          result += str[i].toUpperCase()
        } else{
            result += str[i]
        }
    }
    console.log(result);

}
capatilize('a short sentence');
module.export=capatilize;