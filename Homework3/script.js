"use strict";
/* Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли. */

let user = {     
    name: "Омиржан",  
    age: 30,   
    gender:"мужской"     
  };

let newName = prompt("Введите имя:");
if (newName) {
    user.name = newName;
}

// Запрашиваем новый возраст
let newAge = prompt("Введите возраст:", user.age);
if (newAge) {
    user.age = newAge; // Преобразуем в число
}

// Запрашиваем новый пол
let newGender = prompt("Введите пол:", user.gender);
if (newGender) {
    user.gender = newGender;
}
console.log(user);

/* console.log(`пользователь ${user.name}, возрост ${user.age}, пол: ${user.gender}`) */


/* Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. Запишите все в объект. И выведите в консоли.
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert. */

if (newAge >=18) {
    alert("Доступ разрешен");
} else if (newAge > 30 || newAge < 18 ) {
    alert("Доступ запрещен");
} else {
    alert("Доступ запрещен");
}

/* ### Работа с условиями.
1. Перепишите этот блок кода с использованием оператора `switch`. */

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

/* if (a == 0) {
  alert( 0 );0
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
} */

switch (a){
  case 0:
    alert( '0' );
    break;
  case 1:
    alert( '1' );
    break;
  case 2 :
    alert( '2,3' );
    break;
  case 3:
    alert( '2,3' );
    break;
} 


/* ### Работа с циклами(loops).
1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
2.  Перепишите цикл `for` на `while`. */

let num = 0 
for ( let i = 0; i <= 100; i++) {
    num += i ;
}
console.log(num)
 
/* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
} */
let i = 0; 
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
