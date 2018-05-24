console.log("Hello World, I'm back");

for(let i=0;i<10;i++){
    console.log("increasing " + i);
}

let h1El = document.querySelector("h1");
h1El.style.color = "yellow";

let content = document.createElement("p");
content.innerHTML = "Hi, How're you?";
document.querySelector("body").appendChild(content);

// DOM(Document Object Model) & BOM(Browser Object Model)
// DOM & BOM are Web API's
// API = Application Programming Interfaces are constructs made available in programming languages to allow developers to create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to use in its place.
// DOM = reverse tree like structure, it includes of html like <html>, <body>, <head>, <title>, <header>, <h1>, <p>, <footer> etc...
// BOM = parent of DOM, it includes stuff like document, alert, innerHeight, innerWidth, open(), close(), location, localStorage, history etc...