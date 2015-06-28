
export class MyImage {
  constructor(public text: string, public img: string)
  {
  }
}

export class MyPage {
  constructor(public id: string, public name: string, public images: MyImage[])
  {
  }
}

export function getSeed() {
  return [homePage, gotoPage, foodPage];
}


var homePage = new MyPage(
  "home",
  "Algemeen",
  [
    {
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
  ]);

var gotoPage = new MyPage(
  "goto",
  "Gaan",
  [
    {
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
  ]);

var foodPage = new MyPage(
  "food",
  "Voedsel",
  [
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
  ]);
