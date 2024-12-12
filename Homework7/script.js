/* Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы. */

const delay = ms=> new Promise(resolve => setTimeout(resolve, ms));
delay(3000).then(() => alert('выполнилось через 3 секунды'));


/* Нельзя. Промис завершится первым вызовом resolve(1), 
а последующие вызовы будут игнорироваться. Код выведет 1. */

let promise = new Promise(function(resolve, reject) {
  resolve(1);
  setTimeout(() => resolve(5), 1000);
});
promise.then(alert);

/* f2 обработает ошибки из промиса и из f1. */
promise.then(f1).catch(f2);

/* f2 обработает только ошибки промиса, но не из f1. */
promise.then(f1).catch(f2); 