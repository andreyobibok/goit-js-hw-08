import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map((element) =>
    `<a class="gallery__item" href=${element.original}>
        <img class="gallery__image" src=${element.preview} alt=${element.description} />
    </a>`
).join("");

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', handleClick);
function handleClick(event) {
    event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250ms',
});