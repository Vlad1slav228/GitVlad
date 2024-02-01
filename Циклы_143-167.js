// Перебор массива циклом for-of в JavaScript
// Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
    console.log(elem);
}

// Перебор объекта циклом for-in в JavaScript
// №1 Выведите в консоль все ключи следующего объекта:
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    console.log(key);
}

// №2 Выведите в консоль все элементы следующего объекта:
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    console.log(obj[key]);
}

// Цикл while в JavaScript: 
// №1 Выведите в консоль числа от 1 до 100.
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}

// №2 Выведите в консоль числа от 11 до 33.
let i = 11;
while (i <= 33) {
    console.log(i);
    i++;
}

// №3 Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 1;
let iter = 0;
while (num <= 1000) {
  num *= 3;
  iter++;
}
console.log("Число после умножения: " + num);
console.log("Количество итераций: " + iter);

// Цикл for JavaScript
// №1 С помощью цикла for выведите в консоль числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// №2 С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// №3 С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// №4 С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

// №5 С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// Цикл for для массивов в JavaScript: 
// №1 Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// №2 Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i]);
}

// №3 Выведите в консоль элементы следующего массива в обратном порядке:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// №4 Исправьте ошибку, допущенную в следующем коде:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// Условия в циклах в JavaScript
// №1 Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr) {
    if (elem >= 3 && elem <= 10) {
        console.log(elem);
    }
}

// №2 Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let elem in obj) {
    if (obj[elem] % 2 !== 0) {
        console.log(obj[elem]);
    }
}

// Накопление чисел в циклах JavaScript
// №1 Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i <= 100; i++) {
	if (i % 2 === 0) {
    res = res + i;
  }
}
console.log(res);

// №2 Найдите сумму нечетных чисел от 1 до 99.
let res = 0;
for (let i = 1; i <= 99; i++) {
	if (i % 2 !== 0) {
    res = res + i;
  }
}
console.log(res);

// №3 Найдите произведение целых чисел от 1 до 20.
let res = 1;
for (let i = 1; i <= 20; i++) {
	res *= i;
}
console.log(res);

// Накопление элементов массивов в циклах JavaScript: 
// №1 Найдите сумму элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res);

// №2 Найдите сумму элементов элементов, являющихся четными числами.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	if (elem % 2 === 0) {
    res += elem;
  }
}
console.log(res);

// №3 Найдите сумму квадратов элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  res += arr[i] * arr[i];
}
console.log(res);

// №4 Найдите произведение элементов этого массива.
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let i = 0; i <= arr.length - 1; i++) {
  res *= arr[i];
}
console.log(res);

// Формирование строк через циклы в JavaScript: 
// №1 С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str);

// №2 С помощью цикла сформируйте строку '123456789'.
let str = '';
for (let i = 1; i <= 9; i++) {
	str += i;
}
console.log(str);

// №3 С помощью цикла сформируйте строку '987654321'.
let str = '';
for (let i = 9; i > 0; i--) {
  str += i;
}
console.log(str);

// №4 С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str = '';
for (let i = 1; i <= 9; i++) {
	str += '-' + i;
}
console.log(str);

// Цифры числа при переборе циклом JavaScript: 
// №1 Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
  console.log(str[0])
}

// №2 Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
for (let i = 10; i <= 1000; i++) {
    let numberString = String(i);
    if (numberString.length >= 2) {
      let firstDigit = parseInt(numberString[0]);
      let secondDigit = parseInt(numberString[1]);
      let sum = firstDigit + secondDigit;
      console.log(sum);
    }
}

// №3 Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	if (str[0] === '1') {
		console.log(i);
	}
}

// №4 Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
    let numberString = String(i);
    if (numberString.length >= 2) {
      let firstDigit = parseInt(numberString[0]);
      let secondDigit = parseInt(numberString[1]);
      let sum = firstDigit + secondDigit;
      if (sum === 5) {
        console.log(i);
      }
    }
}

// Инструкция break в JavaScript: 
// №1 Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
let arr = [1, 2, 3, 0, 5];
for (let elem of arr) {
	if (elem == 0) {
    break;
	}
  console.log(elem);
}

// №2 Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr = [1, 2, 3, -10, 5];
let sum;
for (let elem of arr) {
  if (elem < 0) {
      break;
    }
    sum += elem;
}
console.log(sum);

// №3 Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let arr = [1, 2, 4, 8, 5, 6, 9, 7, 4, 3];
let index;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) {
        index = i;
        break;
    }
}
console.log(index);

// №4 Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let sum = 0; 
let count = 0;
for (let i = 1; ; i++) {
    sum += i;
    count++;
    if (sum > 100) {
        break;
    }
}
console.log("Количество слагаемых: " + count);

// Вложенные циклы в JavaScript:
// №1 С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

// №2 С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
      document.write(" " + i + j);
  }
}

// Заполнение массива в JavaScript: 
// №1 Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

// №2 Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push('x');
}
console.log(arr);

// №3 Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr1 = [-1, 2, -3, 4, -5, 6];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);

// Изменение массива в цикле JavaScript: 
// №1 Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2;
}
console.log(arr);

// №2 Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - 1;
}
console.log(arr);

// №3 Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 10;
}
console.log(arr);

// Заполнение объектов через цикл в JavaScript: 
// №1 Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами: С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for (let i = 0; i <= 6; i++) {
  let day = arr1[i];
  let digit = arr2[i];

  obj[day] = digit;
}
console.log(obj);

// №2 Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};
for (let key in obj) {
  if (obj[key] % 2 === 0) {
    newObj[key] = obj[key];
  }
}
console.log(newObj);

// №3 Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let newObj = {};
for (let key in obj) {
  newObj[obj[key]] = key;
}
console.log(newObj);

// Изменение объектов через цикл в JavaScript: 
// №1 Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
  obj[key] = obj[key] ** 2;
}
console.log(obj);

// №2 Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
  obj[key] = obj[key] + 1;
}
console.log(obj);

// Работа с флагами в JavaScript:
// №1 Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'c') {
    flag = true;
    break;
  }
}

if (flag) {
  console.log('+++');
} else {
  console.log('---');
}

// №2 Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
let num = 17; // Замените это число на то, которое вы хотите проверить
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + ' - простое число');
} else {
  console.log(num + ' - не является простым числом');
}

// Советы по написанию кода циклов в JavaScript: 
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let elem of arr) {
  let firstDigit = parseInt(String(elem)[0]); 
  if (firstDigit === 1 || firstDigit === 2) {
    sum += elem; 
  }
}

console.log(sum);

// Советы по отладке кода на примере циклов в JavaScript: 
// Исправьте ошибки, допущенные в следующем коде:
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
let str = String(obj[elem]);
if (str[0] === '1' || str[0] === '2') {
sum += +str;
}
}
console.log(sum);

// Поиск ошибок в коде с циклами JavaScript: 
// №1 Код должен вывести числа от 0 до 10:
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// №2 Код должен вывести числа от 10 до 0:
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// №3 Код должен вывести числа от 10 до 0:
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// №4 Код должен вывести числа от 0 до 10:
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}

// №5 Код должен найти сумму целых чисел от 1 до 10:
let res = 0;
for (let i = 1; i <= 10; i++) {
  res += i;
}
console.log(res);

// №6 Код должен найти произведение целых чисел от 1 до 10:
let res = 1;
for (let i = 1; i <= 10; i++) {
  res *= i;
}
console.log(res);

// №7 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
	sum += +elem;
}
console.log(sum);

// №8 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); 

// №9 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem;
}
console.log(sum); // должно вывести 15

// №10 Код должен найти сумму элементов массива, однако, всегда выводит NaN:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); 

// №11 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); 

// №12 Код должен найти сумму элементов массива:
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum); 

// №13 Код должен возвести в квадрат каждый элемент массива:
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2;
}

console.log(arr);

// №14 Код должен заполнить массив числами от 1 до 5:
let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);

// №15 Код должен найти сумму элементов объекта:
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}

console.log(sum); 

// №16 Код должен найти сумму элементов объекта:
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
  sum += obj[key];
}

console.log(sum);

// №17 Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
  if (elem === 3) {
    res = '+++';
    break;
  } else {
    res = '---';
  }
}

console.log(res); 

// №18 Код должен заполнить массив числами от 1 до 5:
let arr = [];

for (let i = 1; i <= 5; i++) {
  arr.push(i);
}

console.log(arr);

// №19 Код должен проверить, есть ли в массиве число 3 или нет:
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
  if (elem === 3) {
    res = true;
    break;
  }
}

console.log(res);

// №20 Код должен вывести только четные элементы из массива:
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
  if (elem % 2 === 0) {
    console.log(elem);
  }
}

// №21 Код должен записать в новый массив только нечетные элементы старого массива:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
  if (elem % 2 !== 0) {
    res.push(elem);
  }
}

console.log(res);

// Отработка циклов JavaScript: 
// №1 Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// №2 Выведите с помощью цикла столбец чисел от 100 до 1.
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

// №3 Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// №4 Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i = 1; i <= 10; i++) {
	arr.push('x');
}
console.log(arr);

// №5 Заполните массив числами от 1 до 10 с помощью цикла.
let arr = [];

for (let i = 1; i <= 10; i++) {
  arr.push(i);
}

console.log(arr);

// №6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [2, 53, 28, 9, 3, 1];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

// №7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [2, 5, 8, 10, 3, 1];
let hasFive = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    hasFive = true;
    break;
  }
}
console.log(hasFive);

// №8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [7, 6, 9, 10, 4, 1];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// №9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr = [2, 5, 8, 10, 3, 6];
let sumOfSquares = 0;
for (let i = 0; i < arr.length; i++) {
  sumOfSquares += arr[i] ** 2;
}
console.log(sumOfSquares);

// №12 Заполните массив числами от 10 до 1 с помощью цикла.
let arr = [];
for (let i = 10; i >= 1; i--) {
  arr.push(i);
}
console.log(arr);

// №13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arr = [2, -5, -8, 10, -3, 1];
let positiveSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positiveSum += arr[i];
  }
}
console.log(positiveSum);

// №14 Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  let firstDigit = parseInt(arr[i].toString()[0]);
  if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
    console.log(arr[i]);
  }
}

// №15 Дан массив с числами. Выведите элементы этого массива в обратном порядке.
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// №16 Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let arr = [0, 1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
if (arr[i] === i) {
console.log(arr[i]);
}
}

// №17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
let arr = [1, 'a', true];
for (let i = 0; i < arr.length; i++) {
document.write(arr[i] + '<br>');
}

// №18 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
let arr = [1, 'a', true];
for (let i = 0; i < arr.length; i++) {
document.write('<p>' + arr[i] + '</p>');
}

// №19 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i = 0; i < daysOfWeek.length; i++) {
if (i >=5) {
document.write('<strong>' + daysOfWeek[i] + '</strong><br>');
} else {
document.write(daysOfWeek[i] + '<br>');
}
}

// №20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = new Date().getDay(); 
for (let i = 0; i < daysOfWeek.length; i++) {
if (i === day) {
document.write('<em>' + daysOfWeek[i] + '</em><br>');
} else {
document.write(daysOfWeek[i] + '<br>');
}
}

// №21 Увеличьте зарплату каждого работника на 10%.
let obj = {
employee1: 100,
employee2: 200,
employee3: 300,
employee4: 400,
employee5: 500,
employee6: 600,
employee7: 700,
};
for (let key in obj) {
obj[key] *= 1.1;
}
console.log(obj);

// №22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7:700,
  };
  for (let key in obj) {
  if (obj[key] <=400) {
  obj[key] *=1.1;
  }
  }
console.log(obj);

// №23 С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let newObj = {};
for (let i=0;i<arr1.length;i++){
newObj[arr1[i]] = arr2[i];
}
console.log(newObj);

// №24 Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1:6,2:7,3:8,4:9,5:10};
let sumOfKeys=0;
let sumOfValues=0;
for(let key in obj){
sumOfKeys+=parseInt(key);
sumOfValues+=obj[key];
}
console.log(sumOfKeys/sumOfValues);

// №25 Запишите ключи этого объекта в один массив, а значения - в другой.
let obj = {'a':1,'b':2,'c':3,'d':4,'e':5};
let keysArr=[];
let valuesArr=[];
for(let key in obj){
keysArr.push(key);
valuesArr.push(obj[key]);
}
console.log(keysArr);
console.log(valuesArr);

// №26 Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
let obj = {1:125,2:225,3:128,4:356,5:145,6:281,7:452};
let newArr=[];
for(let key in obj){
if(obj[key].toString().startsWith('1') || obj[key].toString().startsWith('2')){
newArr.push(obj[key]);
}
}
console.log(newArr);

// №27 Создайте из этого массива следующий объект:
let arr=['a','b','c','d','e'];
let newObj={};
for(let i=0;i<arr.length;i++){
newObj[i+1]=arr[i];
}
console.log(newObj);

// №28 Создайте из этого массива следующий объект:
let arr=['a','b','c','d','e'];
let newObj={};
for(let i=0;i<arr.length;i++){
newObj[arr[i]]=i+1;
}
console.log(newObj)









 
















