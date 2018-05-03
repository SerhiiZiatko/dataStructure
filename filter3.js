const filterAll = ( ...args ) => {
    return args.map( 
        item => item.constructor == Array ?
        [ ...item ] :
            item.constructor == Object ?
            { ...item } :
            undefined
    )
}
console.log(filterAll([1,2,3],{name: "buuu"},["d","e","1"]))
