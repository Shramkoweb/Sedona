var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.871002,
      lng: -111.760826
    },
    zoom: 8
  });
}
