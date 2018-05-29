function anagrams(stringA, stringB) {
 return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
console.log(anagrams ("rail safety","faiy tales"));
module.export = anagrams;