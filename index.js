document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `images/${image}`;
                imgElement.alt = image;
                imgElement.classList.add('gallery-item');
                gallery.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error loading images:', error));
});
