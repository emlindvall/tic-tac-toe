class Game {
    constructor()  {
        this.p1 = new Player({number: 1, token: "🍌", placeholder: "b", winMessage: "There's always money in the banana stand!"});
        this.p2 = new Player({number: 2, token: "🔥", placeholder: "f", winMessage: "Bananas flambé!"});
        this.gameState = "in progress";
        this.activePlayer = this.p1;
        this.tokensInPlay = ["", "", "", "", "", "", "", "", ""];
        this.winner = "";
        this.audio = "true";
    }
}