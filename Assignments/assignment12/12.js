var high = 9999999999; 
var low = 0000000000; 

var start = 5555555555; 


$(document).ready(function() {
  
  $('#small').click(small);
  $('#big').click(big);
  
  $('#submit').click(submit);
  
}); 

function submit() {
  alert("You submitted: " + numberToString(start)); 
}

function numberToString(p) {
  var sp = "" + p; 
  var acc = ""; 
  for(var i=0; i < sp.length; i++) {
    acc += sp.charAt(i);
    if([2, 5].indexOf(i) != -1) {
      acc += "-";
    }
  }
  return acc; 
}

function updateDisplay() {
  start = Math.floor((high + low) / 2); 
  $("#phone-number").html(numberToString(start)); 
}

function small() {
    high = start - 1; 
  updateDisplay(); 
}

function big() {
    low = start + 1; 
  updateDisplay(); 
}