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
    infoWrapper.style.display = "none";
    startTitle.style.display = "none";
    clickContainer.style.display = "block";
    gameStats.style.display = "flex";
    gameGoal.style.display = "block";
    createItems();
}

//create items function
function createItems() {
    createTimer();
    day++;
    gameDay.innerText = "Day 0"+day;
    gameGoal.innerText = `Goal: ${currentScore}/${days[day-1].score}`;
    //start creating items depending on the day
        switch (day) {
            case 1:
                createFishInterval = setInterval(createFish, 250);
                break;

            case 2:
                createFishInterval = setInterval(createFish, 250);
                createRareFishInterval = setInterval(createRareFish, 2200);
                break;

            case 3:
                createFishInterval = setInterval(createFish, 250);
                createRareFishInterval = setInterval(createRareFish, 1500);
                createTrashInterval = setInterval(createTrash, 1000);
                break;

            case 4:
                createFishInterval = setInterval(createFish, 250);
                createRareFishInterval = setInterval(createRareFish, 1250);
                createTrashInterval = setInterval(createTrash, 1500);
                createJellyfishInterval = setInterval(createJellyfish,2000);
                break;

            case 5:
                createFishInterval = setInterval(createFish, 200);
                createRareFishInterval = setInterval(createRareFish, 1100);
                createTrashInterval = setInterval(createTrash, 1500);
                createJellyfishInterval = setInterval(createJellyfish,2000);
                createSharkInterval = setInterval(createShark,4000);
                break;
    }
}