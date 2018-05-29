function chunk(array,size){
    const chunked=[];
    let index=0;
    while (index<array.length){
        chunked.push(array.slice(index,index+size));
        index += size;
    }
    console.log(chunked);
    return chunked;
}

chunk([1,2,3,4,5,6,7],2)
module.export=chunk;