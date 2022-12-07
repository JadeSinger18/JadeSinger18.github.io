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

function makeRandomCircles(n){
  for(let i = 0; i < n; i++){
    const size = Math.random()*(maxWH*0.10);
    const x = Math.random()*width-size;
    const y = Math.random()*height-size;
    ctx.fillStyle = `rgba(${randomInteger()},${randomInteger()},${randomInteger()},${Math.random()*0.4})`;
    ctx.beginPath();
    ctx.arc(x,y,size,size,Math.PI);
    ctx.fill();
  }
}

function makeRandomTriangles(n){
  for(let i = 0; i < n; i++){  
    const size = Math.random()*(maxWH*0.10);
    const x = Math.random()*width-size;
    const y = Math.random()*height-size;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+25,y-25);
    ctx.lineTo(x+25,y+25);
    ctx.fillStyle = `rgba(${randomInteger()},${randomInteger()},${randomInteger()},${Math.random()*0.4})`;
    ctx.fill();
  }
}


var array = ['makeRandomSquares','makeRandomCircles','makeRandomTriangles']

var ranFunc;

function start() { // Randomly Execute Function
 ranFunc = array[Math.floor(Math.random() * array.length)];
 console.log(ranFunc);
 if (ranFunc == 'makeRandomSquares') {
  makeRandomSquares(2);
 }
 if (ranFunc == 'makeRandomCircles') {
  makeRandomCircles(2);
 }
 if (ranFunc == 'makeRandomTriangles') {
  makeRandomTriangles(2);
 }
}

document.addEventListener("click", function(){
  start();
}, false);


//initialize with 2 squares
//makeRandomSquares(2);
//make 2 more squares each click
//document.addEventListener("click", function(){
  //makeRandomSquares(2); //make random array
//}, false);

//makeRandomCircles(2);
//make 2 more squares each click
//document.addEventListener("click", function(){
 // makeRandomCircles(2); //make random array
//}, false);

//makeRandomTriangles(2);
//make 2 more squares each click
//document.addEventListener("click", function(){
  //makeRandomTriangles(2); //make random array
//}, false);

//Code Borrowed https://stackoverflow.com/questions/49807779/drawing-square-using-canvas-javascript