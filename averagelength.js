const averageArray = arr => {
    const arrLength = arr.length;
    //console.log(arrLength)
    const sumString = arr.reduce( (sum,curr) => sum + curr );
    //console.log(sumString);
    const averValue = Math.round(sumString.length)/arrLength
    //console.log(averValue);
    return arr.map( item => Array(averValue).fill(item[0]).join("") )
}

console.log(averageArray(["aa","bbb","cccc"]))
