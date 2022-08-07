const nextButton = document.querySelector('ul.comicNav > li > a[rel="next"]');
const prevButton = document.querySelector('ul.comicNav > li > a[rel="prev"]');
const fullButton = document.getElementById('fullscreen-toggle');

function redirect(btn) {
    let link = btn.href;
    if (fullButton.classList.contains('fullscreen')) {
        link += '?fullscreen=true'
    };
    document.location.replace(link)
}

if (nextButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'ArrowRight') {
            redirect(nextButton);
        } else { return };
    });
};

if (prevButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'ArrowLeft') {
            redirect(prevButton);
        } else { return };
    });
};

if (fullButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'f') {
            fullButton.click()
        } else { return };
    });
};