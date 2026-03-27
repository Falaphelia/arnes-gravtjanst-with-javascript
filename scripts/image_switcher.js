const images = ["../img/machine1.webp", "../img/machine2.webp", "../img/machine3.webp", "../img/machine4.webp",
    "../img/machine5.webp", "../img/machine6.webp", "../img/machine7.webp", "../img/machine8.webp"];

const counter = document.getElementById("image_number");
const displayImg = document.getElementById("main-gallery-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let currentImageIndex = 0;

counter.innerHTML = "Bild: " + (currentImageIndex+1) + "/" + images.length;

function updateImage() {
    displayImg.src = images[currentImageIndex];
    counter.innerHTML = "Bild: " + (currentImageIndex+1) + "/" + images.length; /*Also updates text since we only
    ever need to update it when updating picture*/
}

function next_image() {

    if (currentImageIndex >= images.length - 1) {
        currentImageIndex = 0;
    } else {currentImageIndex++}

    updateImage();
}

function prev_image() {

    if (currentImageIndex <= 0) {
        currentImageIndex = images.length -1;
    } else {currentImageIndex--}

    updateImage();
}

prevBtn.addEventListener("click", prev_image);
nextBtn.addEventListener("click", next_image);
