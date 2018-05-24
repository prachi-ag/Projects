// Accessing Single Element
console.log(document.getElementById("logo")); //1

const h1El = document.getElementById("logo");
console.log(h1El); //2

console.log(document.querySelector("#logo")); //3


// Accessing Multiple Elements
let oneEl = document.getElementsByClassName("chore");
console.log(oneEl); //1

let twoEl = document.getElementsByTagName("li");
console.log(twoEl); //2

let threeEl = document.querySelectorAll(".chore, .heading");
console.log(threeEl); //3


// Nodes vs Elements
// 1. Everything is a node in a DOM hierarchy
// 2. Element is a specific type of node
// 3. Nodes example text node, comment node etc