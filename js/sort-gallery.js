const API_URL = 'http://localhost:3000';

const categoryListElement = document.querySelector('#header__menu-container__menu');
const imageGalleryContainer = document.querySelector('#image-gallery');

let chosenCategory = 'all'

categoryListElement.addEventListener('click', (e) => {
    if (e.target.innerHTML !== 'more') {
        chosenCategory = e.target.innerHTML;
        imageGalleryContainer.innerHTML = '';
        console.log(chosenCategory);
        fetchImages()
    }
})

async function fetchImages() {
    const response = await fetch(`${API_URL}/images/category/${chosenCategory}`);
    const imgData = await response.json();

    imgData.forEach((img) => {
        const imgContainer = document.createElement('div');
        imgContainer.innerHTML = `<img src="${img.source}" alt="gallery-img" class="image-gallery__img">`

        imageGalleryContainer.appendChild(imgContainer);
        imgContainer.classList.add('image-gallery__img-container');
    })
}