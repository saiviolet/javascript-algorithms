/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
//пока не работает!
    const arr = [];
    for(let i = 2; i <= num; i++) {
        if (i == 2) arr[i] = i
        else if (i % 2 == 0)  arr[i] = false
        else arr[i] = i;
    }
    return arr.filter(Boolean);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]