var pictureIndex = 1;
showPicture(pictureIndex);

function currentPicture(n) {
  showPicture(pictureIndex = n);
}

function showPicture(n) {

  var picture = document.getElementsByClassName("myPicture");

  if (n > picture.length) {pictureIndex = 1} 
  if (n < 1) {pictureIndex = picture.length}

  for (i = 0; i < picture.length; i++) {
    picture[i].style.display = "none";
  }

  picture[pictureIndex-1].style.display = "block";
}

var textIndex = 1;
showText(textIndex);

function currentText(n) {
	showText(textIndex = n)
}

function showText(n) {

	var text = document.getElementsByClassName("myText");
	var visions = document.getElementsByClassName("myVision");

	if(n > text.length) {textIndex = 1}
	if(n < 1) {textIndex = text.length}

	for(i = 0; i < text.length; i++){
		text[i].style.display = "none";
	}
	for (i = 0; i < visions.length;i++){
		visions[i].className = visions[i].className.replace(" selected", "");
	}

	text[textIndex-1].style.display = "block";
	visions[textIndex-1].className += " selected";
}