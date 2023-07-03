var map = L.map('map').setView([-7.1122750799969845, 106.75116023911009], 10);

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
  },
  {
    name: 'Jembatan gantung situ gunung',
    latitude: -6.835681226872697,
    longitude: 106.92857633572523,
    description: 'Jl. Kadudampit, Gede Pangrango, Kec. Kadudampit, Kabupaten Sukabumi, Jawa Barat 43153',
  },
  {
    name: 'Bukit Karang Para',
    latitude: -6.948696589713549,
    longitude: 106.88142857738929,
    description: '3V2J+3GG, Cibolang, Kec. Gn. Guruh, Kabupaten Sukabumi, Jawa Barat 43156',
  },
  {
    name: 'Curug Cimarinjung',
    latitude: -7.169803638933179,
    longitude: 106.47331450813903,
    description: 'Jl. Cimarinjung No.2, Ciwaru, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
  },
  {
    name: 'Pantai Amada Ratu',
    latitude: -7.374692330602861,
    longitude: 106.48663859650557,
    description: 'JFGP+2JG, JL. Raya Ujung Genteng, Desa Purwasedar, Purwasedar, Kec. Ciracap, Kabupaten Sukabumi, Jawa Barat',
  },
  {
    name: 'Santa Sea Waterpark',
    latitude: -6.948457941484304,
    longitude: 106.92624948163825,
    description: 'Jl. Lio Santa, Gedongpanjang, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43144',
  },
  {
    name: 'Curug Puncak Manik',
    latitude: -7.255740720155294,
    longitude: 106.50300207323215,
    description: 'Cibenda, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
  },
  {
    name: 'Pantai Citepus',
    latitude: -6.967354771412439,
    longitude: 106.51897667512199,
    description: 'Jl. Raya Cisolok - Pelabuhanratu No.16, Citepus, Kec. Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat 43364',
  },
  {
    name: 'Danau Batu Bacan',
    latitude: -6.885523364014571,
    longitude: 106.98542789649974,
    description: '4X7P+P45, Langensari, Kec. Sukaraja, Kabupaten Sukabumi, Jawa Barat 43192',
  },
  {
    name: 'Bukit Durian Sagara',
    latitude: -6.9499506430149856,
    longitude: 106.51787288857415,
    description: 'Jl. Raya Cisolok - Pelabuhanratu No.16, Citepus, Kec. Pelabuhanratu, Kabupaten Sukabumi, Jawa Barat 43364',
  },
  {
    name: 'Kampung Lisung Uyut',
    latitude: -6.982000693357085,
    longitude: 106.96013025372879,
    description: 'RT.03/RW.07, Cijangkar, Kec. Nyalindung, Kabupaten Sukabumi, Jawa Barat 43196',
  },
  {
    name: 'Curug Awang',
    latitude: -7.259431835880095,
    longitude: 106.51047469464937,
    description: 'Cibenda, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
  },
  {
    name: 'Curug Sodong',
    latitude: -7.185272733766311,
    longitude: 106.49784722348488,
    description: 'Komplek Geopark Ciletuh, Ciemas, Kec. Ciemas, Kabupaten Sukabumi, Jawa Barat 43177',
  },
  {
    name: 'Pantai Cicaladi',
    latitude: -7.414393149147737,
    longitude: 106.5804572099968,
    description: 'HHPJ+557, Cicaladi, Sukatani, Kec. Surade, Kabupaten Sukabumi, Jawa Barat 43179',
  },
  {
    name: 'Curug Bibijilan Sukabumi',
    latitude: -7.024524443314524,
    longitude: 106.90664599793001,
    description: 'Unnamed Road, Cimerang, Kec. Purabaya, Kabupaten Sukabumi, Jawa Barat 43196',
  },
];

// Tambahkan marker untuk setiap tempat wisata
places.forEach(function(place) {
  var marker = L.marker([place.latitude, place.longitude]).addTo(map);
  marker.bindPopup(`
    <h3>${place.name}</h3>
    <p>${place.description}</p>
  `);
});
