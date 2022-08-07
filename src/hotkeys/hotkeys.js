const nextButton = document.querySelector('ul.comicNav > li > a[rel="next"]');
const prevButton = document.querySelector('ul.comicNav > li > a[rel="prev"]');
const fullButton = document.getElementById('fullscreen-toggle');

if (nextButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'ArrowRight') {
            nextButton.click()
        } else { return };
    });
};

if (prevButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'ArrowLeft') {
            prevButton.click()
        } else { return };
    });
};

if (prevButton) {
    document.addEventListener('keydown', evt => {
        if (evt.key === 'f') {
            fullButton.click()
        } else { return };
    });
};