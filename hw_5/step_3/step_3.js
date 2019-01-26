'use strict';

function nameValidation () {
	let name = document.getElementById('name');
	if (name.value.length >= 1 && name.value.length < 50) {
		return true;
	} else {
		alert('Минимальная длина имени - 1 символов');
		
	}
}

function phoneValidation () {
	let phone = document.getElementById('phone');
	if (phone.value.length === 11) {
		return true;
	} else {
		alert('Длина номера 11 символов');
		return false;
	}
}

function passValidation () {
	let password = document.getElementById('password');
	if (password.value.length > 5 && password.value.length < 50) {
		return true;
	} else {
		alert('Минимальная длина пароля 5 символов');
		return false;
	}
}

function repeatPassValidation () {
	let password = document.getElementById('password');
	let passwordRepeat = document.getElementById('password_repeat');
	if (password.value === passwordRepeat.value) {
		return true;
	} else {
		alert('Пароли не совпадают');
		return false;
	}
}

function mainValidation () {
	nameValidation();
	phoneValidation();
	passValidation();
	repeatPassValidation();

	// if (!nameValidation()) {
	// 	let div = document.createElement("div");
	// 	div.className = "invalid-feedback";
	// 	div.innerHTML = "<h1>Минимальная длина имени - 1 символ</h1>";
	// 	name.appendChild(div)
	// }
}