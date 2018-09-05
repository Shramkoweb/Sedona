var link = document.querySelector(".btn-appointment");
var popup = document.querySelector(".modal-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult]");
var kids = popup.querySelector("[name=kids]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  popup.classList.toggle("modal-show");
  arrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adult.value || !kids.value) {
    evt.preventDefault();
    alert("Нужно ввести все значения");
  }
});
