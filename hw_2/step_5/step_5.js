// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций
// (использовать функции из задания 4) и вернуть полученное значение.

'use strict';
function addition(a,b){
	return a + b;
}



function subtraction(a,b){
	return a - b;
}


function division (a,b) {
	if (b === 0) {
		alert('На ноль делить нельзя');
		return;
	}

	return a / b;
}


function multip(a,b){
	return a * b
}



function mathOperation(arg1,arg2, operation){
	switch (operation){
		case 'addition':
			alert(addition(arg1,arg2));
			break;
		case 'subtraction':
			alert(subtraction(arg1,arg2));
			break;
		case 'division':
			alert(division(arg1,arg2));
			break;
		case 'multip':
			alert(multip(arg1,arg2));
			break;			
	}
}

console.log(mathOperation(1,3, 'multip'));
console.log(mathOperation(1,222, 'division'));