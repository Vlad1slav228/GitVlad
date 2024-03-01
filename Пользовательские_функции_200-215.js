// Основы работы с пользовательскими функциями в JavaScript:
// №1 Сделайте функцию, выводящую в консоль ваше имя.
function my_name() {
  console.log("Влад");
}
my_name();

// №2 Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
function numbers() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}
numbers();

// Параметры функций в JavaScript:
// №1 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function numbers(num) {
  console.log(num ** 3);
}
numbers(8);

// №2 Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function digit(num) {
  if (num > 0) {
    console.log("+++");
  } else if (num < 0) {
    console.log("---");
  } else {
    console.log("Число равно нулю");
  }
}
digit(0);

// Несколько параметров функций в JavaScript:
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function digits(dig1, dig2, dig3) {
  console.log(dig1 + dig2 + dig3);
}
digits(1, 2, 3);

// Параметры-переменные функций в JavaScript:
// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами: С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
function func(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);

// Инструкция return в JavaScript:
// №1 Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
function func(num) {
  return num ** 3;
}
let res = func(3);
console.log(res);

// №2 Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
function func(num) {
  return Math.sqrt(num);
}
let sum = func(3) + func(4);
console.log(sum);

// Последовательный вызов функций в JavaScript:
// №1 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части: С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
function sqrt(num) {
  return Math.sqrt(num);
}

function round(num) {
  return num.toFixed(3);
}

let res = round(sqrt(2));
console.log(res);

// №2 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел: С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.
function sqrt(num) {
  return Math.sqrt(num);
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}
let res = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res);

// №3 Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части: С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную res записывалась дробь, округленная до 3-х знаков в дробной части.
function sqrt(num) {
  return Math.sqrt(num);
}

function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

function round(num) {
  return num.toFixed(3);
}
let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);

// Цикл и return в JavaScript:
// Исправьте ошибку автора.
function func(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(func(5));

// Применение return в циклах в JavaScript:
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function divideByTwoUntilLessThanTen(num) {
  let iterations = 0;
  while (num >= 10) {
    num = num / 2;
    iterations++;
  }
  return iterations;
}

const number = 100;
const result = divideByTwoUntilLessThanTen(number);
console.log(
  `Для числа ${number} потребовалось ${result} итераций для достижения значения меньше 10.`
);

// Прием работы с return в JavaScript:
// Дана следующая функция: Перепишите ее в сокращенной форме согласно изученной теории.
function func(num1, num2) {
  if (num1 > 0 && num2 > 0) {
    return num1 * num2;
  } else {
    return num1 - num2;
  }
}
console.log(func(3, 4));

// Флаги в функциях JavaScript:
// №1 Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function isEven(arr) {
  for (let elem of arr) {
    if (elem % 2 !== 0) {
      return false;
    }
  }
  return true;
}
let arr = [4, 2, 6, 4, 2];
console.log(isEven(arr));

// №2 Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function isOdd(arr) {
  for (let elem of arr) {
    if (elem % 2 == 0) {
      return false;
    }
  }
  return true;
}
let arr = [1, 3, 5, 7];
console.log(isOdd(arr));

// №3 Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function isSame(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}
let arr = [1, 3, 3, 5, 7];
console.log(isSame(arr));

// Логические операторы без if в функциях JavaScript:
// №1 Дана следующая функция: Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
  return a == b;
}

// №2 Дана следующая функция: Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
  return a != b;
}

// №3 Дана следующая функция: Перепишите ее код в сокращенной форме согласно изученной теории.
function func(num) {
  return num >= 0;
}

// Советы по созданию функций в JavaScript:
// №1 Напишите, какие недостатки у следующего кода, и исправьте их:
/* 1. Функция называется sum, но на самом деле она вычисляет среднее арифметическое элементов массива, а не их сумму.
   2. Возвращаемое значение - среднее арифметическое элементов массива, а не их сумма.
   3. Если массив пустой, то деление на arr.length приведет к ошибке деления на ноль. */
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0; // возвращаем 0, если массив пустой
  }
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum / arr.length; // возвращаем среднее арифметическое элементов массива
}

// №2 Напишите, какие недостатки у следующего кода, и исправьте их:
/*1. В циклах for используются переменные elem, но вместо этого должны использоваться переменные arr1 и arr2, так как это параметры функции.
  2. Второй цикл вычисляет сумму элементов массива arr вместо arr2.
  3. Если res2 равно нулю, то произойдет деление на ноль, что приведет к ошибке.*/
function func(arr1, arr2) {
  let res1 = 0;

  for (let elem of arr1) {
    res1 += elem;
  }

  let res2 = 0;

  for (let elem of arr2) {
    res2 += elem;
  }

  if (res2 === 0) {
    return 0; // возвращаем 0, если res2 равно 0
  }

  return res1 / res2;
}

// №3 Напишите, какие недостатки у следующего кода, и исправьте их:
/*1. Вместо операции умножения res *= elem; в цикле должна быть операция сложения res += elem;, чтобы правильно вычислить сумму элементов массива.
 2. Название функции getSum немного вводит в заблуждение, так как функция должна вычислять сумму элементов, а не произведение.*/
function getSum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

// Поиск ошибок в коде с функциями JavaScript:
// №1 Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}

console.log(func1() + func2());

// №2 Код должен найти сумму элементов массива:
function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

console.log(sum([1, 2, 3, 4, 5]));

// №3 Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
let arr = [1, 2, 3, 4, 5];

function func(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  console.log(res);
}

func(arr);

// №4 Код должен найти сумму результатов работы двух функций:
function func1() {
  return 3;
}
function func2() {
  return 5;
}

console.log(func1() + func2());

// №5 Код должен найти сумму элементов массива:
function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

let sumResult = sum([1, 2, 3, 4, 5]);
console.log(sumResult);

// №6 Код должен найти сумму элементов массива:
function sum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

let res = sum([1, 2, 3, 4, 5]);
console.log(res);

// №7 Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
function add(num) {
  if (num <= 9) {
    return "0" + num;
  } else {
    return num.toString();
  }
}

// №8 Код должен найти сумму элементов массива:
function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}

let arr = [1, 2, 3, 4, 5];
let sumResult = sum(arr);
console.log(sumResult);

// №9 Код должен найти сумму цифр числа:
let num = "12345";
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
  let arr = num.split("");
  let sum = 0;

  for (let elem of arr) {
    sum += parseInt(elem);
  }

  return sum;
}

// №10 Код должен проверить число на то, что оно является простым:
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(13));

// Практика на функции в JavaScript:
// №1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function sum(arr) {
  let summa = 0;
  for (let elem of arr) {
    summa += elem;
  }
  return summa;
}
let res = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);

// №2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function findDivisors(num) {
  let divisors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }

  return divisors;
}
let number = 6;
let divisorsArray = findDivisors(number);
console.log(`Делители числа ${number}:`, divisorsArray);

// №3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function strArr(str) {
  let string = [];
  for (let i = 0; i < str.length; i++) {
    string.push(str[i]);
  }
  return string;
}

let res = strArr("кипфин");
console.log(res);

// №4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function reverseStr(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
let res = reverseStr("кипфин");
console.log(res);

// №5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function letUp(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
let res = "кипфин";
let newres = letUp(res);
console.log(newres);

// №7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function fillArr(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
num = 13;
let res = fillArr(num);
console.log(res);

// №8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function getDigitsSum(num) {
  let arr = num.split("");
  let sum = 0;

  for (let elem of arr) {
    sum += Number(elem);
  }

  return sum;
}

let num = "52";
let res = getDigitsSum(num);
console.log(res);

// №9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function year(num) {
  if (num == 366) {
    return "Год високосный";
  } else if (num == 365) {
    return "Год не високосный";
  }
}
let res = year(366);
console.log(res);

// №10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function secToDay(sec) {
  let secInDay = 84000;
  let days = Math.floor(sec / secInDay);
  return days;
}

let seconds = 1456789; 
let result = secToDay(seconds);
console.log(result); 

// №11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
function randomElemFromArr(arr) {
  let randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
}
let res = randomElemFromArr(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
console.log(res);

// №12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

let num = 21;
if (isPrime(num)) {
  console.log(num + ' - простое число');
} else {
  console.log(num + ' - не является простым числом');
}




