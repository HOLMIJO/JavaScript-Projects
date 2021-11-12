//These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when dots are clicked
function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //This takes all elements with the class name "mySlides" and stores them in the variable array slides.
    var dots = document.getElementsByClassName("dot"); //This takes all elements in class name "dot" and stores them in variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //If n (number passed in function) is greater than the length of the array "slides" the slideshow is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (number passed in function) is less than 1, the slideIndex is set to array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //This for loop takes each item in the array and removes "active" which removes active styling
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//This for loop takes each item in the array "dots" and removes "active" which removes active styling
    }
    slides[slideIndex -1].style.display = "block";//This displays the image in the slideshow
    dots[slideIndex -1].className += " active";//This adds the active styling to the dot associated with the image
}