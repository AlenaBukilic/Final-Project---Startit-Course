var featureIndex = 1;
showFeatures(featureIndex);

function currentFeature(n) {
  showFeatures(featureIndex = n);
}

function showFeatures(n) {

  var features = document.getElementsByClassName("myFeature");

  if (n > features.length) {featureIndex = 1} 
  if (n < 1) {featureIndex = features.length}

  for (i = 0; i < features.length; i++) {
    features[i].style.display = "none";
  }

  features[featureIndex-1].style.display = "block";
}
