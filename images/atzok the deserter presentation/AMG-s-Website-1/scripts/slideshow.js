// This file implements a slideshow feature for displaying images from the project.

let currentIndex = 0;
const images = [
    'images/atzok rough design sketches.jpg',
    'images/atzok refined design.jpg',
    'images/d4a5 design concepts.jpg',
    'images/d4a5 final design.png',
    'images/trosk design concepts.png',
    'images/trosk final design.png'
];

function showImage(index) {
    const slideshowContainer = document.getElementById('slideshow');
    slideshowContainer.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', previousImage);
});