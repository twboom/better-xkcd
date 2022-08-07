// Get the box with the comics
const comicContainer = document.getElementById("middleContainer");

// Toggle function
function toggle() {
    document.body.classList.toggle("fullscreen")
}

// Initiation function
function init() {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle fullscreen';
    toggleButton.addEventListener('click', toggle);
    comicContainer.appendChild(toggleButton);
};

if (comicContainer) {
    init();
};