let slides = document.querySelectorAll(".slides-item");
let btnPrev = document.querySelector(".slides-button-prev");
let btnNext = document.querySelector(".slides-button-next");
let slidePage = document.querySelectorAll(".slides-pagination-btn");
let counter = 0;

btnPrev.addEventListener("click", function () {
    --counter;
    if (counter < 0) {
        slides[0].classList.remove("slides-item-current");
        slidePage[0].classList.remove("slides-pagination-btn-current");
        counter = slides.length - 1;
        slides[counter].classList.add("slides-item-current");
        slidePage[counter].classList.add("slides-pagination-btn-current");
    } else {
        slides[counter+1].classList.remove("slides-item-current");
        slidePage[counter+1].classList.remove("slides-pagination-btn-current");
        slides[counter].classList.add("slides-item-current");
        slidePage[counter].classList.add("slides-pagination-btn-current");
    }
})

btnNext.addEventListener("click", function () {
    ++counter;
    if (counter >= slides.length) {
        slides[counter-1].classList.remove("slides-item-current");
        slidePage[counter-1].classList.remove("slides-pagination-btn-current");
        counter = 0;
        slides[counter].classList.add("slides-item-current");
        slidePage[counter].classList.add("slides-pagination-btn-current");
    } else {
        slides[counter-1].classList.remove("slides-item-current");
        slidePage[counter-1].classList.remove("slides-pagination-btn-current");
        slides[counter].classList.add("slides-item-current");
        slidePage[counter].classList.add("slides-pagination-btn-current");
    }
})