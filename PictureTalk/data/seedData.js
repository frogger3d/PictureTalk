(function (seedData) {
  seedData.initialPages = [{
      id: "home",
      name: "Algemeen",
      images: [{
          text: "Blij",
          img: "happy.jpg"
        }, {
          text: "Bedroefd",
          img: "unhappy.jpg"
        }, {
          text: "Gaan",
          page: "goto",
          img: "goto.jpg"
        }, {
          text: "Voedsel",
          page: "food",
          img: "food.jpg"
        }, {
          text: "Willen",
          img: "want.jpg"
        }, {
          text: "Vies",
          img: "yucky.jpg"
        }, {
          text: "Nee",
          img: "no.jpg"
        }, {
          text: "Slapen, moe",
          img: "sleep.jpg"
        }
      ]
    }, {
      id: "goto",
      name: "Gaan",
      images: [{
          text: "Winkel",
          img: "supermarket.jpg"
        }, {
          text: "Badkamer",
          img: "bathroom.jpg"
        }, {
          text: "Slaapkamer",
          img: "bedroom.jpg"
        }, {
          text: "Tandarts",
          img: "dentist.jpg"
        }, {
          text: "Dokter",
          img: "doctor.jpg",
        }
      ]
    }, {
      id: "food",
      name: "Voedsel",
      images: [
        {
          text: "Ontbijt",
          img: "corn flakes.jpg"
        }, {
          text: "Ijsje",
          img: "ice cream.jpg"
        }, {
          text: "Melk",
          img: "milk.jpg"
        }, {
          text: "Sinaasappelsap",
          img: "orange juice.jpg"
        }, {
          text: "Boterham",
          img: "sandwich.jpg"
        }, {
          text: "Avondeten",
          img: "spaghetti.jpg"
        },
      ]
    }
  ];
})(module.exports);
