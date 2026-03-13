const images = ["../img/machine1.jpg", "../img/machine2.jpg", "../img/machine3.jpg", "../img/machine4.jpg",
    "../img/machine5.jpg", "../img/machine6.jpg", "../img/machine7.jpg", "../img/machine8.jpg"]

const counter = document.getElementById("image_number")
const displayImg = document.getElementById("main-gallery-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let currentImageIndex = 0;

counter.innerHTML = "Bild: " + (currentImageIndex+1) + "/" + images.length

function updateImage() {
    displayImg.src = images[currentImageIndex];
    counter.innerHTML = "Bild: " + (currentImageIndex+1) + "/" + images.length /*Also updates text since we only
    ever need to update it when updating picture*/
}

function next_image() {

    if (currentImageIndex >= images.length - 1) {
        currentImageIndex = 0;
    } else {currentImageIndex++}

    updateImage()
}

function prev_image() {

    if (currentImageIndex <= 0) {
        currentImageIndex = images.length -1;
    } else {currentImageIndex--}

    updateImage();
}

prevBtn.addEventListener("click", prev_image);
nextBtn.addEventListener("click", next_image);
