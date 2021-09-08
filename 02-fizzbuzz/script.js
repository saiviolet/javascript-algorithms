/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
let result =[];
if (typeof num !== 'number') {console.log(num+' - не число')}
else if (num === 0) {console.log('Ноль не является натуральным числом')}
else {
  for (i = 0; i < num; i++) {
    result[i] = i+1;
    if (result[i] % 3 === 0 && result[i] % 5 === 0) {result[i]='fizzbuzz'}
    else if (result[i] % 3 == 0) {result[i] = 'fizz'}
    else if (result[i] % 5 == 0) {result[i] = 'buzz'}
    console.log(result[i]);
  }
}

}



// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);