/*
Задача 1:
Написать собственные функции для работы со строками и числами:
  функция reverse(), которая параметром принимает строку, а возвращает ее в перевернутом виде,
  функция ucFirst(), которая параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
  функция ucWords(), которая принимает строку и делает заглавной первую букву каждого слова этой строки.
  функция round(), которая будет округлять число до 8го символа после запятой, но при этом необходимо отбросить свободные нули, возвращает число
*/

function reverse(string) {
    return string.split('').reverse().join('');
}

function ucFirst(string) {
    return string[0].toUpperCase() + string.substring(1, string.length);
}

function ucWords(string) {
    const arr = string.split(' ');
    return arr.map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(' ')
}

function round(number) {
    return +number.toFixed(8);
}



/*
а также функции для валидации разных сущностей
  функцию isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Упрощенный валидный email это - больше 3х символов имя пользователя + @ + больше 3х символов домен второго уровня + . + больше 2 символов домен верхнего уровня
  функцию isUrl для проверки url
  функцию isDate для проверки даты
  функцию isPhoneNumber для проверки телефона (+380 98 xxxxxxx, +380 50 xxxxxxx)
*/


function isEmail(string) {
    return (/^[\d\w]{3,}@[\d\w]{3,}\.[\d\w]{2,}$/).test(string);
}

function isUrl(string) {
    return /(http:\/\/|https:\/\/){0,1}([\d\w]{2,}).([\d\w]{2,})(\/[\d\w]{1,}){0,}/.test(string);
}

function isDate(string) {
    return /^\d{2}[./-]\d{2}[./-]\d{4}/.test(string);
}

function isPhoneNumber(string) {
    return /^\+*(\d{3}){0,1}(\d{2})\d{7}$/.test(string)
}

