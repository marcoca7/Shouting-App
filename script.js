var userName;
// GIVES YOU THE VALUE OF THE INPUT
function inputValue(){
  userName = document.querySelector("input").value;
}

function greeting(){
  document.querySelector(".userName").innerText=userName;
}
