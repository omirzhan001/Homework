"use strict";

/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
checkAge(19)
console.log(checkAge(19)) */

let age = prompt("Сколько вам лет?", 0);
let checkAge = (age > 18)? true: confirm('Родители разрешили?');

/* Функция pow(x,n) */

/* function pow(x,n ) {
  return x ** n;
}; */

let pow = (x, n) => x**n;
console.log(pow(3,3))


/* Перепишите с использованием функции-стрелки */

/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
} */
/* ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  ()=>  alert("Вы согласились.") ,
  ()=> alert("Вы отменили выполнение.") 
);

/* Сортировать в порядке по убыванию */
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b-a);
console.log(arr)
alert( arr ); // 8, 5, 2, 1, -10 

/* Трансформировать в массив имён */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map (user => user.name)

/* console.log(names ) */
alert( names ); 


/* Трансформировать в объекты */

let pupkin = { name: "Вася", surname: "Пупкин", id: 1 };
let ivanov = { name: "Петя", surname: "Иванов", id: 2 };
let petrova = { name: "Маша", surname: "Петрова", id: 3 };

let usersSur = [ pupkin, ivanov, petrova ];

let usersMapped = usersSur.map (user => ({fullName: user.name+ ' ' + user.surname, id:user.id}))

alert( usersMapped[0].id ) 
alert( usersMapped[0].fullName ) 

/* Получить средний возраст */

let getAverageAge = (users) => {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
};

console.log(getAverageAge(users)); 
alert(getAverageAge(users) );