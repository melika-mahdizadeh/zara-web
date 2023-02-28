function openNav() {
    document.getElementById("navMenu").style.visibility = "visible";
    document.getElementById("navMenu").style.opacity = "1";
}
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("navMenu").style.visibility = "hidden";
    document.getElementById("navMenu").style.opacity = "0";
}
function openFilters() {
  document.getElementById("filtersMenu").style.visibility = "visible";
  document.getElementById("filtersMenu").style.opacity = "1";
}
function closeFilters() {
  document.getElementById("filtersMenu").style.visibility = "hidden";
  document.getElementById("filtersMenu").style.opacity = "0";
}
/* slider */
/*
let slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let slideNav = document.getElementsByClassName("slide-nav");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slideNav.length; i++) {
    slideNav[i].className = slideNav[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slideNav[slideIndex-1].className += " active";
}

showSlidesAuto();

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 6000); // Change image every 2 seconds
}
*/