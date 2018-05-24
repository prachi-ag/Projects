// You can see the result in ELEMENTS(Ctrl + Shift + I) and here I have done console.log so that you can see the result in CONSOLE

const headingEl = document.querySelector("h1");

// To get the value of the attribute
console.log(headingEl.getAttribute("class"));

// Add the new value of the attribute, clearing the older one if not specified
headingEl.setAttribute("class", "abhishek"); 
console.log(headingEl.getAttribute("class")); 

// Remove the attribute
headingEl.removeAttribute("id");
console.log(headingEl.getAttribute("id")); 

