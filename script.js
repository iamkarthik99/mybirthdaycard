// Array of images (Use relative paths inside your "images" folder)
// Array of images
const images = [
    "images/tharuni.jpg",
    "images/tharuni1.jpg",
    "images/tharuni2.jpg",
    "images/tharuni3.jpg"
];

let currentIndex = 0;
let slides = document.querySelectorAll(".slide");

function startSlideshow() {
    if (slides.length === 0) return; // Exit if no images found

    slides[currentIndex].style.display = "block"; // Show first image

    setInterval(() => {
        slides[currentIndex].style.display = "none"; // Hide current image
        currentIndex = (currentIndex + 1) % slides.length; // Move to next image
        slides[currentIndex].style.display = "block"; // Show next image
    }, 2000); // Change image every 3 seconds
}


// Function to go to the next slide manually
function nextSlide() {
    stopSlideshow();
    currentIndex = (currentIndex + 1) % images.length; // Move forward
    updateSlide();
}

// Function to go to the previous slide manually
function prevSlide() {
    stopSlideshow();
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move backward
    updateSlide();
}

// Function to update slide image
function updateSlide() {
    let slideshowImage = document.getElementById("slideshow");
    slideshowImage.src = images[currentIndex];
}

// Function to stop the slideshow when navigating manually
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Function for next surprise alert
function nextSurprise() {
    alert("Stay tuned for the next surprise! 🎁");
}

document.getElementById('surpriseBtn').addEventListener('click', function() {
    alert("Happy Birthday, Dearest Friend! 🎉 Enjoy your special day!---Em chusthunav inkem levu😁"); // Example surprise
    // You can replace the alert with other actions, like:
    // - Redirecting to a special page: window.location.href = "surprise.html";
    // - Displaying a hidden message or image: document.getElementById('hiddenContent').style.display = 'block';
    // - Playing a sound or video.
});