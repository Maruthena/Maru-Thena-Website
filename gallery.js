let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;  // If we're at the last slide, go back to the first one
    }

    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 10000);  // Change image every 10 seconds
}

// Show the first slide on initial load
showSlides();

// Next/previous controls
function moveSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
}
