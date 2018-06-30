
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[slideIndex-1].style.display = "block";

  }


}




function tenda() {$("#tendina").removeClass("opaco");$("#tendina").addClass("nonopaco")}
function tendano() {$("#tendina").removeClass("nonopaco");$("#tendina").addClass("opaco")}
function insieme(){if ($("#tendina").hasClass("opaco")){tenda()} else if ($("#tendina").hasClass("nonopaco")){tendano()}}


$("#scende").on("click",insieme);
