function createMap() {

mapboxgl.accessToken='pk.eyJ1IjoiY2hhcmthciIsImEiOiJjbG05cWRxcnUwa2d5M2Zud3lzeHY5M2NwIn0.mL4o60vkSVrCNjlRaWBGPA'

let map = new mapboxgl.Map({

container: 'map'
style:
center:
zoom: 

});

var mark = new mapboxgl.Marker() 
    .setLngLat([])
    .AddTo(map);

window.onload{

    createMap();
};


}
module.exports = { createMap };