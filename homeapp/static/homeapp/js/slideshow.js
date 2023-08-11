// static/js/slideshow.js
let currentIndex = 0;
const images = document.querySelectorAll('.slideshow-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach(image => {
        image.style.display = 'none';
    });
    images[index].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Initial display
showImage(currentIndex);

// Change image every few seconds
setInterval(nextImage, 5000); // Change image every 5 seconds
