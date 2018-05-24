const pEl = document.querySelector("p");
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button");

pEl.classList.add("redGiant");
// pEl.classList.remove("redGiant"); [REMOVE THE CLASS]

buttonEl.onclick = function(){
    bodyEl.classList.toggle("on");
}

