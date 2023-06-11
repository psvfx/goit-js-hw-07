import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

const markupOfElementsGallery = galleryItems.map(
  (galleryItems) =>
    `<li class="gallery__item">
   <a class="gallery__link" href=${galleryItems.original}>
      <img class="gallery__image" src=${galleryItems.preview} alt=${galleryItems.description} />
   </a>
</li>`
);

// console.log(markupOfElementsGallery);

galleryEl.insertAdjacentHTML("beforeend", markupOfElementsGallery.join(""));

galleryEl.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
}

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
