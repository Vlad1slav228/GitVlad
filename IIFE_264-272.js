// Множественные вызовы IIFE в JavaScript:
// №1 Допишите следующий код так, чтобы его запуск алертом выводил '!':
(function () {
  return function () {
    return function () {
      console.log("!");
    };
  };
})()()();

// №2 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function (num1) {
  return function (num2) {
    console.log(num1 + num2);
  };
})(1)(2);

// №3 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function (num1) {
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
})(1)(2)(3);

// Замыкания и вызов функции на месте в JavaScript:
// №1 Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
let func = (function () {
  let num = 1;

  return function () {
    console.log(num);
    num++;
  };
})();
func();
func();
func();
func();
func();

// №2 Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
let func = (function () {
  let num = 1;

  return function () {
    if (num > 5) {
      num = 1;
    }
    console.log(num);
    num++;
  };
})();
func();
func();
func();
func();
func();
func();
