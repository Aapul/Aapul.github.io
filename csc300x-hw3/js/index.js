const articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const images = article.querySelectorAll('.favorites img');

    for (let j = 0; j < images.length; j++) {
        const image = images[j];
        image.addEventListener('click', expand);
    }
}

function expand(event) {
    const clickedImage = event.currentTarget;
    const container = clickedImage.closest('.favorites');

    const allImages = container.querySelectorAll('img');
    for (let i = 0; i < allImages.length; i++) {
        const image = allImages[i];
        if (image !== clickedImage) {
            image.classList.remove('big');
            image.classList.add('small');
        }
    }

    const allDescriptions = container.querySelectorAll('.favorites .hide');
    for (let i = 0; i < allDescriptions.length; i++) {
        const description = allDescriptions[i];
        description.classList.add('hide');
        description.classList.remove('shown');
    }

    clickedImage.classList.remove('small');
    clickedImage.classList.add('big');

    const description = clickedImage.nextElementSibling;
    if (description && description.classList.contains('hide')) {
        description.classList.remove('hide');
        description.classList.add('shown');
    }
}
