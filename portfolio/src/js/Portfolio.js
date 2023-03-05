const prevBtn = document.getElementById('prev-project');
const nextBtn = document.getElementById('next-project');
const projects = document.querySelectorAll('.project');
let currentProjectIndex = 0;

// Display the current project and hide all others
function showCurrentProject() {
    for (let i = 0; i < projects.length; i++) {
        if (i === currentProjectIndex) {
            projects[i].style.display = 'flex';
        } else {
            projects[i].style.display = 'none';
        }
    }
}

// Show the next project
function showNextProject() {
    currentProjectIndex++;
    if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }
    showCurrentProject();
}

// Show the previous project
function showPrevProject() {
    currentProjectIndex--;
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    }
    showCurrentProject();
}

// Add event listeners to navigation buttons
prevBtn.addEventListener('click', showPrevProject);
nextBtn.addEventListener('click', showNextProject);

// Show the first project
showCurrentProject();

// Open the carousel overlay and the first slide
function openCarousel() {
    document.getElementById('carousel-overlay').style.display = 'block';
    document.getElementsByClassName('carousel-slide')[0].style.display = 'block';
}

// Close the carousel overlay and hide all slides
function closeCarousel() {
    document.getElementById('carousel-overlay').style.display = 'none';
    const slides = document.getElementsByClassName('carousel-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
}

// Get DOM elements
const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelector('.carousel-images');
const carouselControls = document.querySelector('.carousel-controls');
const carouselControlLeft = document.querySelector('.carousel-control.left');
const carouselControlRight = document.querySelector('.carousel-control.right');
const carouselOverlay = document.getElementById('carousel-overlay');

// Initialize current image position variable
let currentPosition = 0;

// Scroll the carousel to the left
function scrollLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        carouselImages.style.transform = `translateX(-${currentPosition * 100}%)`;
    }
}

// Scroll the carousel to the right
function scrollRight() {
    if (currentPosition < carouselImages.children.length - 1) {
        currentPosition++;
        carouselImages.style.transform = `translateX(-${currentPosition * 100}%)`;
    } else {
        // If the current image is the last one, go back to the first image
        currentPosition = 0;
        carouselImages.style.transform = `translateX(0)`;
    }
}

// Add event listeners to control buttons
carouselControlLeft.addEventListener('click', scrollLeft);
carouselControlRight.addEventListener('click', scrollRight);

// Add event listener for keyboard arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        scrollLeft();
    } else if (event.key === 'ArrowRight') {
        scrollRight();
    }
});

