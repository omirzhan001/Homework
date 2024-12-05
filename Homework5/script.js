"use strict";
document.addEventListener("DOMContentLoaded", function() {
  let table = document.getElementById('age-table');
  console.log(table);
   let labels = table.querySelectorAll('label');
  console.log(labels);
  let firstTd = table.querySelector('td');
  console.log(firstTd);
  let element = document.getElementById("age-list");
  console.log(element);
  let form = document.forms['search'];
  console.log(form);
  let firstInput = form.querySelector('input');
  console.log(firstInput);
  let inputs = form.querySelectorAll('input');
  let lastInput = inputs[inputs.length - 1];
  console.log(lastInput);
});




