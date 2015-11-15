var secondsCounter = 0;
var timerInterval;
var startStopBtn = document.getElementById("startStopBtn");

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
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    alert("You stopped after " + secondsCounter + " seconds")
  }
}


startStopBtn.addEventListener("click", toggleTime);