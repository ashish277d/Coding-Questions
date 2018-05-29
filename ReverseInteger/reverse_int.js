function reverseInt(n){

    const reversed = n.toString().split('').reverse().join('');
    console.log(parseInt(reversed)*Math.sign(n));
    return reversed;
}
reverseInt(-5);
module.exports= reverseInt;