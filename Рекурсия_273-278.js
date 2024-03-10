// Пример с параметром через рекурсию в JavaScript:
// №1 Дан массив: С помощью рекурсии выведите элементы этого массива в консоль.
let arr = [1, 2, 3, 4, 5];
function func(arr) {
  console.log(arr.shift());

  if (arr.length != 0) {
    func(arr);
  }
}

func(arr);

// Сумма элементов массива при рекурсии в JavaScript:
// №1 Дан массив: С помощью рекурсии найдите сумму квадратов элементов этого массива.
let arr = [1, 2, 3, 4, 5];
function getSumOfSquares(arr) {
  let sum = Math.pow(arr.shift(), 2);

  if (arr.length != 0) {
    sum += getSumOfSquares(arr);
  }

  return sum;
}

console.log(getSumOfSquares(arr));

// Рекурсия и многомерные структуры в JavaScript:
// №1 Дан многомерный объект произвольного уровня вложенности. С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
let obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};
function printPrimitives(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      printPrimitives(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

printPrimitives(obj);

// №2 Дан многомерный массив произвольного уровня вложенности. Напишите код, который развернет наш многомерный массив в одномерный.
function flattenArray(arr) {
  let result = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  flatten(arr);
  return result;
}

// Пример использования
let multidimensionalArray = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let oneDimensionalArray = flattenArray(multidimensionalArray);

console.log(oneDimensionalArray);

// Сумма элементов массива через рекурсию в JavaScript:
// №1 Дан многомерный объект произвольного уровня вложенности. С помощью рекурсии найдите сумму элементов этого объекта.
function func(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] == "object") {
      sum += func(obj[key]);
    } else {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(
  func({
    a: 1,
    b: { c: 2, d: 3, e: 4 },
    f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
  })
);

// №2 Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки. С помощью рекурсии слейте элементы этого массива в одну строку:
function mergeArr(arr) {
  let res = "";

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      res += mergeArr(elem);
    } else if (typeof elem === "string") {
      res += elem;
    }
  }

  return res;
}
console.log(mergeArr(["a", ["b", "c", "d"], ["e", "f", ["g", ["j", "k"]]]]));

// Манипуляции с элементами в JavaScript:
// №1 Дан многомерный массив произвольного уровня вложенности. Возведите все элементы-числа этого массива в квадрат.
function squareNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      arr[i] = arr[i] ** 2;
    } else if (Array.isArray(arr[i])) {
      squareNum(arr[i]);
    }
  }
}
let multArr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
squareNum(multArr);
console.log(multArr);
