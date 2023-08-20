// JavaScript to control the slideshow and scrolling
let slideIndex2 = 0;
const slides2 = document.getElementsByClassName("slide2");

// Initial slide display
showSlide(slideIndex2);

// Automatic slide change
setInterval(function () {
    slideIndex2++;
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }
    showSlide(slideIndex2);
}, 15000); // Change slide every 5 seconds (adjust as needed)

// Previous slide function
function prevSlide() {
    slideIndex2--;
    if (slideIndex2 < 0) {
        slideIndex2 = slides2.length - 1;
    }
    showSlide(slideIndex2);
}

// Next slide function
function nextSlide() {
    slideIndex2++;
    if (slideIndex2 >= slides2.length) {
        slideIndex2 = 0;
    }
    showSlide(slideIndex2);
}

// Display a slide
function showSlide(index) {
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[index].style.display = "block";

    // Hide all slide titles
    const slideTitles = document.getElementsByClassName("slide-title");
    for (let i = 0; i < slideTitles.length; i++) {
        slideTitles[i].style.display = "none";
    }
    // Show the title of the current slide
    slideTitles[index].style.display = "block";
}
