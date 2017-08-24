var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
 
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

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

var testimonialIndex = 1;
showTestimonial(testimonialIndex);

function plusTestimonial(n) {
  showTestimonial(testimonialIndex += n);
}

function showTestimonial(n) {

  var testimonial = document.getElementsByClassName("myTestimonial");

  if (n > testimonial.length) {testimonialIndex = 1}
  if (n < 1) {testimonialIndex = testimonial.length}

  for( i = 0; i < testimonial.length; i++) {
    testimonial[i].style.display = "none";
  }

  testimonial[testimonialIndex-1].style.display = "block";
}

