const { arr1,arr2 } = require("./arrays");
const filterTags = ( arr1,arr2 ) => {
    const tags1 = arr1.map( item => item.tags );
    const tags2 = arr2.map( item => item.tags );
    let allTags = [];
    const getAllTags = () => {
        tags1.forEach( item => {
            allTags = [...allTags, ...item];   
        })
        tags2.forEach( item => {
            allTags = [...allTags, ...item];
        } )
    }
    getAllTags();
    const getFilteredTag = (allArr,filteredArr) => {
        const checkedElem = allArr[0];
        const filt = filteredArr
        if(allArr.length === 0) {
            return filt;
        } else {
            if(filt.indexOf(checkedElem) !== -1 ){
                allArr = allArr.filter( item => item !== checkedElem )
            } else{
                filt.push(checkedElem)
                allArr = allArr.filter( item => item !== checkedElem )
            }
            return getFilteredTag(allArr,filt);
        }
    } 
    const result = getFilteredTag(allTags,[]);
    return result; 
}
console.log(filterTags(arr1,arr2));
