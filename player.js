class Player {
    constructor(playerDetails)   {
        this.id = playerDetails.number;
        this.token = playerDetails.token;
        this.wins = 0;
        this.activeSquares = ["0", "1", "2"];
        this.isActive = false;
    }
    increaseWins(winner)   {
        this.wins = (this.wins +1);
        return `${winner} won! `
    }
}
module.exports = Player;