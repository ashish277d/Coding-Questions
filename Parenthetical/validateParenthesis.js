//write a braces/brackets/parentheses validator
// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

let isValid= function(str){

    let openerToCloser = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let opener = new Set(['(','[','{']);
    let closer = new Set([')',']','}']);

    let openerStack=[];

    for(i=0;i<str.length;i++){
        let char = str.charAt(i);

        if(opener.has(char)){
            openerStack.push(char);
        }else if (closer.has(char)){
            if (!openerStack.length){
                return false
            }else{
                let openerVar= openerStack.pop();


                if(openerToCloser[openerVar]!= char){
                    return false;

                }

            }
        }
    }
    return openerStack.length === 0;
}

console.log(isValid("{ ([ ] ( ) }"));

module.export=isValid;