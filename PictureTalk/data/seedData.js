(function (seedData) {
  seedData.initialPages = [{
      name: "Home",
      images: [
        {
          text: "happy"
        },
        {
          text: "unhappy"
        },
        {
          text: "go to",
          page: "go to"
        },
        {
          text: "food",
          page: "food"
        }
      ]
    }, {
      name: "go to",
      images: [
        {
          text: "supermarket"
        },
        {
          text: "room"
        }]
    }, {
      name: "food",
      images: [
        {
          text: "supermarket"
        },
        {
          text: "room"
        }]
    }
  ];
})(module.exports);
