const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

const minusKey = document.querySelector('.minus-key').addEventListener('keypress', minus);
const plusKey = document.querySelector('.plus-key').addEventListener('keypress', plus);
const resetKey = document.querySelector('.reset-key').addEventListener('keypress', reset);
const submitKey = document.querySelector('.submit-key').addEventListener('keypress', submit);



document.addEventListener("keypress", keyPress, false);


function keyPress(e) {
    var keyCode = e.keyCode;
      if(keyCode==45) {
      alert("You hit the minus key.");
      minus();
      } 
      
      else if(keyCode==61) {
        alert("You hit the plus key.");
        plus();
      }
      
      else if(keyCode==114) {
        alert("You hit the reset key.");
        reset();
      }

      else if(keyCode==115) {
        alert("You hit the submit key.");
        submit();
      }

      else {
      alert("Whoops");
      }
      console.log(keyCode);
}




function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
     if (outputInt > 0) {
    outputInt -= 1;
    output.textContent = outputInt;
     }
}

function plus() {
    if (outputInt < 9999999999) {
    outputInt += 1;
    output.textContent = outputInt; 
    }
}

