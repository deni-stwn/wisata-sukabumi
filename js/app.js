var map = L.map('map').setView([-6.920140, 106.927246], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data tempat wisata (contoh data statis)
var places = [
  {
    name: 'Curug Cikaso',
    latitude: -7.179091,
    longitude: 106.877433,
    description: 'Curug Cikaso adalah salah satu air terjun yang populer di Sukabumi. Air terjun ini memiliki tiga tingkat dengan keindahan alam yang memukau.',
    image: 'curug_cikaso.jpg'
  },
  {
    name: 'Gunung Gede Pangrango',
    latitude: -6.779252,
    longitude: 106.974815,
    description: 'Gunung Gede Pangrango adalah salah satu gunung tertinggi di Jawa Barat. Tempat ini populer untuk pendakian dan trekking.',
    image: 'gunung_gede_pangrango.jpg'
  },
  {
    name: 'Kampung Naga',
    latitude: -7.174169,
    longitude: 107.325767,
    description: 'Kampung Naga adalah sebuah desa tradisional yang masih mempertahankan budaya dan adat istiadat Sunda. Desa ini terkenal dengan arsitektur dan kehidupan masyarakat yang unik.',
    image: 'kampung_naga.jpg'
  }
];

// Tambahkan marker untuk setiap tempat wisata
places.forEach(function(place) {
  var marker = L.marker([place.latitude, place.longitude]).addTo(map);
  marker.bindPopup(`
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <img src="${place.image}" alt="${place.name}" style="width: 200px; height: auto;">
  `);
});
