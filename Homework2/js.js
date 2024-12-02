"use strict";
const Name = "Futbol Club Barcelona";
const founded = {
    Year: 1899,
    Month: "November",
    Day: 29,
    functioning:true,
    "Official trophies":76,
    mistake: null
}
founded["Official trophies"]= 77;
delete founded.mistake;

founded.Sponsor = "Spotify"
console.log(Name, founded)

/* console.log(typeof founded.functioning, typeof founded.mistake) */

let Coach = ["Hansi Flick"];
let playerSalaries = {
    "Marc-André ter Stegen": 15000, 
    "Iñaki Peña": 2000,
    "Ronald Araújo": 9000,
    "Alejandro Balde": 5000,
    "Jules Koundé": 12000,
    "Andreas Christensen": 10000,
    "Frenkie de Jong": 20000,
    "Gavi": 70000,
    "Pedri": 15000,
    "Robert Lewandowski": 24000,
    "Raphinha": 12000,
    "Ansu Fati": 10000
  };

  for (let key in playerSalaries) {
    console.log( "фио: " + key + "  зарплата " + playerSalaries[key] );
  }

  let sum = 0;
  for (let key in playerSalaries) {
    sum += playerSalaries[key]
  }
  console.log(`общая сумма зарплат всех игроков ${sum}`);

  let Captain;
  console.log(`Капитан: ${Captain}`);

/* Homework: 02  Работа с объектами */
let vehicle = {
    brandName:"BMW",
    model:"X5"
 }
 vehicle.model = "m1";
 console.log(vehicle)
 
 delete vehicle.model;
 console.log(vehicle)
/* Работа с перебором свойств в объектах */
 let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

let salariesSum = 0;
for (let key in salaries  ) {
    salariesSum += salaries[key]
}
console.log(salariesSum)
