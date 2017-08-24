window.onload = setActive;

function setActive(){

	var aObj = document.getElementById("nav").getElementsByTagName("a");

	for(i = 0; i < aObj.length; i++) {
    
    if(document.location.href.indexOf(aObj[i].href) >= 0) {

      aObj[i].className = "marked";
    }
  }
}

function toggleMenu(){

	var divMenu = document.getElementById("dropMenu");

	if (divMenu.style.display == "block") {

    	divMenu.style.display = "none";
  	}
  	else { 

    	divMenu.style.display = "block";
  	}
}
