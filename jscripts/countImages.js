var imagesClassmates = document.getElementsByTagName('img');
var imagesClicked = [];
var imageCounter = 0;


//anonymous function that adds click to all images
for(var i = 0; i < imagesClassmates.length; i++) {
  imagesClassmates[i].addEventListener("click", function () {
    imageCounter++;
    alert("This is the " + imageCounter + " image you have clicked");
  });
}


/* the idea here to to check the data-state of an image, if the
    data-state is "notclicked" count the image and change the 
    data-state to "clicked", if the data-state is "clicked" do
    not count the image, at the end of the game the data-state 
    for all images is set to "notclicked"

function whenClicked () {
  if(this.getAttribute("data-state") === "notclicked") {
    this.setAttribute = (data-state", "clicked")
    imageCounter++;
    alert("This is the " + imageCounter + " image you have clicked");
  }
}
*/

/* another thought 
if an image is clicked check to see if it is in the imagesClicked array
    if is not, add it to the array and increase imageCounter by one
      if the image has already been clicked throw an alert
        saying "the image has alredy been clicked" and do not increment imageCounter

for (var j = 0;  j < imagesClicked.length; j++) {
      if (imagesClicked[j] = imagesClassmates[i]) {
          alert("This image has been clicked")
        } else {
          imagesClicked.push(imagesClassmates[i]);
          imageCounter++;
          alert("This is the " + imageCounter + " image you have clicked");
        }
 */ 


