"use strict";
/* console.log("Omirzhan") */

const btn = document.querySelector(".btn");
const text = document.getElementById("text");
const button = document.querySelector(".button");


btn.addEventListener("click", function () {
  if (text) {
    text.remove();
  }
});

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);


let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
}