/*
3.1 Написать функцию, которая принимает аргументом строку и возвращает массив объектов
   createPatternArray("red 1 yellow 2 black 3 white 4")
   //  [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]
*/

function createPatternArray(string){
    const stringArr = string.split(' ');
    let result = [];
    for(i = 0; i < stringArr.length; i+=2){
        result.push({name: stringArr[i],
            id: stringArr[i+1]
        });
    }
    return result;
}

/*
3.2 Написать функцию, которая принимает два массива arr1 (любые элементы) и arr2 (только целые числа).
Функция возвращает массив элементов из arr1, индексы которых представлены, во втором массиве.

   findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])      // ['a', 'a']
   findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]) // [1, 1, 1]
   findArray([1, 2, 3, 4, 5], [2,2,2])               // [3,3,3]

   findArray([1,2,3], []) // []
   findArray([], [2,1,3]) // []
   findArray([], [])      // []
*/

function findArray(arr1, arr2){
    return arr2.reduce((prev, cur) => {
        return arr1[cur] ? prev.concat(arr1[cur]) : prev;
    }, []);
}

/*
3.3 Написать функцию, которая принимает массив строк из одинаковых букв и возвращает новый массив,
который будет отличаться тем, что длина каждого элемента равна средней длине элементов предыдущего массива.

   ['u', 'y'] =>  ['u', 'y'] // average length is 1
   ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
   ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

*/

function repeat(string, times){
    let resultString = '';
    for(let i = 0; i < times; i++){
        resultString += string[0];
    }
    return resultString;
}
function average(arr){
    const averageLength =  Math.round(arr.reduce((prev, cur, i) => prev + cur.length, 0)/arr.length)
    console.log(averageLength)
    return arr.map((item, i, cur) => repeat(item, averageLength));
}
