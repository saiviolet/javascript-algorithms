/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    if (n <= 0) return false;
    switch (n) {
        case 1: return 0;
        case 2: 
        case 3: return 1;
        default: return (fibonacci(n - 1) + fibonacci(n - 2));
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(0)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)