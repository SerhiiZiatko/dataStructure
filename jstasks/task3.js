function createPatternArray(string) {
    let arr = string.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push({name: arr[i], id: arr[i+1]});
    }
    return res;
}

//--------------------------------------------------------------------------------------------------------------------//

function findArray(arr1, arr2) {
    if(arr1.length == 0) {
        return [];
    } else {
        let res = [];
        for (i of arr2) {
            res.push(arr1[i]);
        }
        return res;
    }
}

//--------------------------------------------------------------------------------------------------------------------//

function avgLengthArray(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    let avg = Math.round((lengths.reduce((x, y) => x + y, 0)/lengths.length));
    for (let j = 0; j < arr.length; j++) {
        arr[j] = arr[j][0].repeat(avg);
    }
    return arr;
}