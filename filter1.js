const { arr1,arr2 } = require("./arrays")
const filterString = str => {
    const arr = str.split("");
    return Math.floor(arr.filter(item => item =="." || +item == item ).join(""));
}
const filterFunc = item => {
    return (
        filterString(item.balance ) > 2000
        && item.age < 30 
        && (item.eyeColor == "blue" || item.eyeColor == "brown")
        && ( item.tags.indexOf('velit') !== -1 && item.tags.indexOf("anim") !== -1  )
        ? item : undefined
    )
}
const filterArrays = (arr1,arr2) => [...arr1.filter(filterFunc), ...arr2.filter(filterFunc)];
console.log(filterArrays(arr1,arr2));



