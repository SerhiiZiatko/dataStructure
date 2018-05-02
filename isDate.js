function isDate(str){
    const regExp =/(\d{2}[\.|\-|\/]{1}){2}\d{4}/;
    return regExp.test(str) ? true : false
}