function isUrl(str) {
    if (str.indexOf('.') > 0 && str.indexOf('.') < str.length-1) {return true}
    else {return false}
}

function isUrl(str){
    const regExp =/(\d{2}[\.|\-|\/]{1}){2}\d{4}/
    return regExp.test(str) ? true : false
}