// Объекты в JavaScript: Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
let obj = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскресенье'};
alert(obj[1]);
alert(obj[2]);
alert(obj[3]);
alert(obj[4]);
alert(obj[5]);
alert(obj[6]);
alert(obj[7]);

// Вывод всего объекта в JavaScript: Создайте объект с ключами от 1 до 12, в качестве значений содержащий названия месяцев. Выведите этот объект в консоль.
let obj = {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'};
console.log(obj);

// Строковые ключи объектов в JavaScript: Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let user = {name: 'Vlad', surname: 'Myakishev', patronymic: 'Sergeyevich ', height: '178', weight: '75'};
console.log(user['name'] + ' ' + user['surname'] + ' ' + user['patronymic']);

// Свойства объектов в JavaScript: Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
let date = {year: 2024, month: 'January', day: 18};
console.log(date.year + '-' + date.month + '-' + date.day);

// Ограничения на ключи объектов в JavaScript: №1 Дан объект: Для каких ключей данного объекта кавычки обязательны, а для каких нет?
let obj = {
	'1a': 1, //кавычки обязательны
	'b2': 2, ////кавычки необязательны
	'с-с': 3, //кавычки обязательны
	'd 4': 4, //кавычки обязательны
	'e5': 5 //кавычки необязательны
};

// №2 Исправьте ошибки, допущенные в следующем коде:
let obj = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj['1a']);
console.log(obj.b2);
console.log(obj['c-c']);
console.log(obj['d 4']);
console.log(obj.e5);

// Изменение элементов объектов в JavaScript: Возведите в квадрат каждый элемент этого объекта.
let obj = {x: 1, y: 2, z: 3};
obj.x = obj.x ** 2;
obj.y = obj.y ** 2;
obj.z = obj.z ** 2;
console.log(obj);

// Добавление элементов в объекты в JavaScript: Создайте пустой объект, а затем заполните его значениями.
let obj = {};
obj.a = 1;
obj.b = 2;
obj.c = 3;
obj.d = 4;
console.log(obj);

// Неупорядоченность объектов в JavaScript: Создайте объект и убедитесь, что порядок ключей в нем не имеет значения.
let obj = {5: 'c', 1: 'r', 2: 't', 4: 'q', 3: 'u'};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj[4]);
console.log(obj[5]);

// Массив ключей объекта в JavaScript: Получите массив ключей следующего объекта:
let obj = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj);
console.log(keys);

// Длина объекта в JavaScript: Найдите количество элементов в следующем объекте:
let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);

// Ключи объектов из переменных в JavaScript: Дана переменная key, в которой хранится один из ключей нашего объекта. Выведите с помощью этой переменной соответствующий элемент объекта.
let obj = {x: 1, y: 2, z: 3};
let key = 'z';
console.log(obj[key]);

// Ошибка обращения к элементу по ключу в JavaScript: №1 Исправьте ошибку, допущенную в следующем коде:
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

// №2 Исправьте ошибку, допущенную в следующем коде:
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

// Ошибка обращения к свойству объекта в JavaScript: №1 Исправьте ошибку, допущенную в следующем коде:
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

// №2 Исправьте ошибку, допущенную в следующем коде:
let obj = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj[prop]);

// Вычисляемые свойства в JavaScript: №1 В следующем коде ключ должен был взяться из переменной. Исправьте допущенную ошибку:
let key = 'x';
let obj = {
	[key]: 1,
	y: 2,
	z: 3
};

// №2 Дан объект и переменные: Сделайте так, чтобы ключи объекта брались из этих переменных.
let key1 = 'x';
let key2 = 'y';
let key3 = 'z';
let obj = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};

// Оператор in в JavaScript: Скажите, что выведется в консоль в результате выполнения следующего кода:
let obj = {x: 1, y: 2, z: 3};
console.log('x' in obj); // выведет true
console.log('w' in obj); // выведет false

// Оператор delete в JavaScript: Скажите, что выведется в консоль в результате выполнения следующего кода:
let obj = {x: 1, y: 2, z: 3};
delete obj.x;
console.log('x' in obj); // выведет false

// Объекты и примитивы в JavaScript: №1 Какой тип данных выведется в консоль? Это примитив или объект?
let test = {x: 1, y: 2, z: 3};
console.log(test); // выведет объект

// №2 Какой тип данных выведется в консоль? Это примитив или объект?
let test = {x: 1, y: 2, z: 3};
console.log(test.x); // выведет примитив

// №3 Какой тип данных выведется в консоль? Это примитив или объект?
let test = [1, 2, 3];
console.log(test); // выведет объект

// №4 Какой тип данных выведется в консоль? Это примитив или объект?
let test = [1, 2, 3];
console.log(test[1]) // выведет примитив

// №5 Какой тип данных выведется в консоль? Это примитив или объект?
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1); // выведет объект

// №6 Какой тип данных выведется в консоль? Это примитив или объект?
let test1 = [1, 2, 3];
let test2 = 1;
console.log(test1[test2]); // выведет примитив

// Константы с массивами или объектами в JavaScript: №1 Что выведется в результате выполнения следующего кода:
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // выведет ["a", "!", "c"]

// №2 Что выведется в результате выполнения следующего кода:
const arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr); // выведет ошибку

// №3 Что выведется в результате выполнения следующего кода:
const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr); // выведет ошибку

// Подход программирования через константы в JavaScript: Перепишите следующий код через описанный подход:
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);

// Поиск ошибок в коде с объектами JavaScript: №1 Код должен вывести элемент объекта:
let obj = {x: 1, y: 2, z: 3};
console.log(obj['x']);

// №2 Код должен вывести элемент объекта по ключу из переменной:
let obj = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj[key]);

// №3 Код должен вывести сумму элементов объекта:
let obj = {x: 1, y: 2, z: 3};
let sum = obj.x + obj.y + obj.x;
console.log(sum);

// №4 Код должен вывести количество элементов объекта:
let obj = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj).length);
 