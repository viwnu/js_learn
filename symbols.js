// // Создаём новый символ - id
// let id = Symbol();

// // Создаём символ id с описанием (именем) "id"
// let id = Symbol("id");

// Например, вот два символа с одинаковым описанием – но они не равны:
//
// let id1 = Symbol("id");
// let id2 = Symbol("id");
//
// alert(id1 == id2); // false

// // Символы не преобразуются автоматически в строки
// // К примеру, alert ниже выдаст ошибку:
//
// let id = Symbol("id");
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// // Чтобы вывести символ необходимо явно преобразовать его с помощью метода .toString(), вот так:
//
// let id = Symbol("id");
// alert(id.toString()); // Symbol(id), теперь работает

// // Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:
//
// let id = Symbol("id");
// alert(id.description); // id

// // Символы позволяют создавать «скрытые» свойства объектов, к которым нельзя нечаянно обратиться и перезаписать их из других частей программы.
//
// let user = {
//   name: "Вася"
// };
//
// let id = Symbol("id");
//
// user[id] = 1;
//
// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу

// // А вот если бы мы использовали строку "id" вместо символа, то тогда был бы конфликт:
//
// let user = { name: "Вася" };
//
// // Объявляем в нашем скрипте свойство "id"
// user.id = "Наш идентификатор";
//
// // ...другой скрипт тоже хочет свой идентификатор...
//
// user.id = "Их идентификатор"
// // Ой! Свойство перезаписано сторонней библиотекой!

// Если мы хотим использовать символ при литеральном объявлении объекта {...}, его необходимо заключить в квадратные скобки.
//
// Вот так:
//
// let id = Symbol("id");
//
// let user = {
//   name: "Вася",
//   [id]: 123 // просто "id: 123" не сработает
// };

// // Символы игнорируются циклом for…in
//
// let id = Symbol("id");
// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123
// };
//
// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
//
// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );
//
// // Object.keys(user) также игнорирует символы.
// //
// // А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:
//
// let id = Symbol("id");
// let user = {
//   [id]: 123
// };
//
// let clone = Object.assign({}, user);
//
// alert( clone[id] ); // 123

// // Глобальные символы
// //
// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан
//
// // читаем его снова в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");
//
// // проверяем -- это один и тот же символ
// alert( id === idAgain ); // true

// // Для глобальных символов, кроме Symbol.for(key), который ищет символ по имени, существует обратный метод: Symbol.keyFor(sym), который, наоборот, принимает глобальный символ и возвращает его имя.
// //
// // К примеру:
// //
// // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
//
// // получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id
// Внутри метода Symbol.keyFor используется глобальный реестр символов для нахождения имени символа. Так что этот метод не будет работать для неглобальных символов. Если символ неглобальный, метод не сможет его найти и вернёт undefined.

// // Впрочем, для любых символов доступно свойство description.
// //
// // Например:
// //
// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");
//
// alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
// alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа
//
// alert( localSymbol.description ); // name

// Системные символы
// Существует множество «системных» символов, использующихся внутри самого JavaScript, и мы можем использовать их, чтобы настраивать различные аспекты поведения объектов.
//
// Эти символы перечислены в спецификации в таблице Well-known symbols:
//
// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// …и так далее.
// В частности, Symbol.toPrimitive позволяет описать правила для объекта, согласно которым он будет преобразовываться к примитиву. Мы скоро увидим его применение.
//
// С другими системными символами мы тоже скоро познакомимся, когда будем изучать соответствующие возможности языка.

// Технически символы скрыты не на 100%. Существует встроенный метод Object.getOwnPropertySymbols(obj)
//  – с его помощью можно получить все свойства объекта с ключами-символами.
//  Также существует метод Reflect.ownKeys(obj), который возвращает все ключи объекта,
//   включая символьные. Так что они не совсем спрятаны. Но большинство библиотек,
//    встроенных методов и синтаксических конструкций не используют эти методы.