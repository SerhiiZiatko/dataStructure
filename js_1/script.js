function awesomeNumbers (strArr){
    let lenghts = [];
    for(let a = 0; a < strArr.length; a++) {
        lenghts[a] = strArr[a].length;
    };
    let sum = 0;
    for (let j = 0; j < lenghts.length; j++) {
        sum += lenghts[j];
    }
    let average = sum/lenghts.length;
    for(let i = 0; i < strArr.length; i++) {
        let char = strArr[i][0];
        if(strArr[i].length < average) {
            while(strArr[i].length < average) {
                strArr[i] += char;
            }
        } else if (strArr[i].length > average) {
            while(strArr[i].length > average) {
                strArr[i] = strArr[i].slice(0, average);
            }
        }
    }
};
awesomeNumbers(['aa', 'bbb', 'cccc'])


function getIndexes(valArr, indexArr) {
    let res = [];

    for (let i = 0; i < indexArr.length; i++) {
        res[i] = valArr[indexArr[i]];
        if(res[i] == undefined) {
            res[i] = 'Out of range!';
        }
    }
    alert(res);
}
getIndexes([4,5,2,4,6,8,5,3,2,4,6], [7,3,19]); */

function strToObjArr (string) {
    let toArr = string.split(' ');
    let res = [];
    let keys = [];
    let values = [];
    for(let i = 0; i < toArr.length; i++) {
        if(i%2 != 1) {
            values.push(toArr[i]);
        } else {
            keys.push(toArr[i]);
        }
    }
    for(let i = 0; i < keys.length; i++) {
        res[i] = {};
        res[i].id = keys[i];
        res[i].name = values[i];
    }
    alert(res);
}
strToObjArr('red 1 yellow 2 black 3 white 4');


function ukWords(string) {
    let arr = string.split(' ');
    let res = '';
    arr.forEach(function(element) {
        let temp = element[0].toUpperCase()+element.slice(1);
        res = res+temp+' ';
    });
} 

function ukFirst(string) {
    let res = string[0].toUpperCase()+string.slice(1);
    return res;
}

function reverse(string) {
    let str = string.split('');
    let res = '';
    for(var i = str.length-1; i >= 0; i--) {
        res += str[i]; 
    }
    return res;
} 
function round1(number) {
    let num = +number.toFixed(8);
    alert(num);
}

function round2(number) {
    let check = number.toString();
    let dot = check.indexOf('.');
    let afterDot = check.slice(dot+1);
    let res;
    if(afterDot.length >= 7) {
        res = check.slice(0, dot+1)+check.slice(dot+1, dot+9);
        +res;
    } else {
        res = +check;
    }
    alert(res);
} 