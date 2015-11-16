var imagesClassmates = document.getElementsByTagName('img');
var imagesClicked = [];
var imageCounter = 0;

for(var i = 0; i < imagesClassmates.length; i++) {
  imagesClassmates[i].addEventListener("click", function() {
    imageCounter++;
    alert("This is the " + imageCounter + " image you have clicked");
    /*for (var j = 0;  j < imagesClicked.length; j++) {
      if (imagesClicked[j] = imagesClassmates[i]) {
          alert("This image has been clicked")
        } else {
          imagesClicked.push(imagesClassmates[i]);
          imageCounter++;
        }
        */ 
  });  
}


/*  if an image is clicked check to see if it is in the imagesClicked array
    if is not add it to the array and increase imageCounter by one
      else the image has already been clicked throw an alert
        saying "the image has alredy been clicked" and do not increment imageCounter

*/