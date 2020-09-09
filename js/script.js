var formSedona = document.querySelector(".btn-search");
var popup = document.querySelector(".search-modal");
var focus = document.querySelector(".focus");
var visitorInput = document.querySelector(".visitor-input");
var form = document.querySelector(".serch-form");

formSedona.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-show");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
