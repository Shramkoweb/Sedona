var map;
var marker;
var loc;
var link = document.querySelector(".btn-appointment");
var popup = document.querySelector(".modal-form");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adult = popup.querySelector("[name=adult]");
var kids = popup.querySelector("[name=kids]");
var form = popup.querySelector("form");
var html = document.querySelector("html")

function initMap() {
  map = new google.maps.Map(document.querySelector(".map-wrapper"), {
    center: {
      lat: 34.7532446,
      lng: -111.7555027
    },
    zoom: 9
  });

  loc = {
    lat: 34.8697359,
    lng: -111.7609978
  };
  marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

link.addEventListener("click", function(evt) {
  popup.classList.toggle("modal-show");
  arrival.focus();
});

form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value || !adult.value || !kids.value) {
    evt.preventDefault();
    alert("Нужно ввести все значения");
  }
});
html.classList.remove("no-js");
html.classList.add("js");
