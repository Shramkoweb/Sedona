var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.8543583,
      lng: -111.8651786
    },
    zoom: 10
  });
}
