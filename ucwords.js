const ucWords = words => {
    const strToArr = words.split(" ");
    return strToArr.map( item => item[0].toUpperCase() + item.slice(1) ).join(", ");
}


console.log(ucWords("aaaaaa bbbbbb ccccccc ddddd"))
