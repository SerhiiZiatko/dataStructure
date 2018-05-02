function ucFirst(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newStr +=  str[i];
    }
    return newStr;
}