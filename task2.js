/*
Задача 2:
вывести в консоль букву W в виде звездочек c задаваемыми параметрами ширины шрифта
- fontWidth (количество звездочек) и высоты - height.
  * - добавить третий параметр количество символов V в ряду - length.

  ***            ******            ***
   ***          ***  ***          ***
    ***        ***    ***        ***
     ***      ***      ***      ***
      ***    ***        ***    ***
       ***  ***          ***  ***
        ******            ******


  ** - изменить функцию для вывода более аккуратной буквы W, также с параметром - length

  ***          ****           ***
   ***        ******        ***
    ***      ***  ***      ***
     ***    ***    ***    ***
      ***  ***      ***  ***
       ******        ******
        ****          ****
*/

/*
    разобью задачу на две, а потом ещё на две :)
        1. Создаём \/
        2. 2 \/ = \/\/
*/

function repeat(string, times){

    // Повторяет первый символ строки n раз

    let resultString = '';
    for(let i = 0; i < times; i++){
        resultString += string[0];
    }
    return resultString;
}

function createSlesh(fontWidth, height, incline){

    /*
        Возвращает наклонную прямую
        ширины - fontWidth
        высоты - height
        сторона наклона - incline
    */

    let slesh = [];
    for(let i = 0; i < height; i++){
        incline === 'right' ? slesh.unshift(repeat(' ', i) + repeat('*', fontWidth) + repeat(' ', -(i - height + 1))) : slesh.push(repeat(' ', i) + repeat('*', fontWidth) + repeat(' ', -(i - height + 1)));
    }
    return slesh;
}

function createW(fontWidth, height){
    /*
      Возвращает \/\/
    */

    let result = [];
    for(let i = 0; i < height; i++){
        result.push(createSlesh(fontWidth, height, 'left')[i] + createSlesh(fontWidth, height, 'right')[i] +
            createSlesh(fontWidth, height, 'left')[i] + createSlesh(fontWidth, height, 'right')[i] );
        console.log(result[i]);
    }
    return result;
}

