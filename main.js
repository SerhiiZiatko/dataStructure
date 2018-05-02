function customReverse(str) {
	return str.split('').reverse().join('');


	// Второй вариант

	// let reverseStr = '';
	//
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	reverseStr += str[i];
	// }
	//
	// return reverseStr;
}


function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}


function ucWords(str) {
	let arr = str.split(' ');

	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
	}

	return arr.join(' ');

	// Второй вариант

	// let arr = str.split(' ');
	// let strFirstLetterUpper = '';

	// arr.forEach(function (item) {
	// 	strFirstLetterUpper += ucFirst(item) + ' ';
	// })

	// return strFirstLetterUpper;
}

function customRound(num) {
	return +num.toFixed(8);
}

function isEmail(str) {

	let atIndex = str.indexOf('@');
	let lastDotIndex = str.lastIndexOf('.');


	if(atIndex < 0 || str.indexOf('.') < 0) return false;
	if(lastDotIndex < atIndex)	return false;
	if(atIndex < 3) return false;
	if(lastDotIndex - atIndex < 4) return false;
	if(str.slice(lastDotIndex + 1).length < 2) return false;

	return true;

}

function isUrl(str) {
	let lastDotIndex = str.lastIndexOf('.');

	if(str.slice(lastDotIndex + 1).length < 2) return false;
	if(str.slice(0, lastDotIndex).length < 2) return false;

	return true;
}

function isDate(str) {
	if(new Date(str) == 'Invalid Date') return false;
	return true;
}

function isPhoneNumber (str){
	let phoneNumber = str.match(/\d/g).join('');
	if(phoneNumber.indexOf('380') != 0 || phoneNumber.length != 12) return false;
	return true;
}
















