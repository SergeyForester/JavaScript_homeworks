'use strict';

let i = 0;
do{
if (i === 0){
	console.log(`${i} - это ноль.`);
}else if(i % 2 === 0){
	console.log(`${i}- Это четное число`);
}else{
	console.log(`${i} - Это нечетное число`);
}

i++;
}while(i < 11);