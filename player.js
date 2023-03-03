class Player {
    constructor(playerDetails)   {
        this.id = playerDetails.number;
        this.token = playerDetails.token;
        this.wins = 0;
        this.activeSquares = ["A1", "B1", "C1"];
        this.isActive = false;
    }
    increaseWins(winner)   {
        this.wins = (this.wins +1);
        return `${winner} won! `
    }
}
// needed and "s"
module.exports = Player;