'use strict';

const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];

  
// let theBiggestNumInArr = 0;

// for (var i = 0; i < arr.length; i++) {
//  	if (arr[i] > theBiggestNumInArr) {
//  		theBiggestNumInArr = arr[i] 
//  		}

// } 
// console.log(theBiggestNumInArr);

let theBiggestNumInArr = 0;

for (var i=0; i < arr.length; i++){
	for (var b = 0; i < 3; i++) {
		if (arr[i][b]){
			theBiggestNumInArr > arr[i][b]
		}
	}
}
console.log(theBiggestNumInArr);