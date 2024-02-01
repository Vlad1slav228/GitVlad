// Операторы больше и меньше в JavaScript: 
// №1 Проверьте, что переменная test больше 10.
let test = 11;
if (test > 10) {
    console.log('Больше');
}
else {
    console.log('Меньше');
}

// №2 Проверьте, что переменная test меньше 10.
let test = 3;
if (test < 10) {
    console.log('Меньше');
}
else {
    console.log('Больше');
}

// №3 Проверьте, что переменная test больше или равна 10.
let test = 13;
if (test >= 10) {
    console.log('+++');
}
else {
    console.log('---');
}

// №4 Проверьте, что переменная test меньше или равна 10.
let test = 3;
if (test <= 10) {
    console.log('---');
}
else {
    console.log('+++');
}

// Проверка на равенство в JavaScript: 
// Проверьте, что переменная test равна 10.
let test = 10;
if (test == 10) {
	console.log('Равна'); 
} else {
	console.log('Не равна');
}

// Проверка на неравенство в JavaScript: 
// Проверьте, что переменная test не равна 10.
let test = 5;
if (test != 10) {
	console.log('+++');
} else {
	console.log('---');
}

// Сравнение переменных в JavaScript: 
// №1 Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
let test1 = 24;
let test2 = 6;
if (test2 > test1) {
    console.log('+++');
}
else {
    console.log('---');
}

// №2 Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test1 = 16;
let test2 = 16;
if (test1 == test2) {
    console.log('Равны');
}
else {
    console.log('Не равны');
}

// Равенство строк в JavaScript: 
// Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test1 = 'zxcv';
let test2 = 'asdf';
if (test1 == test2) {
    console.log('+++');
}
else {
    console.log('---');
}

// Равенство строк и чисел в JavaScript: 
// Проверьте, равны ли значения переменных и выведите соответствующее сообщение.
let test1 = '123';
let test2 = 123;
if (test1 == test2) {
	console.log('+++'); 
} else {
	console.log('---');
}

// Логическое И в JavaScript: 
// №1 Проверьте, что переменная num больше нуля и меньше 5.
let num = 2;
if (num > 0 && num < 5) {
    console.log('+++');
}
else {
    console.log('---');
}

// №2 Проверьте, что переменная num больше или равна 10 и меньше или равна 20.
let num = 15;
if (num >= 10 && num <= 20) {
    console.log('+++');
}
else {
    console.log('---');
}

// №3 Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let num1 = -6;
let num2 = 3;
if (num1 <= 1 && num2 >= 3) {
    console.log('+++');
}
else {
    console.log('---');
}

// Группировка условий в JavaScript: 
// №1 В приведенном ниже коде укажите приоритет операций в явном виде:
let num = 3;
if (num > 5 && (num < 10 || num == 20)) {
	console.log('+++');
} else {
	console.log('---');
}

// №2 В приведенном ниже коде укажите приоритет операций в явном виде:
let num = 3;
if ((num > 5 || num > 0) && num < 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №3 В приведенном ниже коде укажите приоритет операций в явном виде:
let num = 3;
if (num == 9 || num > 10 && (num < 20 || num > 20) && num < 30) { 
	console.log('+++');
} else {
	console.log('---');
}

// Инвертирование логических выражений в JavaScript
 // Используя оператор ! инвертируйте приведенное условие.
 if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

// Условия с булевыми значениями в JavaScript: 
// №1 Проверьте, что переменная test равна true.
let test = true;
if (test === true) {
    console.log('+++');
}
else {
    console.log('---');
}

// №2 Проверьте, что переменная test равна false.
let test = false;
if (test === false) {
    console.log('+++');
}
else {
    console.log('---');
}

// Сокращенная форма проверки на истину в JavaScript
// Перепишите следующий код с использованием сокращенной формы:
let test = true;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}

// Сокращенная форма проверки на ложь в JavaScript
// №1 Перепишите следующий код с использованием сокращенной формы:
let test = true;
if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

// №2 Перепишите следующий код с использованием сокращенной формы:
let test = true;
if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

// №3 Перепишите следующий код с использованием сокращенной формы:
let test = true;
if (test) {
	console.log('+++');
} else {
	console.log('---');
}

// Сложные условия в сокращенной форме в JavaScript: 
// №1 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

// №2 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

// №3 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
if (!test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

// №4 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
if (!(!test1) && test2) {
	console.log('+++');
} else {
	console.log('---');
}

// №5 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
let test3 = true;
if (test1 && test2 && test3) {
    console.log('+++');
} else {
	console.log('---');
}

// №6 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
let test3 = true;
if (test1 || test2 && test3) {
    console.log('+++');
} else {
	console.log('---');
}

// №7 Перепишите следующий код в сокращенной форме:
let test1 = true;
let test2 = true;
let test3 = true;
if (test1 || !test2 && !test3) {
    console.log('+++');
} else {
	console.log('---');
}

// Необязательность конструкции else в JavaScript
// Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.
let test = 10;
if (test == 10) {
	console.log('yes');
}

// Необязательность фигурных скобок в JavaScript
// №1 Перепишите следующий код в сокращенной форме:
if (test > 0) console.log('+++'); else console.log('---');

// №2 Перепишите следующий код в сокращенной форме:
if (test > 0) console.log('+++');

// Конструкция else if в JavaScript:
// №1 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 14;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
}
else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
}
else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
}

// №2 Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.
let day = 14;
if (day >= 1 && day <= 10) {
    console.log('Первая декада');
}
else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
}
else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
}
else {
    console.log('Error');
}

// Вложенные конструкции if-else в JavaScript: 
// Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.
let num = 57;
if (num >= 10 && num <= 99) {
    let digit1 = num / 10;
    let digit2 = num % 10;
    sum = digit1 + digit2;

    if (sum <= 9) {
        console.log('Сумма цифр однозначна');
    } else {
        console.log('Сумма цифр двухзначна');
    }
}
else {
    console.log('Число не попадает в диапазон от 10 до 99');
}

// Конструкция switch-case в JavaScript: 
// Перепишите следующий код через switch-case:
let lang = 'ru'
switch (lang) {
    case 'ru':
        console.log('рус');
        break;
    case 'en':
        console.log('анг');
        break;
    case 'de':
        console.log('нем');
        break;
    default: 
        console.log('язык не поддерживается');
        break;
}

// Тернарный оператор в JavaScript: 
// Перепишите следующий код через тернарный оператор:
let num = 1;
let res = num >= 0 ? '1': '2';
console.log(res);

// Логические операции в JavaScript: 
// №1 Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

// №2 Используя оператор >, узнайте, больше ли переменная a, чем b.
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);

// №3 Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.
let a = 2 ** 4;
let b = 4 ** 2;
console.log(a != b);

// Функция confirm в JavaScript: 
// Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let abc = confirm('Вам есть 18 лет ?');
if (abc) {
    alert('Добро пожаловать на сайт для взрослых!');
}
else {
    alert('Доступ запрещен');
}

// Область видимости переменных в if-else в JavaScript
// Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:
let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);

// Нюансы области видимости переменных в конструкциях if-else в JavaScript
// №1 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода. Вот проблемный код:
let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);

// №2 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined. Исправьте ошибку автора кода.
let age = 17;
let adult;

if (age >= 18) {
  adult = true;
} else {
  adult = false;
}

console.log(adult);

// №3 Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

// №4 Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined. Исправьте ошибку автора кода.
let age = 19;
let res;

if (age >= 18) {
    res;
	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}
console.log(res);

// Проверка частей часа через if-else в JavaScript: 
let min = 10;
if (min >= 0 && min <= 20) {
	console.log('1 треть');
}

if (min >= 21 && min <= 40) {
	console.log('2 треть');
}

if (min >= 41 && min <= 59) {
	console.log('3 треть');
}

// Проверка длины строк и массивов в JavaScript: 
// В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
let arr = [1, 2, 3];
if (arr.length == 3) { 
    console.log(arr[0] + arr[1] + arr[2]);
}

// Проверка символов строки в JavaScript:
// №1 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str = 'azxcvbn';
if (str[0] == 'a') {
    console.log('!');
}

// №2 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
let str = 'afdsx';
if (str[str.length - 1] == 'x') {
    console.log('!');
}

// №3 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.
let str = 'bnjkc';
if (str[0] == 'a' || str[0] == 'b') {
    console.log('!');
}

// Проверка цифр числа в JavaScript: 
// №1 Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let num = 1234567890;
if (num % 10 === 0) {
  console.log("Последняя цифра числа равна нулю");
} else {
  console.log("Последняя цифра числа не равна нулю");
}

// №2 Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
let num = 632;
if (num % 10 === 0 || num % 10 === 2 || num % 10 === 4 || num % 10 === 6 || num % 10 === 8) {
    console.log('Число четное');
}
else {
    console.log('Число нечетное');
}

// Проверка остатка от деления в JavaScript: 
// №1 Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.
let num = 738;
if (num % 2 == 0) {
    console.log('Число четное');
}
else {
    console.log('Число нечетное');
}

// №2 Дано число. Проверьте, что оно делится на 3.
let num = 933;
if (num % 3 == 0) { 
    console.log('Делится на 3');
}
else {
    console.log('error');
}

// Поиск ошибок в коде с условиями JavaScript: 
// №1 Код должен проверить сумму чисел:
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №2 Код должен проверить сумму чисел:
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №3 Код должен проверить сумму чисел:
let num1 = '1';
let num2 = '2';

if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// №4 Код должен проверить первую цифру числа:
let num = String(123);

if (num[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №5 Код должен проверить первую цифру числа:
let num = 123;
if (String(num)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №6 Код должен проверить первую цифру числа:
let num = 123;
if (String(num)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №7 Код должен проверить первую цифру числа:
let num = 123;
let first = String(num)[0];

if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// №8 Код должен проверить, что в числе ровно две цифры:
let num = String(12);
if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// №9 Код должен проверить, что в числе ровно две цифры:
let num = 12;
if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// №10 Код должен проверить, что в числе ровно две цифры:
let num = 12;

if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

// №11 Код должен проверить, что в числе ровно две цифры:
let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// №12 Код должен проверить, что в числе ровно две цифры:
let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// №13 Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:
let num = '123033';

let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

// Практика на условия if-else в JavaScript: 
// №1 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 8;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Осень');
    break;
  default:
    console.log('Error');
}

// №2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = 'abcde';
if (str[0] == 'a') {
    console.log('Да');
}
else {
    console.log('Нет');
}

// №3 Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = 12345;
if (String(num)[0] == 1 || String(num)[0] == 2 || String(num)[0] == 3) {
    console.log('Да');
}
else {
    console.log('Нет');
}

// №4 Дано трехзначное число. Найдите сумму цифр этого числа.
let num = 456;
let digit1 = num / 100;
let digit2 = (num % 100) / 10;
let digit3 = num % 10;
let sum = digit1 + digit2 + digit3;
console.log(sum);

// №5 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let num = 123033;
let str = String(num);
let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}