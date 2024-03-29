document.getElementById("pdfButton").addEventListener("click", function() {
  var pdfUrl = "pdf/LAPORAN UAS SISTEM INFORMASI GEOGRAFIS _ KELOMPOK 1 _ TI21B.pdf";
  window.open(pdfUrl, "_blank");
  // var embedElement = document.getElementById("pdfEmbed");
  
  // embedElement.setAttribute("src", pdfUrl);
  // embedElement.style.display = "block";
});


var map = L.map('map').setView([-7.1122750799969845, 106.75116023911009], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Data tempat wisata (contoh data statis)
var places = [
  {
    name: 'Curug Sawer',
    latitude: -6.831057724427677,
    longitude: 106.93255210813517,
    description: '5W9M+G2W, Gede Pangrango, Kec. Kadudampit, Kabupaten Sukabumi, Jawa Barat 43153',
    image: 'assets/curugswaer.jpg',
  },
  {
    name: 'Jembatan gantung situ gunung',
    latitude: -6.835681226872697,
    longitude: 106.92857633572523,
    description: 'Jl. Kadudampit, Gede Pangrango, Kec. Kadudampit, Kabupaten Sukabumi, Jawa Barat 43153',
    image: 'assets/map-img/jembatan.jpg',
  },
  {
    name: 'Bukit Karang Para',
    latitude: -6.948696589713549,
    longitude: 106.88142857738929,
    description: '3V2J+3GG, Cibolang, Kec. Gn. Guruh, Kabupaten Sukabumi, Jawa Barat 43156',
    image: 'assets/map-img/karangpara.jpg',
  },
  {
    name: 'Curug Cimarinjung',
    latitude: -7.169803638933179,
    longitude: 106.47331450813903,
    description: 'Jl. Cimarinjung No.2, Ciwaru, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
    image: 'assets/map-img/cimarinjung.jpg',
  },
  {
    name: 'Pantai Amada Ratu',
    latitude: -7.374692330602861,
    longitude: 106.48663859650557,
    description: 'JFGP+2JG, JL. Raya Ujung Genteng, Desa Purwasedar, Purwasedar, Kec. Ciracap, Kabupaten Sukabumi, Jawa Barat',
    image: 'assets/map-img/pantai1.jpg',
  },
  {
    name: 'Santa Sea Waterpark',
    latitude: -6.948457941484304,
    longitude: 106.92624948163825,
    description: 'Jl. Lio Santa, Gedongpanjang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43144',
    image: 'assets/map-img/santasea.jpg',
  },
  {
    name: 'Curug Puncak Manik',
    latitude: -7.255740720155294,
    longitude: 106.50300207323215,
    description: 'Cibenda, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
    image: 'assets/map-img/curug manuk.jpg',
  },
  {
    name: 'Pantai Citepus',
    latitude: -6.967354771412439,
    longitude: 106.51897667512199,
    description: 'Jl. Raya Cisolok - Pelabuhanratu No.16, Citepus, Kec. Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat 43364',
    image: 'assets/map-img/citepus.jpg',
  },
  {
    name: 'Danau Batu Bacan',
    latitude: -6.885523364014571,
    longitude: 106.98542789649974,
    description: '4X7P+P45, Langensari, Kec. Sukaraja, Kabupaten Sukabumi, Jawa Barat 43192',
    image: 'assets/map-img/batu bacan.jpg',
  },
  {
    name: 'Bukit Durian Sagara',
    latitude: -6.9499506430149856,
    longitude: 106.51787288857415,
    description: 'Jl. Raya Cisolok - Pelabuhanratu No.16, Citepus, Kec. Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat 43364',
    image: 'assets/map-img/durian sagara.jpg',
  },
  {
    name: 'Kampung Lisung Uyut',
    latitude: -6.982000693357085,
    longitude: 106.96013025372879,
    description: 'RT.03/RW.07, Cijangkar, Kec. Nyalindung, Kabupaten Sukabumi, Jawa Barat 43196',
    image: 'assets/map-img/lisung uyut.jpeg',
  },
  {
    name: 'Curug Awang',
    latitude: -7.259431835880095,
    longitude: 106.51047469464937,
    description: 'Cibenda, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
    image: 'assets/map-img/curug awang.jpg',
  },
  {
    name: 'Curug Sodong',
    latitude: -7.185272733766311,
    longitude: 106.49784722348488,
    description: 'Komplek Geopark Ciletuh, Ciemas, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
    image: 'assets/map-img/curug sogong.jpg',
  },
  {
    name: 'Pantai Cicaladi',
    latitude: -7.414393149147737,
    longitude: 106.5804572099968,
    description: 'HHPJ+557, Cicaladi, Sukatani, Kec. Surade, Kabupaten Sukabumi, Jawa Barat 43179',
    image: 'assets/map-img/panatai cimanja.jpg',
  },
  {
    name: 'Curug Bibijilan Sukabumi',
    latitude: -7.024524443314524,
    longitude: 106.90664599793001,
    description: 'Unnamed Road, Cimerang, Kec. Purabaya, Kabupaten Sukabumi, Jawa Barat 43196',
    image: 'assets/map-img/bibijilan.jpeg',
  },
];

// Tambahkan marker untuk setiap tempat wisata
places.forEach(function(place) {
  var marker = L.marker([place.latitude, place.longitude]).addTo(map);
  marker.bindPopup(`
    <h3>${place.name}</h3>
    <p>${place.description}</p>
    <img src="${place.image}" alt="${place.name}" style="width: 200px; height: 100px; object-fit: cover; object-position: center;">
  `);
});
