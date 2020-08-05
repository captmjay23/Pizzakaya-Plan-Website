function initMap(){
  var pizzakayaLocation = {lat: 13.963690, lng: 121.322487};
  var pizzkayaMap = new google.maps.Map(document.getElementById("map"), {
    zoom:4,
    center: pizzakayaLocation
  });
}