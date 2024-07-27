document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // List of image file names (you can automate this part with a more advanced setup)
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
        // Add more image file names here
    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.alt = image;
        imgElement.classList.add('gallery-item');
        gallery.appendChild(imgElement);
    });
});
