/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let newstr = [];
    let str1 = str.split(' ');
    for (let i = 0; i < str1.length; i++) {
        newstr[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    return newstr.join(' ');
    //дальше элегантно =)
//     const newstr = str
//         .split(' ')
//         .map(item => item.charAt(0).toUpperCase() + item.slice(1))
//         .join(' ');
//  return newstr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"