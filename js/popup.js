var link = document.querySelector(".btn-appointment");
var popup = document.querySelector(".modal-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
