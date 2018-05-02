function ucWords(str) {
    let newStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        newStr += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
    }
    return newStr;
}