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

// Open project overlay
const openProject = () => {
    window.location.assign('projet/Voteit.html');
}
const openProject2 = () => {
    window.location.assign('projet/Rails.html');
}

const openProject3 = () => {
    window.location.assign('projet/Castrip.html');
}

const projectButtons = document.querySelectorAll('.open-project-button');
const projectOverlay = document.querySelector('.project-overlay');
const closeProjectButton = document.querySelector('.close-project-button');

// Display the selected project overlay
function openProjectOverlay() {
    projectOverlay.classList.add('active');
}

// Hide the selected project overlay
function closeProjectOverlay() {
    projectOverlay.classList.remove('active');
}

// Add event listeners to project buttons
projectButtons.forEach((button) => {
    button.addEventListener('click', openProjectOverlay);
});


// Add event listener to close button
closeProjectButton.addEventListener('click', closeProjectOverlay);
