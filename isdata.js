const isData = data => {
    let newData = new Date( data );
    let parsDat = Date.parse( newData );
    return parsDat ? true : false;
}
console.log(isData(new Date));
