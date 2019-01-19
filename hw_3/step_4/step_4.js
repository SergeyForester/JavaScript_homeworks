'use strict';

nextLoop:
for (let number = 2; number <= 100; number++) {
  	for (let i = 2; i < number; i++) {
  		if (number % i == 0){
  			continue nextLoop;
  		}
  	}
  	console.log(number);
}  

