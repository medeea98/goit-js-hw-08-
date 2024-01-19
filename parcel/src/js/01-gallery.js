// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
let htmlContent = '';

for (const item of galleryItems) {
    htmlContent += `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-src="${item.original}" alt="${item.description || 'Image description'}" />
        </a>
    </li> `;
}
console.log(htmlContent);
galleryContainer.insertAdjacentHTML('beforeend', htmlContent);

const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(e);
    const source = e.target.dataset.src;
    console.log(source);
    const lightBoxModal = basicLightbox.create(`<img src="${source}">`);
    lightBoxModal.show();

    const handleEscapePress = (e) => {
        if (e.key === 'Escape' && lightBoxModal.visible()) {
            lightBoxModal.close();
            document.removeEventListener('keydown', handleEscapePress);
        }
    };

    document.addEventListener('keydown', handleEscapePress);
};

galleryContainer.addEventListener('click', handleClick);
galleryContainer.addEventListener('click', handleClick);
document.addEventListener("DOMContentLoaded", function () {
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
});