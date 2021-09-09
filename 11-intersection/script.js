/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    // подумать как упросить через every includes! 
    const arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j< arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr3.push(arr2[j]);
            }
        }
    }
return [...new Set(arr3)]; // подумать как можно еще
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]));