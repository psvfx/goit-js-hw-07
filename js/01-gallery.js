import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

// 1. Create and render markup

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

const markupOfElementsGallery = galleryItems.map(
  (galleryItems) =>
    `<li class="gallery__item">
  <a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image "
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>
</li>`
);
// console.log(markupOfElementsGallery);

galleryEl.insertAdjacentHTML("beforeend", markupOfElementsGallery.join(""));

// 2. Implementing delegation to ul.gallery and getting the URL of the large image

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImageURL = event.target.dataset.source;
  //   console.log(largeImageURL);

  // 3. Opening a modal window by clicking on a gallery element and closing the modal window after pressing the Escape key

  const modalImg = basicLightbox.create(`<img
          width="100%"
          height="100%"
          src = ${largeImageURL}
        >`);

  modalImg.show();

  galleryEl.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.key === "Escape") {
      modalImg.close();
    }
  }
});
