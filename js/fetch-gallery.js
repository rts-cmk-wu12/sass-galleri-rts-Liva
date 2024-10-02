const API_URL = 'http://localhost:3000';

const imageGalleryContainer = document.querySelector('#image-gallery');

const response = await fetch(API_URL + '/images');
const imgData = await response.json();

imgData.forEach((img) => {
    const imgContainer = document.createElement('div');
    imgContainer.innerHTML = `<img src="${img.source}" alt="gallery-img" class="image-gallery__img">`

    imageGalleryContainer.appendChild(imgContainer);
    imgContainer.classList.add('image-gallery__img-container');
})