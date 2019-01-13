// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами.
// Обязательно использовать оператор return.

'use strict';

function addition(a,b){
	return a + b;
}

console.log(addition(12,7));

function subtraction(a,b){
	return a - b;
}
console.log(subtraction(-12,-12));

function division (a,b) {
	if (b === 0) {
		alert('На ноль делить нельзя');
		return;
	}

	return a / b;
}

console.log(division(12,0))
function multip(a,b){
	return a * b
}
console.log(multip(1,12))