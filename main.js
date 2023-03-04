// QUERY SELECTORS 
// QUERY SELECTORS - HUD CONTAINER 
// QUERY SELECTORS - TIC TAC TOE GRID
var ticTacToeGrid = document.querySelector(".tic-tac-toe-grid");
var p1Wins = document.querySelector(".p1-wins");
var message = document.querySelector(".message");
var p2Wins = document.querySelector(".p2-wins");

// GLOBAL VARIABLES 
var tokensInPlay = ["", "", "", "", "", "", "", "", ""];
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


var currentGame = new Game;
// console.log(currentGame);
// console.log(currentGame.p1);

// EVENT LISTENERS 
ticTacToeGrid.addEventListener("click", function(){updateGrid(event)});

// FUNCTIONS
// FUNCTIONS - DATA MODEL UPDATES
function findActivePlayer()  {
    if (currentGame.turnCounter % 2 == 0)   {
        currentGame.activePlayer = "p2";
        currentGame.activeToken = "f";
        // console.log(activeToken);
    } else {
        currentGame.activePlayer = "p1";
        currentGame.activeToken = "b";
        // console.log(activeToken); 
    }
}

function checkForDraw() {
    if (currentGame.turnCounter === 8)  {
        currentGame.gameState = "draw";
        // reset();
    }
}

function checkForWins()  {
    for (var i = 0; i < winningCombos.length; i++)  {
        var pos0 = winningCombos[i][0];
        var pos1 = winningCombos[i][1];
        var pos2 = winningCombos[i][2];
        // console.log(pos0, pos1, pos2);
        // console.log(tokensInPlay[pos0], tokensInPlay[pos1], tokensInPlay[pos2]);
        if (tokensInPlay[pos0] !== "" &&
            tokensInPlay[pos1] !== "" &&
            tokensInPlay[pos2] !== "" &&
            tokensInPlay[pos0] === tokensInPlay[pos1] &&
            tokensInPlay[pos1] === tokensInPlay[pos2] )  {
                console.log(`The winning combination is ${winningCombos[i]}`)
                currentGame.gameState = "win";
                currentGame.winner = tokensInPlay[pos0];
                console.log(`Aaaaaaaand the winner is: ${currentGame.winner}`)
                updateMessage();
            }
    }
}

function reset()  {
    tokensInPlay = ["", "", "", "", "", "", "", "", ""];
    currentGame.gameState = "in progress";
    currentGame.turnCounter = 1;
    currentGame.activePlayer = "";
    currentGame.activeToken = "";
    message.innerHTML = "It's 🍌's turn";
    var gridFields = document.querySelectorAll(".grid");
    for (var i = 0; i < gridFields.length; i++) {
        gridFields[i].innerText = "";
    }
}


// FUNCTIONS - DOM UPDATES 
function updateGrid()   {
    var gridID = event.target.id;
    console.log(gridID);
    findActivePlayer();
    tokensInPlay.splice(gridID, 1, currentGame.activeToken);
    console.log(tokensInPlay);
    var target = document.getElementById(`${gridID}`);
    console.log(target);
    if (currentGame.activeToken === "b" && target.innerText === "")    {
        target.innerText = "🍌"
        updateMessage();
        currentGame.turnCounter = (currentGame.turnCounter +1);
    } else if (currentGame.activeToken === "f" && target.innerText === ""){
        target.innerText = "🔥"
        updateMessage();
        currentGame.turnCounter = (currentGame.turnCounter +1);
    }
    checkForDraw();
    checkForWins();
    // console.log(currentGame.turnCounter);
}

function updateMessage() {
    if (currentGame.gameState === "in progress" && currentGame.activePlayer === "p1")  {
        message.innerText = "It's 🔥's turn";
    } else if (currentGame.gameState === "in progress" && currentGame.activePlayer === "p2") {
        message.innerText = "It's 🍌's turn";
    } else if (currentGame.gameState === "draw") {
        message.innerText === "It's a draw";
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === "p1") {
        message.innerText = "there's always 💰 in the 🍌 stand";
        currentGame.p1.wins = (currentGame.p1.wins +1);
        p1Wins.innerText = `${currentGame.p1.wins} wins`;
        setTimeout(reset, 3000);
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === "p2"){
        message.innerText = "🔥🔥 bananas flambé 🔥🔥";
        currentGame.p2.wins = (currentGame.p2.wins +1);
        p2Wins.innerText = `${currentGame.p2.wins} wins`;
        console.log(currentGame.p2.wins);
        setTimeout(reset, 3000);
    }
}