// Синтаксис, который мы использовали до этого, называется Function Declaration (Объявление Функции):
// function sayHi() {
//   alert( "Привет" );
// }

// Существует ещё один синтаксис создания функций, который называется Function Expression (Функциональное Выражение).
//
// Оно выглядит вот так:
// let sayHi = function() {
//   alert( "Привет" );
// };

// function sayHi() {
//   alert( "Привет" );
// }
//
// alert( sayHi ); // выведет код функции

// Мы можем скопировать функцию в другую переменную:
// function sayHi() {   // (1) создаём
//   alert( "Привет" );
// }
//
// let func = sayHi;    // (2) копируем
//
// func(); // Привет    // (3) вызываем копию (работает)!
// sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// Заметим, что мы могли бы использовать и Function Expression для того, чтобы создать sayHi в первой строке:
// let sayHi = function() {
//   alert( "Привет" );
// };
//
// let func = sayHi;
// // ...


// Наша функция должна задать вопрос question и, в зависимости от того, как ответит пользователь, вызвать yes() или no():

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
//
// function showOk() {
//   alert( "Вы согласны." );
// }
//
// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }
//
// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);

// Мы можем переписать этот пример значительно короче, используя Function Expression:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
//
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
// Подобный код, появившийся в нашем скрипте выглядит очень естественно, в духе JavaScript.

// Такой код, использующий Function Declaration, работать не будет:
// let age = prompt("Сколько Вам лет?", 18);
//
// // в зависимости от условия объявляем функцию
// if (age < 18) {
//
//   function welcome() {
//     alert("Привет!");
//   }
//
// } else {
//
//   function welcome() {
//     alert("Здравствуйте!");
//   }
//
// }
//
// // ...не работает
// welcome(); // Error: welcome is not defined

// Это произошло, так как объявление Function Declaration видимо только внутри блока кода, в котором располагается.


// Вот ещё один пример:

// "use strict";
// let age = 16; // присвоим для примера 16
//
// if (age < 18) {
//   welcome();               // \   (выполнится)
//                            //  |
//   function welcome() {     //  |
//     alert("Привет!");      //  |  Function Declaration доступно
//   }                        //  |  во всём блоке кода, в котором объявлено
//                            //  |
//   welcome();               // /   (выполнится)
//
// } else {
//
//   function welcome() {
//     alert("Здравствуйте!");
//   }
//   welcome();
// }
//
// // здесь фигурная скобка закрывается,
// // поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
//
// welcome(); // Ошибка: welcome is not defined

// Что можно сделать, чтобы welcome была видима снаружи if?
//
// Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, и присвоить значение welcome переменной, объявленной снаружи if, что обеспечит нам нужную видимость.
//
// Такой код работает, как ожидалось:
//
// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome;
//
// if (age < 18) {
//
//   welcome = function() {
//     alert("Привет!");
//   };
//
// } else {
//
//   welcome = function() {
//     alert("Здравствуйте!");
//   };
//
// }
//
// welcome(); // теперь всё в порядке

// Можно упростить этот код ещё сильнее, используя условный оператор ?:
// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };
//
// welcome(); // теперь всё в порядке