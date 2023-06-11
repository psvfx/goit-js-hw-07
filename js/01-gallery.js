import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

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

galleryEl.addEventListener("click", (el) => {
  el.preventDefault();

  const { target } = el;

  if (target.dataset.source) {
    console.log("click");
  }

  const modalGallery = `<img
        width="100%"
        height="100%"
        src = ${el.target.dataset.source}
      >`;

  let modalImg;

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") modalImg.close();
  };
  modalImg = basicLightbox.create(modalGallery, {
    onShow: () => galleryEl.addEventListener("keydown", onEscKeyPress),
  });
  modalImg.show();
});
