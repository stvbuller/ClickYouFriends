var secondsCounter = 0;
var timerInterval;
var startStopBtn = document.getElementById("startStopBtn");
var checkTimer;
var endTime = 5000;

setTimeout(function(){
  if(secondsCounter === 0) {
    clearInterval(timerInterval);
    alert("You have 20 seconds to play after pressing start!");
  }
}, 500);

function incrementTimer() { 
  secondsCounter++;
 }

function toggleTime() {
  if(this.getAttribute("data-state") === "start") {
    this.innerHTML = "Stop";
    this.setAttribute("data-state", "stop");
    secondsCounter = 0;
    timerInterval = setInterval(incrementTimer, 1000);
    checkTimer = setInterval(checkSecondsCounter, 1000);
  
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    clearInterval(checkTimer);
    alert("You stopped after " + secondsCounter + " seconds")
  }
}


function checkSecondsCounter() {
  if (secondsCounter >= 5 ) {
    startStopBtn.innerHTML = "Start";
    startStopBtn.setAttribute("data-state", "start");
    clearInterval(timerInterval); 
    clearInterval(checkTimer);
    alert("Time is up " + secondsCounter + " seconds");
  } 
}

startStopBtn.addEventListener("click", toggleTime);