const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
const maxWH = Math.max(width, height);

//use resize event listener to change these on window resize...
canvas.width = width;
canvas.height = height;

canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px white";



//to generate random intergers from 0 to 255, for colour channels
function randomInteger(max = 256){
  return Math.floor(Math.random()*max);
}

//draw n circle at random places and sizes
function makeRandomCircles(n){
  for(let i = 0; i < n; i++){
    const size = Math.random()*(maxWH*0.15);
    //so they can overlap left and top of screen, not just bottom and right.
    //random rgba colour
    ctx.fillStyle = `rgba(${randomInteger()},${randomInteger()},${randomInteger()},${Math.random()*0.4})`;
    ctx.fillCirc(x,y,size,size);
  }
}

//initialize with 2 circles
makeRandomCircles(2);
//make 2 more circles each click
document.addEventListener("click", function(){
  makeRandomCircles(2);
}, false);