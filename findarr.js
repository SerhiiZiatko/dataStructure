const findArr = ( arrVal, arrInd ) => {
    if(arrVal.length === 0 || arrInd.length === 0) return []
    
    const result = arrInd.map( item => {
        if(item && arrVal[item]){
            return arrVal[item] 
        }
    })
    return result.filter( item => item !== undefined )
}


console.log(findArr(["aaa","bbbbbb","ffffffffffff","dddddddddd"],[]))
