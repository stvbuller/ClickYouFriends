var imagesClassmates = document.getElementsByTagName('img');
var imagesClicked = [];
var imageCounter = 0;


//adds click to all images
for(var i = 0; i < imagesClassmates.length; i++) {
  imagesClassmates[i].addEventListener("click", gameStarts);
}



function gameStarts() {
  if(startStopBtn.getAttribute("data-state") === "stop"){
      imageCounter++;
      alert("This is the " + imageCounter + " image you have clicked");
  }
}

/* the idea is to to check the data-state of an image, if the
    data-state is "notclicked" count the image and change the 
    data-state to "clicked", if the data-state is "clicked" do
    not count the image, at the end of the game the data-state 
    for all images must be set to "notclicked"

   if (this.getAttribute("data-state") === "notclicked") {
      this.setAttribute("data-state", "clicked")
      imageCounter++;
      alert("This is the " + imageCounter + " image you have clicked");
    } else { 
      alert("You have already clicked this image");
  } 

for(var i = 0; i < imagesClassmates.length; i++) {
  imagesClassmates[i].setAttribute("data-state", "notclicked");
}


  */

