// function showMessage() {
//   alert( 'Всем привет!' );
// }
//
// showMessage();

// function showMessage() {
//   let message = "Привет, я JavaScript!"; // локальная переменная
//
//   alert( message );
// }
//
// showMessage(); // Привет, я JavaScript!
//
// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

// У функции есть доступ к внешним переменным, например:
//
// let userName = 'Вася';
//
// function showMessage() {
//   let message = 'Привет, ' + userName;
//   alert(message);
// }
//
// showMessage(); // Привет, Вася

// Функция обладает полным доступом к внешним переменным и может изменять их значение.

// let userName = 'Вася';
//
// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной
//
//   let message = 'Привет, ' + userName;
//   alert(message);
// }
//
// alert( userName ); // Вася перед вызовом функции
//
// showMessage();
//
// alert( userName ); // Петя, значение внешней переменной было изменено функцией


// Внешняя переменная используется, только если внутри функции нет такой локальной

// let userName = 'Вася';
//
// function showMessage() {
//   let userName = "Петя"; // объявляем локальную переменную
//
//   let message = 'Привет, ' + userName; // Петя
//   alert(message);
// }
//
// // функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();
//
// alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную

// Мы можем передать внутрь функции любую информацию, используя параметры (также называемые аргументами функции).

// function showMessage(from, text) { // аргументы: from, text
//   alert(from + ': ' + text);
// }
//
// showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
// showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


// function showMessage(from, text) {
//
//   from = '*' + from + '*'; // немного украсим "from"
//
//   alert( from + ': ' + text );
// }
//
// let from = "Аня";
//
// showMessage(from, "Привет"); // *Аня*: Привет
//
// // значение "from" осталось прежним, функция изменила значение локальной переменной
// alert( from ); // Аня
//
// showMessage("Аня"); // Это не приведёт к ошибке. Такой вызов выведет "Аня: undefined". В вызове не указан параметр text, поэтому предполагается, что text === undefined.

// Если мы хотим задать параметру text значение по умолчанию, мы должны указать его после =:

// function showMessage(from, text = "текст не добавлен") {
//   alert( from + ": " + text );
// }
//
// showMessage("Аня"); // Аня: текст не добавлен

// Функция может вернуть результат, который будет передан в вызвавший её код

// function sum(a, b) {
//   return a + b;
// }
//
// let result = sum(1, 2);
// alert( result ); // 3

//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }
//
// let age = prompt('Сколько вам лет?', 18);
//
// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// Возможно использовать return и без значения. Это приведёт к немедленному выходу из функции.

// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }
//
//   alert( "Вам показывается кино" ); // (*)
//   // ...
// }

// Результат функции с пустым return или без него – undefined:
// function doNothing() { /* пусто */ }
//
// alert( doNothing() === undefined ); // true

// function doNothing() {
//   return;
// }
//
// alert( doNothing() === undefined ); // true

// Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и return. Или, хотя бы, поставить там открывающую скобку, вот так:
//
// return (
//   some + long + expression
//   + or +
//   whatever * f(a) + f(b)
//   )

// Например, сравним ниже две функции showPrimes(n). Каждая из них выводит простое число до n.
//
// Первый вариант использует метку nextPrime:

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }
//
//     alert( i ); // простое
//   }
// }
//
// let n = prompt('Введите натуральное число');
//
// showPrimes(n);

// Второй вариант использует дополнительную функцию isPrime(n) для проверки на простое:
//
// function showPrimes(n) {
//
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;
//
//     alert(i);  // простое
//   }
// }
//
// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }
//
// let n = prompt('Введите натуральное число');
//
// showPrimes(n);

// Это:
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// // Равноценно этому:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }

// Перепишите функцию, используя оператор '?' или '||'
// Исходная функция:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
//
// function checkAge1(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
//
// function checkAge2(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }
//
//
// let age = prompt('Ваш возраст?');
//
// console.log(checkAge(age));
// console.log(checkAge1(age));
// console.log(checkAge2(age));

// function min(a,b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
//
// let a = +prompt('Введие a');
// let b = +prompt('Введие b');
//
// alert(min(a,b));
//
// Функция степени
// function pow(a, b) {
//   let p = 1;
//   for (let i = 0; i < b; i++) {
//     p = p*a;
//     alert(p);
//   }
//   return p;
// }
//
// let x = prompt('Enter x');
// let n = prompt('Enter n');
// alert(pow(x, n));

// альтернативный вариант функции степени
// function pow(x, n) {
//   let result = x;
//
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// let x = prompt("x?", '');
// let n = prompt("n?", '');
//
// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }
