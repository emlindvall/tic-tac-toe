const Player = require('./player.js');

var winningCombos = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"], 
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
]

class Game {
    constructor()  {
        this.p1 = new Player({number: 1, token: "Banana"});
        this.p2 = new Player({number: 2, token: "Fire"});
        this.activeTurn = this.p1;
        this.activePlayer = this.p1;
        this.turnCounter = 1;
    }
    findActive()  {
        if (this.turnCounter % 2 == 0)   {
            this.activePlayer = p2;
        } else {
            this.activePlayer = p1;
        }
    }
}



module.exports = Game;