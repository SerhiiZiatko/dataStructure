const {arr1, arr2} = require('./obj.js')

function filterArrays(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        if((parseFloat(arr1[i].balance.replace(/\D+/, '').replace(/,/, '')) > 2000) &&
            (arr1[i].age < 30) &&
            (arr1[i].eyeColor.toLowerCase() == 'blue' || arr1[i].eyeColor.toLowerCase() == 'brown') &&
            (arr1[i].tags.includes('velit') && arr1[i].tags.includes('anim'))) {
            res.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if((parseFloat(arr2[i].balance.replace(/\D+/, '').replace(/,/, '')) > 2000) &&
            (arr2[i].age < 30) &&
            (arr2[i].eyeColor.toLowerCase() == 'blue' || arr2[i].eyeColor.toLowerCase() == 'brown') &&
            (arr2[i].tags.includes('velit') && arr2[i].tags.includes('anim'))) {
            res.push(arr2[i]);
        }
    }
    return res;
}

//--------------------------------------------------------------------------------------------------------------------//

function findUniqueTags(arr1, arr2) {
    let tmp = [];
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        tmp = tmp.concat(arr1[i].tags);
    }
    for (let i = 0; i < arr2.length; i++) {
        tmp = tmp.concat(arr2[i].tags);
    }
    tmp = [... new Set(tmp)];
    for (let i = 0; i < tmp.length; i++) {
        res.push({id: i, name: tmp[i]});
    }
    return res;
}

//--------------------------------------------------------------------------------------------------------------------//

function copy() {
    let tmp = [];
    for (let i = 0; i < arguments.length; i++) {
        tmp.push(JSON.stringify(arguments[i]));
    }
    for (let i = 0; i < tmp.length; i++) {
        tmp[i] = tmp[i].slice(1, tmp[i].length-1);
    }
    return JSON.parse(JSON.stringify([(tmp.reduce((x, y) => x + y))]));
}