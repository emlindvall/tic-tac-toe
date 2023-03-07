class Player {
    constructor(playerDetails)   {
        this.id = playerDetails.number;
        this.token = playerDetails.token;
        this.placeholder = playerDetails.placeholder;
        this.winMessage = playerDetails.winMessage;
        this.wins = 0;
    }
}