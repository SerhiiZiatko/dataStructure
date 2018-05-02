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
    //const filterArr = []

    const getFilteredTag = (ind,allArr) => {
        const checkedElem = allArr[ind];
        const filterArr = [];
            //console.log(ind)
            //console.log(allTags.length)
        if(allArr.length === 0) {
            return;
        } else {
            if(filterArr.indexOf(checkedElem) !== -1 ){
                allArr = allArr.filter( item => item !== checkedElem )
                console.log(allArr.length)
            } else{
                //console.log(checkedElem)
                console.log(allArr.length)
                filterArr.push(checkedElem)
                allArr = allArr.filter( item => item !== checkedElem )
            }
            //console.log(ind)
            return getFilteredTag(ind + 1,allArr);
        }
        
         
    } 
    console.log(allTags.length);
    getFilteredTag(0,allTags);
    //console.log(allTags);
}

filterTags(arr1,arr2);
