const buttonEl = document.querySelector(".jsButton");
const inputEl = document.querySelector(".jsEmail");

// In inline we have to put 'on' prefix but not in the case when we are using addEventListener

function but(){
    console.log("Hey you are typing something");
}

buttonEl.addEventListener("mouseover", but)

inputEl.addEventListener("input", function(){
    console.log("Hey you are typing something");
})

buttonEl.removeEventListener("mouseover", but)
// We have to specify function name before removing it, as when we haven't specify the function name we are using it anonymously that is we haven't stored it anywhere but after giving it a name we are storing it 