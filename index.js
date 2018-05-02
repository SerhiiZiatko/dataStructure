function reverse(str){
    return str.split("").reverse().join("")
}
console.log(reverse('abcde')); //выведет 'edcba'


function ucFirst(str){
    return newStr = str[0].toUpperCase() + str.substr(1)
}
console.log(ucFirst('abcde')); //выведет 'Abcde'


function ucWords(str){
    const newEl = str.split(" ").reduce((acc, el) => {
       return acc = acc.concat(el[0].toUpperCase() + el.substr(1))
    }, [])
return newEl.join(" ")
}
console.log(ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

function round(value) {
    value = value.toFixed(8);

    if (value.indexOf('.') === -1) {
        return value;
    }

    while((value.slice(-1) === '0' || value.slice(-1) === '.') && value.indexOf('.') !== -1) {
        value = value.substr(0, value.length - 1);
    }
    return value;
}
console.log(round(3.141592653589793)); //выведет 3.14159265
console.log(round(0.1 * 0.2)); //выведет 0.02 а не '0.02000000'

function isEmail(str){
    const regExp = /.{3,}\@.{3,}\..{2,}/
    return regExp.test(str) ? true : false
}
console.log(isEmail("html@gmail.com")); // true
console.log(isEmail("h@g.com")); // false
console.log(isEmail("html@gmail")); // false

function isUrl (str){
    const regExp = /.{4}(\:\/\/.{4})?\..{3}/
    return regExp.test(str) ? true : false
}

console.log("isUrl", isUrl('http://html.net')); // true
console.log(isUrl('html.net')); // true
console.log(isUrl('html')); // false

function isDate (str){
    const regExp =/^(\d{2}[\.|\-|\/]{1}){2}\d{4}$/
    return regExp.test(str) ? true : false
}
function isPhoneNumber(str){
    const regExp = /^\+[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{7}$/
    return regExp.test(str) ? true : false
}
console.log("-->", isDate('12.05.2020')); // true
console.log("-->", isDate('12-05-2020')); // true
console.log("-->", isDate('12/05/2020')); // true
console.log("-->", isDate('dfsdfsdf')); // false

console.log(isPhoneNumber('+380989817689')); // true
console.log(isPhoneNumber('+380 98 9817689')); // true
console.log(isPhoneNumber('0000989817689')); // false

/-------------3-------------/
//3.1 Написать функцию, которая принимает аргументом строку и возвращает массив объектов
//    createPatternArray("red 1 yellow 2 black 3 white 4")
//    //  [{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]

function createPatternArray(str){
    const st = str.split(" ");
    let arr = [];
    for(let r =0; r<st.length; r = r+2 ){
        let obj = {};
        obj.name = st[r]
        obj.id = st[r+1]
        arr = [...arr, obj]
        console.log(JSON.stringify(arr))
    }
    return arr
}
console.log(createPatternArray("red 1 yellow 2 black 3 white 4"))


// 3.2 Написать функцию, которая принимает два массива arr1 (любые элементы) и arr2 (только целые числа). Функция возвращает массив элементов из arr1, индексы которых представлены, во втором массиве.

function findArray (arr1, arr2) {
    return arr2.reduce((acc, item) => {
        if(item && Number.isInteger(item)){
        arr1.find((el, index) => {
            if(index && index === item){
                acc = [...acc, el]
            }
        })}
        return acc
    }, [])
}

console.log(findArray(["a", "b", "c", "d"], [2,2]))

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4])) // ['a', 'a']
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7])) // [1, 1, 1]
console.log(findArray([1, 2, 3, 4, 5], [2,2,2]))               // [3,3,3]

findArray([1,2,3], []) // []
findArray([], [2,1,3]) // []
findArray([], [])      // []

//3.3 Написать функцию, которая принимает массив строк из одинаковых букв и возвращает новый массив,  который будет отличаться тем, что длина каждого элемента равна средней длине элементов предыдущего массива.
//
//    ['u', 'y'] =>  ['u', 'y'] // average length is 1
//    ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
//    ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
//

function helper(el, ev){
    return el.padEnd(ev, el)
}

function a (arr) {
    const l = arr.reduce((acc, el) => acc = [...acc, ...el]).length
    const s = Math.round(l/arr.length)
    console.log(s, l, arr.length)
    const sp = arr.reduce((acc, el) => {
        const item = helper(el[0], s)
        acc = [...acc, item]
        console.log("-->", el[0])
        return acc
    }, [])
    return sp
}

console.log(a(['u', 'y']))
console.log(a(['aa', 'bbb', 'cccc']))
console.log(a(['aa', 'bb', 'ddd', 'eee']))

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

function filterArrays(ar1, ar2){
    const ar = [...ar1, ...ar2]

    return ar.reduce((acc, el) => {
        if((reg(el.balance))
            && (el.age < 30)
            && (el.eyeColor == "blue" || el.eyeColor == "brown")
            && el.tags.includes("anim")
            && el.tags.includes("velit")) {
                acc = acc.concat(el)
        }
        return acc
    }, [])
}

function reg(str){
    const regExp = /(\$)?(\d{1,})\,(\d{3,})\.(\d{2,})/
    return str.replace(regExp, '$2$3$4')
}
console.log(filterArrays(arr1, arr2))  // [ {...}, {...}, {...} ]
// filterArrays([{a:1, d:2, f:3}, {a:4, d:2, f:3}],[{a:1, d:2, f:3}, {a:4, d:2, f:3}])  // [ {...}, {...}, {...} ]

function findUniqueTags(ar1, ar2) {
    let d = []

    const ar = [...ar1, ...ar2]
    const r = ar.reduce((acc, el) => {
        return acc = [...acc, ...el.tags]
    }, [])

    let set = [...new Set(r)]

    for(let i = 0; i < set.length; i++){
        d.push({id: i, name: set[i]});
    }
    return d
}

console.log(findUniqueTags(arr1, arr2))   // [ { id: 0, name: ‘cillum’}, ……]

// 4.3  создать функцию, которая будет принимать любое количество массивов и будет возвращать совершенно новый массив который будет включать полную копию всех входящих данных(все соответствующие массивы и объекты будут иметь разные ссылки). для решения использовать массивы arr1 и arr2.
//
// copy(arr1, arr2) // newArr1 !== arr1  → true;  newArr1.tags !== arr1.tags → true


function copy() {
    let r = []
    let r1 = []
    for (let i = 0; i < arguments.length; i++) {
        r.push(...arguments[i])
    }
    console.log(r)
    for (let i = 0; i < r.length; i++) {
        const newObj = JSON.parse(JSON.stringify(r[i]))
        console.log(newObj, r[i])
        console.log(newObj.tags === r[i].tags)
        console.log(newObj.tags == r[i].tags)
        r1.push(newObj)
    }
    return r1
}
 copy(arr1, arr2)



function makeW1(fontWidth, height) {
    let arr = [];
    for (let i = 0; i < height; i++) {
        arr[i] = (' '.repeat(i) + '*'.repeat(fontWidth) + ' '.repeat(height-1-i));
    }
    for (let i = 0, j = height-1; i < height, j >= 0; i++, j--) {
        arr[i] = arr[i] + arr[j];
    }
    let len = arr[0].length;
    for (let i = 0; i < height; i++) {
        arr[i] = arr[i].slice(0, len);
    }
    for (let i = 0; i < height; i++) {
        arr[i] = arr[i].repeat(2);
    }
    return arr;
}























