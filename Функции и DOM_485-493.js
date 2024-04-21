// Функции для работы с DOM элементом на JavaScript:
// 1_1 - Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.
function setText(selector, text) {
  let elem = document.querySelector(selector);
  if (elem) {
    elem.textContent = text;
  }
}

// 1_2 - Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
function setAttr(selector, attributeName, attributeValue) {
  let elem = document.querySelector(selector);
  if (elem) {
    elem.setAttribute(attributeName, attributeValue);
  }
}

// Функции для работы с группой DOM элементов:
// 2 - Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
function appendText(selector, text) {
  let elems = document.querySelectorAll(selector);
  if (elems.length > 0) {
    elems.forEach((elem) => {
      elem.textContent += text;
    });
  }
}

// Передача коллбэка для работы с DOM на JavaScript:
// 3 - Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.
function forEach(selector, func) {
  let elems = document.querySelectorAll(selector);
  for (let elem of elems) {
    func(elem);
  }
}
forEach("p", function (elem) {
  elem.textContent += "!";
});

// Передача порядкового номера в коллбэк на JavaScript:
// 4 - Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.
function forEach(selector, func) {
  let elems = document.querySelectorAll(selector);

  elems.forEach((elem, index) => {
    func(elem, index);
  });
}
forEach("p", function (elem, index) {
  elem.textContent = index + 1 + ". " + elem.textContent;
});

// Передача DOM элемента параметром функции:
// 5_1 - Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
function appendText(element, text) {
  element.textContent += text;
}

// 5_2 - Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraph) => {
  appendText(paragraph, "!");
});

// 5_3 - Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
function setValue(inputElement, text) {
  inputElement.value = text;
}

// Передача группы DOM элементов параметрами функций:
// 6_1 - Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
function appendText(elements, text) {
  elements.forEach((element) => {
    element.textContent += text;
  });
}

// 6_2 - Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
function appendElem(ulElement, text) {
  let newListItem = document.createElement("li");
  newListItem.textContent = text;
  ulElement.appendChild(newListItem);
}

// 6_3 - Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
let items = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4"];
items.forEach((item) => {
  appendElem(myList, item);
});

// Функция для создания HTML таблиц на JavaScript:
// 7 - Вот заготовка описанной функции. Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.
function createTable(rows, cols, parent) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }
  parent.appendChild(table);
}

// Возврат таблицы из функции на JavaScript:
// 8_1 - Переделайте вашу функцию createTable в соответствии с описанным в теории.
function createTable(rows, cols) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("td");
      row.appendChild(col);
    }
    table.appendChild(row);
  }
  return table;
}

/* 8_2 - Пусть у нас есть вот такой див с абзацами:
<div id="elem">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива. */
let div = document.querySelector("#elem");
let table = createTable(3, 4);
div.appendChild(table);

// Функция для создания таблицы из массива:
// 9 - Реализуйте описанную функцию. Проверьте ее работу.
function createTableByArr(arr) {
  let table = document.createElement("table");
  arr.forEach((rowData) => {
    let row = document.createElement("tr");
    rowData.forEach((cellData) => {
      let cell = document.createElement("td");
      cell.textContent = cellData;
      row.appendChild(cell);
    });
    table.appendChild(row);
  });
  return table;
}
let div = document.querySelector("#elem");
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let table = createTableByArr(arr);
div.appendChild(table);
