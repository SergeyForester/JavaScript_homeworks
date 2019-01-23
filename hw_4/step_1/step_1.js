'use strict';

function getDigitOfNumber (number) {
	if (Number.isInteger(number)) {
		if (number < 999 && number > 0) {
			let num = String(number).split("");
			let dict = {
				firstDigit: num[2],
				secondDigit:  num[1],
				thirdDigit: num[0],
			};
			for (let x in dict) {
				if (undefined == x) {
					x = 0;
				}
			}
			return dict;

	} else {
		console.log('Error');
		return {};
	}
	}
}

// console.log(getDigitOfNumber(122));
console.log(getDigitOfNumber(12));

