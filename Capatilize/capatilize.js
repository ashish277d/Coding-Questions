//capatilize first letter of each word.
function capatilize(str){
    // Create an empty Array
    const words=[];
    // Take the original string that was passed into our function and we'll split it by the space
    for (let word of str.split(' ')){
        //We will uppercase the first letter of each word.
        //We will then join that first letter that is now capitalized with the rest of the word.
        words.push(word[0].toUpperCase()+word.slice(1));

    }
    //console.log(words)
    // join the array of words
    console.log(words.join(' '));
    return words.join(' ')
}

capatilize('a short sentence');

module.export=capatilize;