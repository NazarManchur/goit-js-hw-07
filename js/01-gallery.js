import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery") 

const photos = galleryItems.map(({ preview, original, description}) =>
    `<li class= "gallery__item">
     <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src = "${preview}"
      data-source = "${original}"
      alt = "${description}"
    />
  </a>
</li>`).join("");

galleryList.insertAdjacentHTML("beforeend", photos)
galleryList.addEventListener("click", openBig)



function openBig(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
    instance.show();
 
    galleryList.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        instance.close()
    }
    })
    
}



















