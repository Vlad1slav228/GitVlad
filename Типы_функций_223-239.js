// Исходный код функции и ее результат в JavaScript:
// Запустите приведенный выше код у себя и убедитесь в том, что в консоль выводится исходный код функции.
function func() {
  return "!";
}

console.log(func);

// Функция как переменная в JavaScript:
// №1 Сделайте функцию func, которая будет возвращать через return какую-либо строку.
function func() {
  return "hello world!";
}

// №2 Выведите результат работы функции func в консоль.
function func() {
  return "hello world!";
}

console.log(func());

// №3 Выведите исходный код функции func в консоль.
function func() {
  return "hello world!";
}

console.log(func);

// №4 Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
function func() {
  return "hello world!";
}

func = 123;
console.log(func);

// Запись функции в другую переменную в JavaScript:
// №1 Сделайте функцию func1, которая будет возвращать через return число 3.
function func1() {
  return 3;
}

// №2 Скопируйте исходный код функции func1, в переменную func2.
function func1() {
  return 3;
}
let func2 = func1;

// №3 Выведите в консоль сумму результатов работы функций func1 и func2.
function func1() {
  return 3;
}
let func2 = func1;
console.log(func1() + func2());

// Присваивание функций в переменные в JavaScript:
// №1 Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
let func1 = function () {
  return 1;
};

// №2 Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.
let func2 = function () {
  return 2;
};

// №3 Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.
let func1 = function () {
  return 1;
};

let func2 = function () {
  return 2;
};

console.log(func1() + func2());

// Function expression и Function declaration в JavaScript:
// №1 Определите, является ли представленная функция Function Declaration или Function Expression:
function func() {
  console.log("!");
}
// function declaration

// №2 Определите, является ли представленная функция Function Declaration или Function Expression:
let func = function () {
  console.log("!");
};
// function expression

// Разница объявлений функции:
// №1 Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
func();
function func() {
  console.log("!");
}

// №2 Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
func();
let func = function () {
  console.log("!");
};

// Точка с запятой при объявлении функций в JavaScript:
// Расставьте точки с запятой во всех необходимых местах:
let func1 = function () {
  console.log("!");
};
let func2 = function () {
  console.log("!");
};
function func3() {
  console.log("!");
}

// Массив с анонимными функциями в JavaScript:
// №1 Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.
let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];

// №2 Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];

console.log(arr[2]());

// №3 Используя созданный вами массив arr найдите сумму результатов функций (без цикла).
let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];

console.log(arr[0]() + arr[1]() + arr[2]());

// №4 Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];

for (let func of arr) {
  console.log(func());
}

// Объект с анонимными функциями в JavaScript:
// №1 Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
  func1: function () {
    return 1;
  },
  func2: function () {
    return 2;
  },
  func3: function () {
    return 3;
  },
};
console.log(obj.func1() + obj.func2() + obj.func3());

// №2 Переберите созданный объект циклом и выведите результаты работы функций в консоль.
let obj = {
  func1: function () {
    return 1;
  },
  func2: function () {
    return 2;
  },
  func3: function () {
    return 3;
  },
};

for (let func in obj) {
  console.log(obj[func]());
}

// Применение объекта с функциями в JavaScript:
// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
let math = {
  summa: function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },
  summaOfSquare: function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i] ** 2;
    }
    return sum;
  },
  summaOfCubes: function (arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += arr[i] ** 3;
    }
    return sum;
  },
};
console.log(math.summa([1, 2, 3]));
console.log(math.summaOfSquare([1, 2, 3]));
console.log(math.summaOfCubes([1, 2, 3]));

