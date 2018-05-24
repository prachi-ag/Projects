const ulEl = document.querySelector(".top-three"); 
// or, "document.getElementsByClassName("top-three")[0]"
const liEl = document.getElementsByClassName("best");

console.log(ulEl); // Gives the 'ul' tag
console.log(liEl); // Gives the HTMLCollection of 'li' tag


                                      /*PARENT*/
console.log(ulEl.parentNode); // Gives the parent node of 'ul' tag i.e 'body' tag
console.log(ulEl.parentNode.parentNode.parentNode) // Gives '#document'

console.log(liEl[0].parentNode); // Gives 'ul' tag. We have to specify the child number
console.log(liEl[0].parentElement); // Gives same as above
// We commonly use parentnode because when you want parentElement of root element (<html>), it will give undefined. So, basically always use parentNode whenever you can!!!



                                      /*CHILD*/
console.log(ulEl.childNodes); // Gives all the child nodes of 'ul' tag. It is giving 7 child node because of text node which is the indented text, NOT the text inside the 'li' or 'a' or 'span' element  
console.log(ulEl.children); // Gives only the Elements node i.e all three 'li'

console.log(ulEl.firstChild); // Gives the first child NODE i.e text node
console.log(ulEl.firstElementChild); // Gives the first child ELEMENT node i.e 'li' of Ronaldo

console.log(ulEl.lastChild); // Gives the last child NODE i.e text node
console.log(ulEl.lastElementChild); // Gives the last child ELEMENT node i.e 'li' of Buffon
                                       


                                        /*SIBLING*/
console.log(ulEl.firstElementChild.nextElementSibling); // For Element
console.log(ulEl.firstElementChild.nextSibling); // For Node

console.log(ulEl.firstElementChild.previousElementSibling); // Gives you "null", as there is no previous element sibling of the first element child
console.log(ulEl.firstElementChild.previousSibling); // Gives you text node

console.log(ulEl.firstChild.nextElementSibling.nextSibling.nextSibling); // Gives you "MESSI" 

