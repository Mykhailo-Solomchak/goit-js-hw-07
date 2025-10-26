const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", onInput);


function onInput(e){
    if (e.target.value.trim()){
        output.textContent = e.target.value.trim()
    }else{
        output.textContent = "Anonymous"
    }
}