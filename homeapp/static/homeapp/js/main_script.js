// JavaScript to control the slideshow 
/*
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}
*/


// JavaScript to control the slideshow with fadeout animation and
// JavaScript to slide the button to the right on first-time scroll
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Fadeout animation
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.opacity = "0"; // Start fadeout
        slides[slideIndex - 1].style.display = "block"; // Make the slide visible
        fadeIn(slides[slideIndex - 1]); // Start fadein animation
    }

    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

// Fadein animation function
function fadeIn(element) {
    let opacity = 0;
    let timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.05; // Adjust this value to control animation speed
    }, 30); // Adjust this value to control animation smoothness
}


// JavaScript to show the scroll button and handle scrolling animation
window.onload = function () {
    const scrollButton = document.getElementById("scrollButton");
    

    // Show the scroll button after a delay
    setTimeout(function () {
        scrollButton.style.display = "block";
    }, 3000); // Adjust the delay time (in milliseconds) as needed

    // Scroll to the top of the page when the button is clicked
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
};




// JavaScript to control the slideshow and scrolling

/*let slideIndex2 = 0;
const slides2 = document.getElementsByClassName("slide2");

// Initial slide display
showSlide(slideIndex2);

// Automatic slide change
setInterval(function () {
    slideIndex2++;
    if (slideIndex2 >= slides2.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex2);
}, 5000); // Change slide every 10 seconds (adjust as needed)

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
}

*/




