var MyImage = (function () {
    function MyImage(text, img) {
        this.text = text;
        this.img = img;
    }
    return MyImage;
})();
exports.MyImage = MyImage;
var MyPage = (function () {
    function MyPage(id, name, images) {
        this.id = id;
        this.name = name;
        this.images = images;
    }
    return MyPage;
})();
exports.MyPage = MyPage;
function getSeed() {
    return [homePage, gotoPage, foodPage];
}
exports.getSeed = getSeed;
var homePage = new MyPage("home", "Algemeen", [
    {
        text: "Blij",
        img: "happy.jpg"
    },
    {
        text: "Bedroefd",
        img: "unhappy.jpg"
    },
    {
        text: "Gaan",
        page: "goto",
        img: "goto.jpg"
    },
    {
        text: "Voedsel",
        page: "food",
        img: "food.jpg"
    },
    {
        text: "Willen",
        img: "want.jpg"
    },
    {
        text: "Vies",
        img: "yucky.jpg"
    },
    {
        text: "Nee",
        img: "no.jpg"
    },
    {
        text: "Slapen, moe",
        img: "sleep.jpg"
    }
]);
var gotoPage = new MyPage("goto", "Gaan", [
    {
        text: "Winkel",
        img: "supermarket.jpg"
    },
    {
        text: "Badkamer",
        img: "bathroom.jpg"
    },
    {
        text: "Slaapkamer",
        img: "bedroom.jpg"
    },
    {
        text: "Tandarts",
        img: "dentist.jpg"
    },
    {
        text: "Dokter",
        img: "doctor.jpg",
    }
]);
var foodPage = new MyPage("food", "Voedsel", [
    {
        text: "Ontbijt",
        img: "corn flakes.jpg"
    },
    {
        text: "Ijsje",
        img: "ice cream.jpg"
    },
    {
        text: "Melk",
        img: "milk.jpg"
    },
    {
        text: "Sinaasappelsap",
        img: "orange juice.jpg"
    },
    {
        text: "Boterham",
        img: "sandwich.jpg"
    },
    {
        text: "Avondeten",
        img: "spaghetti.jpg"
    },
]);
//# sourceMappingURL=seedData.js.map