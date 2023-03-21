// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryArr = document.querySelector('.gallery');

const galleryEl = ({ preview, original, description }) => {
    
    return `<li>
              <a class="gallery__item" href="${original}">
                 <img  src="${preview}" title="${description}" alt="${description}" data-original='${original}' class="gallery__image">
              </a>
            </li>`;
  };

  const galleryList = galleryItems
  .map(galleryEl)
  .join('');

//   
  
  galleryArr.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox('.gallery a', {captionData: 'alt', captionPosition: 'bottom', captionDelay: 250});