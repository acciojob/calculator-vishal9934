const displayAns = document.querySelector("#input");

let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if(e.target.innerHTML == '='){
      string = eval(string);
      displayAns.value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      displayAns.value = string;
    }
    else if(e.target.innerHTML=='<='){
      string = string.slice(0,-1);
      displayAns.value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    displayAns.value = string;
      }


  })
})