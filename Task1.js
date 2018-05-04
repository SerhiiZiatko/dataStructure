/*Задача 1:
Написать собственные функции для работы со строками и числами:
  @ функция reverse(),
  которая параметром принимает строку,
  а возвращает ее в перевернутом виде,
  @ функция ucFirst(),
  которая параметром принимает строку,
  а возвращает эту же строку, сделав ее первую букву заглавной
  @ функция ucWords(),
  которая принимает строку и делает заглавной первую букву каждого слова этой строки.
  @ функция round(),
  которая будет округлять число до 8го символа после запятой,
  но при этом необходимо отбросить свободные нули, возвращает число
*/


/*REVERSE*/

function reverse(string) {
    return string.split('').reverse().join('');
}

var a='string';

console.log(a);
console.log(reverse(a));

/*ucFirst*/

function ucFirst(string) {
    return string[0].toUpperCase()+string.slice(1);

}

console.log(a);
console.log(ucFirst(a));

//ucWords

var bigString = "loren inspum";
function ucWords (string) {
    return string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}
console.log(bigString);
console.log(ucWords(bigString));
var int=1.123456789;

function round(floatInt) {
    return +floatInt.toFixed(8);
}
console.log(round(int));


/*
  @ функцию isEmail параметром принимает строку и проверяет,
является ли она корректным емейлом или нет.
Если является - возвращает true, если не является - то false.
Упрощенный валидный email это - больше 3х символов
имя пользователя + @ + больше 3х символов
домен второго уровня + . + больше 2 символов домен верхнего уровня
  @ функцию isUrl для проверки url
  @ функцию isDate для проверки даты
  @ функцию isPhoneNumber для проверки телефона
  (+380 98 xxxxxxx, +380 50 xxxxxxx)
*/

var email ="add@gmail.com";
function isEmail(email) {
    var regex = /^[\w\s]{3,}@[\w\s]{3,}\.[\w\s]{2,}/;
    return regex.test(email.toLowerCase());
}
console.log(isEmail(email));

var url = "html";
function isUrl(url)
{
    var regex = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
    return regex.test(url);
}
console.log(isUrl(url));
console.log(isUrl('http://html.net'));
console.log(isUrl('html.net'));
console.log(isUrl('html'));

function isDate(date) {
    var regex =/^[\d]{2}[\.|\-|\/][\d]{2}[\.|\-|\/][\d]{4}$/;
    return regex.test(date);

}

console.log(isDate('12.05.2020')); // true
console.log(isDate('12-05-2020')); // true
console.log(isDate('12/05/2020')); // true
console.log(isDate('dfsdfsdf')); // false
function isPhone(phone) {
    var regex =/^[\+](380)[\d]{9}$/;
    return regex.test(phone);
}
console.log(isPhone('+380989817689')); // true
console.log(isPhone('0000989817689')); // false


/*Задача 3:

3.1 Написать функцию, которая принимает аргументом строку и возвращает массив объектов
   createPatternArray("red 1 yellow 2 black 3 white 4")
   //  [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]
*/
var stringObj = "red 1 yellow 2 black 3 white 4";
console.log(stringObj);
var result = [];
function createParrentObject (string) {
    var string = stringObj.split(' ');
    for(var i =0; i < string.length; i=i+2){
        return result.push(

            {
                name: string[i],
                id: string[i+1],

            }
        );
    }
}
createParrentObject(stringObj);
console.log(result);
/*3.2 Написать функцию, которая принимает два массива arr1 (любые элементы) и arr2 (только целые числа). Функция возвращает массив элементов из arr1, индексы которых представлены, во втором массиве.

   findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])      // ['a', 'a']
   findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]) // [1, 1, 1]
   findArray([1, 2, 3, 4, 5], [2,2,2])               // [3,3,3]

   findArray([1,2,3], []) // []
   findArray([], [2,1,3]) // []
   findArray([], [])      // []
*/
var arr1=[1,2,3,4,5];
var arr2=[2,2,2];
var result = [];
function findArray (arr1,arr2) {
    if(arr1.length==0){
        result= [];
    }
    else {
        for(var i=0; i<arr2.length; i++) {
            result.push(arr1[arr2[i]-1]);
        }

    }
}
/*3.3 Написать функцию, которая принимает массив строк из одинаковых букв и возвращает новый массив,  который будет отличаться тем, что длина каждого элемента равна средней длине элементов предыдущего массива
 */

var arr=['aaaaaaa', 'bbbb', 'cc'];
function z3 (arr) {
    var result = arr.reduce(function(sum, current) {
        return sum + current.length;
    }, 0)
    var avg = Math.round(result/arr.length);
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i][0].repeat(avg);
    }
    return arr;
}
console.log(z3(arr));

/*const {arr1, arr2} = require("./objarr.js");
console.log(arr1);

