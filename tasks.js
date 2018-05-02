  // функция reverse(), которая параметром принимает строку, а возвращает ее в перевернутом виде,
  const reverse = (str) => {
    return str.split('').reverse().join('');
  };
  // console.log(reverse('hekko'));

  // функция ucFirst(), которая параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
  const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };
  // console.log(ucFirst('hello'));

  // функция ucWords(), которая принимает строку и делает заглавной первую букву каждого слова этой строки.
  const ucWords = (str) => {
    return str.split(' ').map( (index) => {
      return ucFirst(index);
    }).join(' ');
  }
  // console.log(ucWords('hello wolrd it me'));

  // функция round(), которая будет округлять число до 8го символа после запятой, но при этом необходимо отбросить свободные нули, возвращает число
  const round = (number) => {
    let num = number.toFixed(8);
    num = Number.parseFloat(num);
    return num;
  }
  // console.log(round(0.1 * 0.2334));

  // функцию isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
  //  Упрощенный валидный email это - больше 3х символов имя пользователя + @ + больше 3х символов домен второго уровня + . + больше 2 символов домен верхнего уровня
  const isEmail = (str) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const reg = /^/;
    return reg.test(str);
  }
  // console.log(isEmail(‘html@gmail.com’)); // true
  // console.log(isEmail(‘h@g.com’)); // false
  // console.log(isEmail(‘html@gmail’)); // false
 
  // функцию isUrl для проверки url 
  const isUrl = (str) => {
    var pattern = new RegExp('^(https?:\/\/)?'+
      '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+
      '((\d{1,3}\.){3}\d{1,3}))'+
      '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+
      '(\?[;&a-z\d%_.~+=-]*)?'+
      '(\#[-a-z\d_]*)?$','i');
    if(!pattern.test(str)) {
      console.log("Please enter a valid URL+.");
      return false;
    } else {
      return true;
    }
  }
  // console.log(isUrl('http://html.net')); // true
  // console.log(isUrl('html.net')); // true
  // console.log(isUrl('html’)); // false

  // функцию isDate для проверки даты
  const isDate = (str) => {
    const reg = /^[0-3][0-9](-|\.|\/)[0|1][(0-3)|(0-9)](-|\.|\/)(19|20)[0-9]{2}/;
    return reg.test(str);
  }
  // console.log(isDate('12.05.2020')); // true
  // console.log(isDate('12-05-2020')); // true
  // console.log(isDate('12/05/2020')); // true
  // console.log(isDate('dfsdfsdf')); // false


  // функцию isPhoneNumber для проверки телефона (+380 98 xxxxxxx, +380 50 xxxxxxx)
  const isPhoneNumber = (num) => {
    const reg = /^[\+]+[38]+[0]+[0-9]/;
    return reg.test(num);
  }
  // console.log(isPhoneNumber('+380989817689')); // true
  // console.log(isPhoneNumber('0000989817689')); //false


// вывести в консоль букву W в виде звездочек c задаваемыми параметрами ширины шрифта - fontWidth (количество звездочек) и высоты - height.
  // * - добавить третий параметр количество символов V в ряду - length.
// 
  // ***            ******            ***
  //  ***          ***  ***          ***
    // ***        ***    ***        ***
    //  ***      ***      ***      ***
      // ***    ***        ***    ***
      //  ***  ***          ***  ***
        // ******            ******
// 
  // ** - изменить функцию для вывода более аккуратной буквы W, также с парамметром - length
// 
  // ***          ****          ***
  //  ***        ******        ***
    // ***      ***  ***      ***
    //  ***    ***    ***    ***
      // ***  ***      ***  ***
      //  ******        ******
        // ****          ****
// 
const wordW = (fontWidth, height, length) => {
  const star = '***';

  const space = (num) => {
    let temp = '';
    for (let i = 0; i < num; i++) {
      temp = temp + ' ';
    }
    return temp;
  }

  let arr = [];
  let sp = 12;
    for(let i = 0; i < height; i++) {
      arr.push(space(i) + star + space(sp) + star + space(i));
      sp = sp - 2;
    }
    let end = arr.map((index,i) => {
      let tmp = ''
      for(let i = 0; i < length; i++) {
        tmp = tmp + index;
      }
      return tmp;
    }).join('\n');
    
  return end; 
}

console.log(wordW(3, 7, 6));



// 3.1 Написать функцию, которая принимает аргументом строку и возвращает массив объектов
  //  createPatternArray("red 1 yellow 2 black 3 white 4") 
    // [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]

    const createPatternArray = (str) => {
      const end = [];
      let arr = str.split(' ');
      for(let i = 0; i < arr.length; i += 2) {
        let temp = {}
        temp['name'] = arr[i];
        temp['id'] = arr[i + 1];
        end.push(temp);
      }
      return end;
    };

    // console.log(createPatternArray('hello 1 world 2 ocean 3'));
 
// 3.2 Написать функцию, которая принимает два массива arr1 (любые элементы) и arr2 (только целые числа). Функция возвращает массив элементов из arr1, индексы которых представлены, во втором массиве.
  //  
  //  findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])      // ['a', 'a']
  //  findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]) // [1, 1, 1]
  //  findArray([1, 2, 3, 4, 5], [2,2,2])               // [3,3,3]
  //  
  //  findArray([1,2,3], []) // []
  //  findArray([], [2,1,3]) // []
  //  findArray([], [])      // []

  const findArray = (arr1, arr2) => {
    return arr2.map( (index, i) => {
      return arr1[index];
    })
  };

  // console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]));
  // console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])); 
  // console.log(findArray([1, 2, 3, 4, 5], [2,2,2]));  
 
// 3.3 Написать функцию, которая принимает массив строк из одинаковых букв и возвращает новый массив,  который будет отличаться тем, что длина каждого элемента равна средней длине элементов предыдущего массива.
// 
  //  ['u', 'y'] =>  ['u', 'y'] // average length is 1
  //  ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
  //  ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

  const cent = (arr) => {
    let result = Math.ceil(arr.reduce((sum, current) => {
      return sum + current.length;
    }, 0) / arr.length);

    return arr.map( (index) => {
      if(index.length !== result) {
        const arrWord = index.split('');
        let word = '';
        for(let i = 0; i < result; i++){
          word = word + arrWord[0];
        }
        return word;
      }
      return index;
    })
  };
  
  // console.log(cent(['aa', 'bb','ddd', 'eee', 'e']))
// 

const arr1 = [
  {
    "_id": "5abce8252ba7202808cd7b82",
    "index": 0,
    "guid": "11a16ffb-62dd-420a-aff3-5b7ace6d4154",
    "isActive": false,
    "balance": "$1,015.66",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "blue",
    "name": "Jerry Knight",
    "gender": "female",
    "company": "IDETICA",
    "email": "jerryknight@idetica.com",
    "phone": "+1 (828) 503-2115",
    "address": "720 Abbey Court, Leola, Ohio, 5423",
    "about": "Eiusmod veniam ut anim nostrud exercitation non laboris qui enim. Est do cupidatat tempor velit eiusmod Lorem laboris. Aliqua commodo occaecat quis amet veniam deserunt est mollit tempor ut eu officia eiusmod minim. Et enim nulla veniam duis esse ullamco. Consequat excepteur commodo eu Lorem veniam aute qui deserunt ipsum eiusmod pariatur.\r\n",
    "registered": "2016-07-14T10:10:27 -03:00",
    "latitude": -71.431966,
    "longitude": -166.041254,
    "tags": [
      "cillum",
      "ex",
      "tempor",
      "duis",
      "amet",
      "ut",
      "minim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Joan Espinoza"
      },
      {
        "id": 1,
        "name": "Alisa Mccray"
      },
      {
        "id": 2,
        "name": "Avery Johns"
      }
    ],
    "greeting": "Hello, Jerry Knight! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5abce82556d9a0bb967f88a9",
    "index": 1,
    "guid": "b506962c-a271-4cf1-a149-72387f33cca1",
    "isActive": true,
    "balance": "$1,018.62",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": "Maxine Fulton",
    "gender": "female",
    "company": "INTERGEEK",
    "email": "maxinefulton@intergeek.com",
    "phone": "+1 (949) 467-2714",
    "address": "568 Suydam Place, Coventry, Nebraska, 6920",
    "about": "Consectetur sint veniam commodo sit incididunt commodo officia ad fugiat dolore eu. Laborum anim do dolore esse qui. Ex commodo sunt voluptate esse reprehenderit magna ea enim. Tempor aliquip aliquip enim velit duis velit veniam. In in do ad aute. Cillum laborum quis excepteur pariatur nisi anim nulla proident veniam. Dolor enim amet voluptate cupidatat Lorem aliquip dolore.\r\n",
    "registered": "2016-03-17T08:12:27 -02:00",
    "latitude": -25.160906,
    "longitude": 13.750915,
    "tags": [
      "consectetur",
      "cupidatat",
      "eu",
      "velit",
      "officia",
      "eiusmod",
      "veniam"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Sonja Dixon"
      },
      {
        "id": 1,
        "name": "Rich Walter"
      },
      {
        "id": 2,
        "name": "Misty Bates"
      }
    ],
    "greeting": "Hello, Maxine Fulton! You have 5 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5abce8257c39ab33022532ee",
    "index": 2,
    "guid": "6b38f76c-ef7d-4e33-a675-3c6efd7d6f60",
    "isActive": true,
    "balance": "$1,516.52",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Meagan Duran",
    "gender": "female",
    "company": "EARBANG",
    "email": "meaganduran@earbang.com",
    "phone": "+1 (980) 580-3250",
    "address": "837 Pitkin Avenue, Tioga, West Virginia, 3519",
    "about": "Consectetur excepteur enim exercitation ad duis aliqua officia deserunt veniam. Excepteur anim do duis in laborum aliqua sit sunt aliquip veniam commodo. Velit minim adipisicing esse est incididunt in labore. Incididunt sint duis occaecat est ipsum occaecat anim non.\r\n",
    "registered": "2014-02-28T05:06:10 -02:00",
    "latitude": 33.752373,
    "longitude": -75.478175,
    "tags": [
      "ex",
      "adipisicing",
      "officia",
      "fugiat",
      "aute",
      "sunt",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lucy Ferrell"
      },
      {
        "id": 1,
        "name": "Gena Ross"
      },
      {
        "id": 2,
        "name": "Sadie Gaines"
      }
    ],
    "greeting": "Hello, Meagan Duran! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5abce8259f34ff93e30e9e54",
    "index": 3,
    "guid": "f96bb416-f76e-4c24-a1e9-9ec6d30563c2",
    "isActive": true,
    "balance": "$3,510.92",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Marjorie Richards",
    "gender": "female",
    "company": "SNOWPOKE",
    "email": "marjorierichards@snowpoke.com",
    "phone": "+1 (971) 525-3369",
    "address": "955 Locust Street, Caberfae, Alabama, 492",
    "about": "Amet laborum consectetur ea voluptate consequat pariatur duis excepteur irure ex quis. Ipsum culpa esse veniam nulla. Laboris ad veniam excepteur tempor laborum tempor do ullamco. Adipisicing irure quis nostrud elit nostrud qui elit dolore ad in nostrud. Ad laboris exercitation laborum nostrud do aute dolor exercitation.\r\n",
    "registered": "2017-03-30T08:47:56 -03:00",
    "latitude": -75.134583,
    "longitude": -144.742628,
    "tags": [
      "magna",
      "fugiat",
      "ullamco",
      "Lorem",
      "cillum",
      "consectetur",
      "incididunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Vilma Horn"
      },
      {
        "id": 1,
        "name": "Copeland Hanson"
      },
      {
        "id": 2,
        "name": "Rodgers Stevens"
      }
    ],
    "greeting": "Hello, Marjorie Richards! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5abce82517368705b809c7be",
    "index": 4,
    "guid": "168aa712-f76a-4c65-aec3-8e1cf7e3e931",
    "isActive": false,
    "balance": "2,932.81",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Jacklyn Strong",
    "gender": "female",
    "company": "CONFERIA",
    "email": "jacklynstrong@conferia.com",
    "phone": "+1 (852) 471-2000",
    "address": "978 Amboy Street, Neahkahnie, District Of Columbia, 6107",
    "about": "Do reprehenderit voluptate esse ex pariatur culpa dolore. Est incididunt magna minim ullamco reprehenderit cillum. Qui irure ea excepteur mollit sit consectetur exercitation. Quis et esse incididunt esse.\r\n",
    "registered": "2018-01-24T04:28:58 -02:00",
    "latitude": 67.443004,
    "longitude": 35.957933,
    "tags": [
      "in",
      "veniam",
      "nostrud",
      "velit",
      "quis",
      "nisi",
      "aliquip"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Shanna Gonzales"
      },
      {
        "id": 1,
        "name": "Hooper Ball"
      },
      {
        "id": 2,
        "name": "Madeline Mckinney"
      }
    ],
    "greeting": "Hello, Jacklyn Strong! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5abce825d6fc64ea22da1a3a",
    "index": 5,
    "guid": "fb089a17-8241-46fd-a195-4d8e70968b47",
    "isActive": true,
    "balance": "$2,346.73",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Garcia Bishop",
    "gender": "male",
    "company": "COMTEXT",
    "email": "garciabishop@comtext.com",
    "phone": "+1 (825) 512-3190",
    "address": "899 John Street, Yettem, Mississippi, 2938",
    "about": "Veniam aliqua eu cillum enim occaecat ut. Reprehenderit magna commodo consectetur quis labore. In sint eiusmod dolor fugiat veniam aliqua sit irure et sint aliquip. Pariatur consequat amet esse velit est laboris aute esse quis. Culpa fugiat enim et consequat deserunt eu in reprehenderit magna tempor reprehenderit. Minim adipisicing occaecat consectetur veniam adipisicing ut officia sit ex.\r\n",
    "registered": "2015-08-24T01:26:47 -03:00",
    "latitude": 0.259903,
    "longitude": 26.736668,
    "tags": [
      "velit",
      "Lorem",
      "voluptate",
      "anim",
      "aliquip",
      "ut",
      "est"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Guerra Hill"
      },
      {
        "id": 1,
        "name": "Luella Serrano"
      },
      {
        "id": 2,
        "name": "Joyner Williams"
      }
    ],
    "greeting": "Hello, Garcia Bishop! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5abce825096b17172352907e",
    "index": 6,
    "guid": "ba2f4144-e903-4b03-9b2f-80b6869e99e4",
    "isActive": true,
    "balance": "$3,476.87",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Ingram Cooper",
    "gender": "male",
    "company": "MELBACOR",
    "email": "ingramcooper@melbacor.com",
    "phone": "+1 (998) 417-2280",
    "address": "783 Gelston Avenue, Kent, Arizona, 6462",
    "about": "Aliquip nisi dolore quis nulla nisi irure nostrud dolor laborum sit id id tempor. Cupidatat laboris est amet culpa exercitation dolore est. Aliqua laborum dolore eiusmod tempor minim irure do ex duis est Lorem. Id ullamco ea commodo pariatur ex incididunt eu ad qui cupidatat exercitation deserunt cillum officia. Minim aliqua cupidatat voluptate dolor tempor excepteur sint tempor. Ex consectetur ullamco officia ea ut et reprehenderit est et in irure exercitation quis.\r\n",
    "registered": "2016-04-26T06:23:56 -03:00",
    "latitude": 80.127545,
    "longitude": -110.931785,
    "tags": [
      "excepteur",
      "officia",
      "eiusmod",
      "deserunt",
      "eu",
      "nisi",
      "sunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ruthie Howell"
      },
      {
        "id": 1,
        "name": "Kimberly Slater"
      },
      {
        "id": 2,
        "name": "Lucinda Keith"
      }
    ],
    "greeting": "Hello, Ingram Cooper! You have 2 unread messages.",
    "favoriteFruit": "banana"
  }
]

const arr2 = [
  {
    "_id": "5abce884f8dadbef2bdffd40",
    "index": 0,
    "guid": "0ab760d6-bc6f-4451-b316-5cab92d5eb8a",
    "isActive": true,
    "balance": "$2,067.99",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Weeks Mcfarland",
    "gender": "male",
    "company": "QUOTEZART",
    "email": "weeksmcfarland@quotezart.com",
    "phone": "+1 (912) 484-2793",
    "address": "755 Charles Place, Ladera, West Virginia, 9081",
    "about": "Commodo qui id duis minim minim ut ullamco irure fugiat. Adipisicing id ut reprehenderit commodo ut excepteur tempor. Labore pariatur Lorem excepteur quis id ipsum adipisicing pariatur fugiat dolore ad cillum. Ea mollit aute qui reprehenderit sunt tempor pariatur labore excepteur. Non minim occaecat consequat eiusmod occaecat amet elit occaecat culpa ad. Ullamco dolor fugiat laboris laboris commodo laborum.\r\n",
    "registered": "2014-05-22T02:15:56 -03:00",
    "latitude": 34.054383,
    "longitude": 38.406529,
    "tags": [
      "adipisicing",
      "ex",
      "aliquip",
      "est",
      "officia",
      "ad",
      "excepteur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nelda Prince"
      },
      {
        "id": 1,
        "name": "Eunice Morrison"
      },
      {
        "id": 2,
        "name": "Stacey Vincent"
      }
    ],
    "greeting": "Hello, Weeks Mcfarland! You have 3 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5abce884f6059118b8988e57",
    "index": 1,
    "guid": "4a346160-a0c8-49c0-9cf4-67dc1fce65c4",
    "isActive": false,
    "balance": "$2,098.24",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Peterson Rodriguez",
    "gender": "male",
    "company": "ZENTURY",
    "email": "petersonrodriguez@zentury.com",
    "phone": "+1 (808) 446-2844",
    "address": "687 McKibbin Street, Roland, Texas, 3924",
    "about": "Commodo excepteur ut voluptate nostrud amet do adipisicing velit aute laboris do exercitation minim. Dolore tempor et do aliqua est ullamco. Voluptate ea dolor exercitation ea qui culpa aute aliqua eu id velit esse sit.\r\n",
    "registered": "2017-06-04T03:02:29 -03:00",
    "latitude": 13.176358,
    "longitude": 103.128533,
    "tags": [
      "aute",
      "tempor",
      "anim",
      "sunt",
      "magna",
      "eu",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Meadows Ward"
      },
      {
        "id": 1,
        "name": "Coffey Cortez"
      },
      {
        "id": 2,
        "name": "Savannah Burgess"
      }
    ],
    "greeting": "Hello, Peterson Rodriguez! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5abce884600adcc5b5413f6b",
    "index": 2,
    "guid": "10ea49b1-bd62-4adb-b926-0147ac7c64dd",
    "isActive": true,
    "balance": "$2,809.22",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": "Vonda Gregory",
    "gender": "female",
    "company": "YURTURE",
    "email": "vondagregory@yurture.com",
    "phone": "+1 (818) 470-3335",
    "address": "999 Flatbush Avenue, Joes, South Carolina, 2017",
    "about": "Ipsum aute voluptate laborum in cupidatat occaecat labore officia qui Lorem sint labore sint. Qui laborum voluptate consequat adipisicing fugiat sunt eiusmod minim. Nulla deserunt sit proident sunt. Anim est eiusmod est velit esse qui pariatur tempor irure dolor magna ad ad.\r\n",
    "registered": "2014-11-22T08:08:46 -02:00",
    "latitude": 25.780828,
    "longitude": 112.796946,
    "tags": [
      "et",
      "ad",
      "ipsum",
      "excepteur",
      "nostrud",
      "nisi",
      "aute"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Moon Abbott"
      },
      {
        "id": 1,
        "name": "Gwendolyn Knowles"
      },
      {
        "id": 2,
        "name": "Patrice Golden"
      }
    ],
    "greeting": "Hello, Vonda Gregory! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5abce884bec13c64fc31cfab",
    "index": 3,
    "guid": "36ca6351-8688-4853-85cf-3b05be3d6fc3",
    "isActive": false,
    "balance": "$1,820.65",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "brown",
    "name": "Gutierrez Mayer",
    "gender": "male",
    "company": "GLUID",
    "email": "gutierrezmayer@gluid.com",
    "phone": "+1 (830) 464-3830",
    "address": "920 Hunterfly Place, Glenbrook, Iowa, 9267",
    "about": "Proident do adipisicing nulla sint mollit magna ad anim. Do esse voluptate ut Lorem aliqua do eiusmod excepteur velit. Est irure laboris velit incididunt mollit. Incididunt non ea proident labore occaecat occaecat nostrud non minim. Reprehenderit nisi sit anim est irure mollit ad cillum laborum ullamco magna proident eu.\r\n",
    "registered": "2017-07-15T06:25:03 -03:00",
    "latitude": 62.894745,
    "longitude": 62.526488,
    "tags": [
      "aute",
      "proident",
      "mollit",
      "incididunt",
      "pariatur",
      "aute",
      "reprehenderit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hamilton Lane"
      },
      {
        "id": 1,
        "name": "Eva Cole"
      },
      {
        "id": 2,
        "name": "Aileen Haynes"
      }
    ],
    "greeting": "Hello, Gutierrez Mayer! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5abce884decea27078af054e",
    "index": 4,
    "guid": "c0b57af3-7b5d-4dcc-9235-ada347495113",
    "isActive": false,
    "balance": "$2,148.42",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "green",
    "name": "Wilcox Benson",
    "gender": "male",
    "company": "GEEKY",
    "email": "wilcoxbenson@geeky.com",
    "phone": "+1 (837) 561-3285",
    "address": "486 Madison Street, Hayes, Wyoming, 8953",
    "about": "Tempor exercitation do est nulla laborum ea. Eiusmod quis sunt cillum duis voluptate eu et tempor culpa. Lorem pariatur proident ex mollit duis. Cupidatat Lorem consectetur laboris sit eiusmod esse laborum.\r\n",
    "registered": "2014-07-05T10:19:04 -03:00",
    "latitude": 22.92907,
    "longitude": -87.317309,
    "tags": [
      "nostrud",
      "in",
      "consectetur",
      "duis",
      "do",
      "cillum",
      "fugiat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mccormick Reeves"
      },
      {
        "id": 1,
        "name": "Faulkner Mathews"
      },
      {
        "id": 2,
        "name": "Paige Wiggins"
      }
    ],
    "greeting": "Hello, Wilcox Benson! You have 2 unread messages.",
    "favoriteFruit": "banana"
  }
]
  // 4.1  создать новый массив данных из объектов в массивах arr1 и arr2 в которых:
    // balance > 2000
    // age < 30
    // eyeColor - blue или brown
    // и которые имеют теги 'velit' и 'anim'

// filterArrays(arr1,arr2)  // [ {...}, {...}, {...} ]

  const filterArrays = function(arr1, arr2) {
    const newArray = [];

    let g = function(index) {
      for(let i = 0; i <index.length; i++) {
        const balance = Math.floor(index[i]['balance'].match(/\d|\./g).join(''));
        const age = index[i].age;
        const eyeColor = index[i].eyeColor;
        const tags = index[i].tags.indexOf( 'velit' && 'anim' ) != -1 ;
  
        if(balance > 2000 && 
          age < 30 && 
          (eyeColor === 'blue' || 'brown') &&
           tags ) {
          newArray.push(index[i]);
        }
      }
    }

    for(let i = 0; i < arguments.length; i++) {
      g(arguments[i]);
    }

    return newArray;
  }
// console.log(filterArrays(arr1, arr2));

  // 4.2  создать новый массив уникальных тегов со всех тегов из массивов arr1 и arr2 и добавить каждому тегу уникальный id. 
// 
// findUniqueTags(arr1, arr2)   // [ { id: 0, name: ‘cillum’}, ……]
// 

const findUniqueTags = function(arr1, arr2) {
  const newArray = [];

  function tags(arr,i) {
    for(let i = 0; i < arr.length; i++) {
      for(let g = 0; g <arr[i].tags.length; g++) {
        newArray.push(arr[i].tags[g]);
      }
    }
  }

  for(let i = 0; i < arguments.length; i++) {
    tags(arguments[i]);
  }

  let obj = {};

  for (let i = 0; i < newArray.length; i++) {
    let str = newArray[i];
    obj[str] = true; 
  }

  const end = [];
  let isn = 0;

  for (const key in obj) {
    const tmp = {};

    tmp.id = isn;
    tmp.name = key;

    end.push(tmp);
    isn++;
  }
  
  return end;
  
}

// console.log(findUniqueTags(arr1, arr2));


  // 4.3  создать функцию, которая будет принимать любое количество массивов и будет возвращать совершенно новый массив который будет включать полную копию всех входящих данных
  // (все соответствующие массивы и объекты будут иметь разные ссылки). для решения использовать массивы arr1 и arr2. 
// 
// copy(arr1, arr2) // newArr1 !== arr1  → true;  newArr1.tags !== arr1.tags → true

const copy = function() {
  const endArr = [];
  for(let i = 0; i < arguments.length; i++) {
    endArr.push(JSON.stringify(arguments[i]));
  }
  for (let i = 0; i < endArr.length; i++) {
      endArr[i] = endArr[i].slice(1, endArr[i].length-1);
  }
  return JSON.parse(JSON.stringify([(endArr.reduce((x, y) => x + y))]));
};