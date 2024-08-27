/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function Generate(array) {
  return Math.floor(Math.random() * array.length);
}
function MixExcuses() {
  let whoElement = who[Generate(who)];
  let actionElement = action[Generate(action)];
  let whatElement = what[Generate(what)];
  let whenElement = when[Generate(when)];

  let excuses = `${whoElement} ${actionElement} ${whatElement} ${whenElement}`;
  console.log(excuses);
  return excuses;
}

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let excusagenerated = "MixExcuses";
  document.getElementById("excuse").innerText =
    document.getElementById("excuse").innerText || MixExcuses();

  document.querySelector("button").addEventListener("click", function() {
    let excusagenerated = MixExcuses();
    document.getElementById("excuse").innerText = excusagenerated;
  });
};
