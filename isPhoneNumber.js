function isPhoneNumber(str) {
        const regExp =/[+]\d{12}/;
        return regExp.test(str) ? true : false
}