const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;
const maxWH = Math.max(width, height);

canvas.width = width;
canvas.height = height;

//to generate random intergers from 0 to 255, for colour channels
function randomInteger(max = 256){
  return Math.floor(Math.random()*max);
}

//draw n squares at random places and sizes
function makeRandomSquares(n){
  for(let i = 0; i < n; i++){
    const size = Math.random()*(maxWH*0.15);
    //minus half the size from x,y
    //so they can overlap left and top of screen, not just bottom and right.
    const x = Math.random()*width-size/2;
    const y = Math.random()*height-size/2;
    //random rgba colour
    ctx.fillStyle = `rgba(${randomInteger()},${randomInteger()},${randomInteger()},${Math.random()*0.4})`;
    ctx.fillRect(x,y,size,size);
  }
}

//initialize with 2 squares
makeRandomSquares(2);
//make 2 more squares each click
document.addEventListener("click", function(){
  makeRandomSquares(2);
}, false);

//Code Borrowed https://stackoverflow.com/questions/49807779/drawing-square-using-canvas-javascript