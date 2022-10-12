//let body = document.querySelector('body');
//body.addEventListener('click', giveAlert);

//function giveAlert() {
    //alert('this is an alert');
//}


function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown() {
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = 0;
    
    if (currentVal > 0) {
        newVal = currentVal - 1;
    }
    
    document.getElementById("countDownButton").innerHTML = newVal;
}