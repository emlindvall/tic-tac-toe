class Game {
    constructor()  {
        this.p1 = new Player({number: 1, token: "🍌"});
        this.p2 = new Player({number: 2, token: "🔥"});
        this.gameState = "in progress";
        this.turnCounter = 1;
        this.activePlayer = "";
        this.activeToken = "";
        this.winner = "";
    }
}