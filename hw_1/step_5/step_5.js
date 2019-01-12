userNumber = prompt('Введите шестизначное чило');
let intUserNumber = +userNumber;
console.log("Введенное число " + intUserNumber);

// let lastNumber = intUserNumber % 10;
// console.log(lastNumber);
let firstThreeNums = parseInt(intUserNumber / 1000);
console.log(firstThreeNums)

let sumFirst_nums = 0;

for (var key in firstThreeNums) {
	sumFirst_nums + key
}
console.log(sumFirst_nums);

let lastThreeNums = (intUserNumber / 1000)* 100;
console.log(lastThreeNums);