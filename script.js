const galleryElement = document.querySelector("[data-js-gallery]")
const modalImageElement = document.querySelector("[data-js-modal-img]")
const modalElement = document.querySelector("[data-js-modal]")
const modalCloseElement = document.querySelector("[data-js-modal-close]")
const galleryItemElements = document.querySelectorAll(".gallery__item")
const modalPrevButtonElement = document.querySelector("[data-js-modal-prev]")
const modalNextButtonElement = document.querySelector("[data-js-modal-next]")
let currentIndex = 0

const openModal = (event) => {
  modalElement.classList.add("active")
  modalImageElement.src = event.target.src
  
  currentIndex= Array.from(galleryItemElements).indexOf(event.target)
}

const closeModal = () => {
  modalElement.classList.remove('active')
  modalImageElement.src = ''
}

const switchImage = () => {
  modalImageElement.src = galleryItemElements[currentIndex].src
}

const changeImage = (direction) => {
  currentIndex += direction
  if (currentIndex < 0) currentIndex = galleryItemElements.length - 1
  if (currentIndex >= galleryItemElements.length) currentIndex = 0
  switchImage()
}

galleryElement.addEventListener("click", openModal)

modalCloseElement.addEventListener("click", closeModal)

modalElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModal()
  }
})

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") closeModal()
  if (event.code === "ArrowLeft") changeImage(-1)
  if (event.code === "ArrowRight") changeImage(1)
})

modalPrevButtonElement.addEventListener("click", () => changeImage(-1))
modalNextButtonElement.addEventListener("click", () => changeImage(1))