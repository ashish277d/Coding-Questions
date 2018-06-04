function getClosingParenthesis(sentence, parethesisStartIndex){
    let openNestedParams=0;
    for(let position=parethesisStartIndex+1;position<sentence.length;position++){
        var char = sentence[position];
        if(char=='('){
            openNestedParams +=1
        }
        else if(char==')'){
           
        if (openNestedParams === 0) {
                return position;
            } else {
                openNestedParams -= 1;
            }
    }


}
throw new Error('No closing parenthesis :(');
}


getClosingParenthesis("Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing.",10);
module.exports=getClosingParenthesis;