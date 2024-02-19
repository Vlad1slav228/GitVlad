// Степень и корень в JavaScript:
// №1 Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));

// №2 Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

// №3 Дан массив. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(Math.sqrt(sum));

// Функции округления в JavaScript: 
// №1 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
console.log(Math.sqrt(379));
console.log(Math.sqrt(379).toFixed());
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));

// №2 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
console.log(Math.sqrt(587));
let result = {
    floor: Math.floor(Math.sqrt(587)),
    ceil: Math.ceil(Math.sqrt(587))
  };
console.log(result);

// Экстремальные числа в JavaScript:
// №1 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// Рандом в JavaScript: 
// №1 Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

// №2 С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100); // Генерация случайного числа от 0 до 99
  arr.push(randomNumber);
}
console.log(arr);

// Модули в JavaScript:
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a = Math.abs(-6);
let b = Math.abs(-4);
console.log(a - b);

// Регистр символов в JavaScript: 
// №1 Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = 'js';
console.log(str.toUpperCase());

// №2 Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = 'JS';
console.log(str.toLowerCase());

// Вырезание строк в в JavaScript:
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javascript!';

// Способ 1: через substr
let word1 = str.substr(2, 3); // начиная с 2-го символа вырезаем 3 символа
let word2 = str.substr(6, 10); // начиная с 6-го символа вырезаем 10 символов
console.log(word1);
console.log(word2); 

// Способ 2: через substring
let word3 = str.substring(2, 5); // c 2-го по 5-й символ включительно
let word4 = str.substring(6, 16); // c 6-го по 16-й символ включительно
console.log(word3); 
console.log(word4); 

// Способ 3: через slice
let word5 = str.slice(2, 5); // c 2-го по 5-й символ включительно
let word6 = str.slice(6, -1); // c 6-го символа до предпоследнего
console.log(word5); 
console.log(word6); 

// Поиск по строкам в JavaScript:
// №1 Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let str = 'http://aboba.com';
let res = str.startsWith('http://');
console.log(res);

// №2 Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let str = 'http://champion.htkl';
let res = str.endsWith('html');
console.log(res);

// Замена частей строки в JavaScript:
// Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
let elem = '-';
let str = '1-2-3-4-5';
while (str.includes(elem)) {
	str = str.replace(elem, '.');
}
console.log(str);

// Части строк в JavaScript:
// №1 Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
let str = '1-2-3-4-5';
let res = str.split('-');
console.log(res);

// №2 Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str = '12345';
let res = str.split('');
console.log(res);

// №3 Дан массив. С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
let res = arr.join('-');
console.log(res);

// Граничные элементы в JavaScript:
// №1 Дан массив. Выведите на экран первый элемент этого массива.
let arr = [1, 2, 3];
let res = arr.shift();
console.log(res);

// №2 Дан массив. Выведите на экран последний элемент этого массива.
let arr = [1, 2, 3];
let res = arr.pop();
console.log(res);

// №3 Дан массив. Добавьте ему в конец элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// №4 Дан массив. Добавьте ему в начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// Части массивов в JavaScript: 
// №1 Дан массив. Сделайте из этого массива следующий:
let arr = [1, 2, 3, 4, 5];
let sub = arr.slice(0, 3);
console.log(sub);

// №2 Дан массив. Используя этот массив, запишите в новую переменную следующий массив:
let arr = [1, 2, 3, 4, 5];
let sub = arr.slice(-2);
console.log(sub);

// Вырезание массивов в JavaScript:
// №1 Дан массив. С помощью метода splice преобразуйте массив в следующий:
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// №2 Дан массив. С помощью метода splice сделайте из него массив:
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// №3 Дан массив. С помощью метода splice сделайте из него массив:
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

// Поиск по массивам в JavaScript:
// Дан массив. Проверьте, есть ли в этом массиве число 3.
let arr = [1, 2, 3, 4, 5];
let res = arr.includes(3);
console.log(res);

// Массив ключей объекта в JavaScript:
// Дан объект. Получите массив его ключей.
let obj = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj));

// Поиск ошибок в коде со стандартными методами JavaScript:
// №1 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);

// №2 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);

// №3 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);

// №4 Код должен найти сумму цифр числа:
let num = 12345;
let arr = String(num).split('');
let sum = 0;
for (let digit of arr) {
	sum += Number(digit);
}

console.log(sum);

// №5 Код должен найти произведение цифр числа:
let num = 12345;
let arr = String(num).split('');
let prod = 1;
for (let digit of arr) {
	prod *= Number(digit);
}

console.log(prod);












 
















 
