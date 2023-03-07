// QUERY SELECTORS 
var hudContainer = document.querySelector(".hud-container");
var p1Wins = document.querySelector(".p1-wins");
var message = document.querySelector(".message");
var p2Wins = document.querySelector(".p2-wins");
var ticTacToeGrid = document.querySelector(".tic-tac-toe-grid");

// GLOBAL VARIABLES 
var currentGame = new Game;
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

// EVENT LISTENERS 
ticTacToeGrid.addEventListener("click", function(){updateGrid(event)});

// FUNCTIONS
function switchPlayer()  {
    if (currentGame.activePlayer === currentGame.p1)   {
        currentGame.activePlayer = currentGame.p2;
    } else {
        currentGame.activePlayer = currentGame.p1;
    }
}

function checkForDraw() {
    var inPlayCounter = 0;
    for (var i = 0; i < tokensInPlay.length; i++)   {
        if (tokensInPlay[i] !== "") {
            inPlayCounter = (inPlayCounter +1);
        }
    }
    if (inPlayCounter === 9 && currentGame.gameState !== "win")    {
        currentGame.gameState = "draw";
        updateMessage();
    }
}

function checkForWin()  {
    for (var i = 0; i < winningCombos.length; i++)  {
        var pos0 = winningCombos[i][0];
        var pos1 = winningCombos[i][1];
        var pos2 = winningCombos[i][2];
        if (tokensInPlay[pos0] !== "" &&
            tokensInPlay[pos1] !== "" &&
            tokensInPlay[pos2] !== "" &&
            tokensInPlay[pos0] === tokensInPlay[pos1] &&
            tokensInPlay[pos1] === tokensInPlay[pos2] )  {
                currentGame.gameState = "win";
                currentGame.winner = tokensInPlay[pos0];
                updateMessage();
            }
    }
}

function reset()  {
    hudContainer.style.backgroundImage = "url(assets/header.png)";
    tokensInPlay = ["", "", "", "", "", "", "", "", ""];
    currentGame.gameState = "in progress";
    currentGame.activeToken = currentGame.activePlayer.token;
    console.log(currentGame.activePlayer.token);
    message.innerHTML = `It's ${currentGame.activeToken}'s turn`;
    var gridFields = document.querySelectorAll(".grid");
    for (var i = 0; i < gridFields.length; i++) {
        gridFields[i].innerText = "";
    }
}

function updateGrid()   {
    if (currentGame.gameState === "in progress")    {
        var gridID = event.target.id;
        var target = document.getElementById(`${gridID}`);
        tokensInPlay.splice(gridID, 1, currentGame.activePlayer.placeholder);
        if (target.innerText === "")    {
            target.innerText = currentGame.activePlayer.token;
            updateMessage();
            switchPlayer();
            checkForWin();
            checkForDraw();
        }
    }
}


function updateMessage()    {
    if (currentGame.gameState === "draw") {
        message.innerText = "It's a draw!";
        setTimeout(reset, 3000);
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === currentGame.p2) {
        hudContainer.style.backgroundImage = "url(assets/header-p1-win.png)";
        message.innerText = currentGame.p1.winMessage;
        currentGame.p1.wins = (currentGame.p1.wins +1);
        p1Wins.innerText = `${currentGame.p1.wins} wins`;
        setTimeout(reset, 3000);
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === currentGame.p1){
        hudContainer.style.backgroundImage = "url(assets/header-p2-win.png)";
        message.innerText = currentGame.p2.winMessage;
        currentGame.p2.wins = (currentGame.p2.wins +1);
        p2Wins.innerText = `${currentGame.p2.wins} wins`;
        setTimeout(reset, 3000);
    } else if (currentGame.gameState === "in progress" && currentGame.activePlayer === currentGame.p1)  {
        message.innerText = "It's 🔥's turn";
    } else if (currentGame.gameState === "in progress" && currentGame.activePlayer === currentGame.p2) {
        message.innerText = "It's 🍌's turn";
    }
}
