function isEmail(str) {
    if (str.length < 14) return false;
    let userNameInd = str.indexOf('@');
    if (userNameInd >= 3) {
        let domen2Level = str.indexOf('.', userNameInd);
        if (domen2Level >= 2)
            let domen1Level = str.split('.');
        if (domen1Level[1].length > 2) return true;
    }
}

function isEmail(str) {
    const regExp =/\w{4,}@[a-z]i{4,}\.[a-z]i{3,}/;
    return regExp.test(str) ? true : false
}