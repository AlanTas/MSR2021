const slowAdd = (array)=>{
    
    if(array.length === 0) return 0;

    const restOfArray = array.slice(1);

    return array[0] + slowAdd(restOfArray);

}

const dataArray = [2, 5, 7]
console.log(slowAdd(dataArray));

//Same Problem with this one.

const fastSum = (array)=>{
    return _fastSum(array, 0);
};
const _fastSum = (array, start)=>{
    if(start === array.length) return 0;

    return array[start] + _fastSum(array, start + 1);

}

console.log(fastSum(dataArray));