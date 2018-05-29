//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
//typically using all the original letters exactly once.[1] For example, 
//the word anagram can be rearranged into "naga ram".

// Anagrams may be created as a commentary on the subject. They may be a synonym or antonym of their subject, a parody, a criticism or satire. For example:

// "rail safety" = "fairy tales"
// "roast beef" = "eat for BSE" [3]
// An anagram which means the opposite of its subject is called an "antigram". For example:

// "restful" = "fluster"
// "funeral" = "real fun"
// "adultery" = "true lady"
// "customers" = "store scum"
// "forty five" = "over fifty"
// They can sometimes change from a proper noun or personal name into an appropriate sentence:

// "William Shakespeare" = "I am a weakish speller"
// "Madam Curie" = "Radium came"

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    for (let char in aCharMap){
        if(aCharMap[char] != bCharMap[char]) {
            return false;
        }

    }

   return true;
}



function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '')) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
console.log(anagrams ("rail safety","faily tales"));
module.export = anagrams;