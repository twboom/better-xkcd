// Get the box with the comics
const comicContainer = document.getElementById("middleContainer");

// Create the toggle button
const toggleButton = document.createElement('button');
toggleButton.id = 'fullscreen-toggle'
toggleButton.innerHTML = fsEnter;
toggleButton.addEventListener('click', toggle);

// Toggle function
function toggle() {
    document.body.classList.toggle("fullscreen");
    toggleButton.classList.toggle("fullscreen");

    if (toggleButton.classList.contains('fullscreen')) {
        toggleButton.innerHTML = fsExit;
    } else {
        toggleButton.innerHTML = fsEnter
    };
};

// Initiation function
function init() {
    comicContainer.appendChild(toggleButton);
};

if (comicContainer) {
    init();
};