window.onload = function() {
    const gameContainer = document.querySelector("#game-container");
    const clickContainer = document.querySelector("#click-container");
    
    const fishingLine = document.querySelector("#line");
    
    const startScreen = document.querySelector("#start-screen");
    const startTitle = document.querySelector("#start-title");
    
    const infoWrapper = document.querySelector("#info-wrapper");
    const instructions = document.querySelector("#instructions");
    const startBtn = document.querySelector("#start-btn");
    
    const gameStats = document.querySelector("#game-stats");
    const gameGoal = document.querySelector("#game-goal");
    const gameDay = document.querySelector("#game-day");
    
    const gameTimer = document.querySelector("#game-timer");
    const gameTimerGauge = document.querySelector(".timer-gauge");
    
    const gameScore = document.querySelector("#game-score");
    
var mousePosition = {
    x:0,
    y:0
}
    var gameTimerInterval = null;
    var day = 0;
    var score = 0;
    var currentScore = 0;
    var fishTracker = [0,0,0,0]
}

 //initialise the create items interval variables
 var createFishInterval = null;
 var createRareFishInterval = null;
 var createTrashInterval = null;
 var createJellyfishInterval = null;
 var createSharkInterval = null;

 //event listeners
 startBtn.addEventListener("click", startGame);
 clickContainer.addEventListener("mousemove", checkCursor);

 function checkCursor (event){
     //update cursor co ordinates
     mousePosition.x = event.clientX;
     mousePosition.y = event.clientY;
     
     //set fishing line to follow cursor
     fishingLine.style.left= mousePosition.x+"px";
     fishingLine.style.top = mousePosition.y+"px";
 }

//start game function
function startGame () {
    if (day === 0){
        fishTracker = [0,0,0,0,0];
        score = 0;
    }
    currentScore=0;
}

