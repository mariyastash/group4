const phrases = ["Ned Stark", "Robert Baratheon", "Jaime Lannister", "Catelyn Stark", "Cersei Lannister",
    "Daenerys Targaryen", "Jorah Mormont", "Viserys Targaryen", "Jon Snow", "Sansa Stark",
    "Arya Stark", "Robb Stark"];

const welcomeStr = "Welcome To HangMan Game";
console.log(welcomeStr);

function Game(phrases) {

    this.phrases = phrases;
    let life = 10;

    this.isWon = function (phrase, letters) {
    }

    this.runGame = function () {
        
        console.log(this.phrases);
        let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        var tempPhrase = phrase.replace(/[a-z]/gi, "_ ");
        console.log(phrase);
        console.log(tempPhrase);
        // console.log("Lets play the game :)");



    }
}

var game = new Game(phrases);
game.runGame();

