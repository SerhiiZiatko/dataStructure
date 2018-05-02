const createPattern = str => {
    const arr = str.split(" ");
    //console.log(arr)
    const ids = arr.filter( item => typeof +item === "number" && isFinite(item) );
    //console.log(ids)
    const names = arr.filter(
        item => isNaN(+item) 
            && isFinite(+item === false) 
    );
    //console.log(names)
    if( ids.length === names.length ) {
        const iteration = ids.length - 1;
        let result = [];
        for(let i = 0; i <= iteration; i++){
            result.push({
                name: names[i],
                id: ids[i]
            })
        }
        return result;
    }
}

console.log(createPattern("dddd 1 ffff 2"))
