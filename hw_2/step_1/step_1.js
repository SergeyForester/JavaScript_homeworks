'use strict';

// Объясните почему код даёт именно такие результаты?
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // 2 a =1 Значит запись ++а это увеличение числа на 1, 1 + 1 = 2
d = b++;
alert(d); // 1 d = null мы к ничему прибавляем 1 и получаем 1
c = 2 + ++a;
alert(c); // 5 а = 1 но в прошлом примере есть запись ++а(и а стало = 2) записью
//  2 + ++а мы прибавили к двум увеличенную на 1 а
d = 2 + b++;
alert(d); // 4 b = 1 , к b прибавляем 1 и получаем 2, 2 + 2 = 4 
alert(a); // 3 а=1 но после операций ++а ... ++а, мы получили 1+1+1=3
alert(b); // 3 b=1 но потом мы изменяли эту переменную "b++ ... b++" и выходит 1+1+1=3