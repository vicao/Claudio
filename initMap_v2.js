  function initMap() {
    mainMap = L.map('map').setView([-23.5505, -46.6333], 8);
    mapTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 18
    }).addTo(mainMap);
    cityBubblesLayer = L.layerGroup().addTo(mainMap);
  }
