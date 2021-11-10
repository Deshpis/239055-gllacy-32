let searchBtn = document.querySelector(".main-search-wrapper");
let searchInput = document.querySelector("[name=input-search]");

searchBtn.addEventListener("mouseover", function (evt) {
    evt.preventDefault();
    searchInput.focus();
})