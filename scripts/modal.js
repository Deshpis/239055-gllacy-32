let linkModal = document.querySelector(".feedback-btn");
let modal = document.querySelector(".modal-container");
let modalClose = document.querySelector(".modal-close-btn");

linkModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-container-show");
})

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-container-show");
})
