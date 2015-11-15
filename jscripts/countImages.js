var imagesClicked = document.getElementsByTagName('img');

for(var i = 0; i < imagesClicked.length; i++) {
  imagesClicked[i].addEventListener("click", function() {
    alert("You clicked");
  });  
}
