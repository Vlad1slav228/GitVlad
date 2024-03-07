// Передача функций параметрами в JavaScript:
// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
test(
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
);

function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}

// Именованные функции-параметры в JavaScript:
// №1 Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function get1() {
  return 5;
}
function get2() {
  return 124;
}
function get3() {
  return 678;
}

function test(func1, func2, func3) {
  return func1() + func2() + func3();
}

let result = test(get1, get2, get3);
console.log(result);

// №2 Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
function func1() {
  return 1;
}
function func2() {
  return 2;
}
function func3() {
  return 3;
}
function test() {
  return func1() + func2() + func3();
}

function test(func1, func2, func3) {
  return func1() + func2() + func3();
}

console.log(test(func1, func2, func3));

// №3 Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
let func1 = function () {
  return 1;
};
let func2 = function () {
  return 2;
};
let func3 = function () {
  return 3;
};
function test() {
  return func1() + func2() + func3();
}

function test(func1, func2, func3) {
  return func1() + func2() + func3();
}

console.log(test(func1, func2, func3));

// Параметры передаваемых функций в JavaScript:
// №1 Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
function test(func) {
  console.log(func(5));
}

test(function (num) {
  return num * num * num;
});

// №2 Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
function test(func) {
  console.log(func(5));
}

function func(num) {
  return num * num * num;
}

test(func);

// №3 Переделайте передаваемую функцию на Function Expression с тем же именем func.
function test(func) {
  console.log(func(5));
}

let func = function (num) {
  return num * num * num;
};

test(func);

// №4 Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
function test(func) {
  alert(func(2, 3));
}

let func = function (num1, num2) {
  return num1 + num2;
};

test(func);

// Передача числа параметром в JavaScript:
// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа. Пусть функция test возвращает сумму результатов переданных функций: Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.
function test(num, func1, func2) {
  return func1(num) + func2(num);
}

function func1(num) {
  return num * num;
}

function func2(num) {
  return num * num * num;
}

console.log(test(3, func1, func2));

// Применение передачи функции параметром в JavaScript:
// №1 Не подсматривая в код реализуйте такую же функцию test самостоятельно.
function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}

let result = test([1, 2, 3], function (num) {
  return num * num;
});

console.log(result);

// №2 Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.
function test(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  }
  return arr;
}

let result = test([1, 2, 3], function (num) {
  return num * num * num;
});

console.log(result);

// Вложенные функции в JavaScript:
// Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
function func(num1, num2) {
  function square(num) {
    return num * num;
  }

  function cube(num) {
    return num * num * num;
  }

  return square(num1) + square(num2);
}
console.log(func(4, 3));

// Функция, возвращающая функцию в JavaScript:
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
function func1() {
  return function () {
    return 1;
  };
}
function func2() {
  return function () {
    return 2;
  };
}

console.log(func1()() + func2()());

// Любой уровень вложенности в JavaScript:
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func() {
  return function () {
    return function () {
      return function () {
        return function () {
          return "!";
        };
      };
    };
  };
}

console.log(func()()()()());

// Параметры возвращаемой функции в JavaScript:
// №1 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}
console.log(func(2)(3)(4));

// №2 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(num1) {
  let numbers = [];
  numbers.push(num1);
  return function (num2) {
    numbers.push(num2);
    return function (num3) {
      numbers.push(num3);
      return function (num4) {
        numbers.push(num4);
        return function () {
          return numbers;
        };
      };
    };
  };
}
console.log(func(2)(3)(4)(5)());

// Функции-коллбэки в JavaScript:
// №1 Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
let arr = [1, 2, 3, 4, 5];
function each(arr, callback) {
  let result = [];
  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

let result = each([1, 2, 3, 4, 5], function (num) {
  return num * 2;
});

console.log(result);

// №2 Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

let res = each(["Я", "Изучаю", "JavaScript"], function (num) {
  return String(num).split("").reverse().join("");
});

console.log(res);

// №3 Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
function each(arr, callback) {
  let result = [];

  for (let elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

let res = each(["я", "изучаю", "javaScript"], function (num) {
  return String(num)[0].toUpperCase() + String(num).slice(1);
});

console.log(res);

// Нюансы коллбэков в JavaScript:
// С помощью следующей функции возведите все элементы массива в куб:
function each(arr, callback) {
  let result = [];
  
  for (let elem of arr) {
    result.push( callback(elem) );
  }
  
  return result;
}

let res = each([2, 3, 4, 5, 6], function cube(num) {
  return num ** 3;
});

console.log(res);

// Применение стрелочных функций в JavaScript:
// Дана следующая функция с коллбэком: Упростите коллбэк через стрелочную функцию.
let result = filter([1, 2, 3, 4, 5], elem => elem > 0);


  

