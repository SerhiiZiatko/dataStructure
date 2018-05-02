function round(num) {
    let str = num.toString().slice(0,11);
    for (let i = 0; i < str.length; i++) {
        if (str%10 === false) str.slice(0,i);
    } return + str;
}