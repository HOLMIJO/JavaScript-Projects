function countdown() { //Defined function and named
    var seconds = document.getElementById("seconds").value; //Defined variable

    function tick() { //Defined variable with name
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //Defined variable
    if (seconds == -1) {
        alert("Time's up!"); //Defined alert
        clearTimeout (time);
        timer.innerHTML = "";
    }
        
        }
    tick();
}

//This is where the slideshow begins //
var slideIndex = 1;  //Defined variable
showSlides(slideIndex);
//Next/previous controls//
function plusSlides(n) { //Defined function gave name
    showSlides(slideIndex += n);
}
// Thumbnail image controls //
function currentSlide(n) { //Defined function gave name
    showSlides(slideIndex = n);
}
function showSlides(n) { //Defined function gave name 
    var i; //Defined variable with i
    var slides = document.getElementsByClassName("mySlides"); //Defined variable
    var dots = document.getElementsByClassName("dot"); //Defined variable
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