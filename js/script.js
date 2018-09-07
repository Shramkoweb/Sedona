var map;

function initMap() {
  map = new google.maps.Map(document.querySelector('.map-wrapper'), {
    center: {
      lat: 34.8543583,
      lng: -111.8651786
    },
    zoom: 10
  });
}
