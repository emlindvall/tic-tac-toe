// QUERY SELECTORS 
var p1Wins = document.querySelector(".p1-wins");
var header = document.querySelector(".header");
var message = document.querySelector(".message");
var p2Wins = document.querySelector(".p2-wins");
var ticTacToeGrid = document.querySelector(".tic-tac-toe-grid");
var audioToggle = document.querySelector(".audio-toggle");
var clearButton = document.querySelector(".clear-button");

// GLOBAL VARIABLES 

var currentGame = new Game;
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
audioToggle.addEventListener("click", toggleAudio);
clearButton.addEventListener("click", clearWins);

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
    for (var i = 0; i < currentGame.tokensInPlay.length; i++)   {
        if (currentGame.tokensInPlay[i] !== "") {
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
        if (currentGame.tokensInPlay[pos0] !== "" &&
            currentGame.tokensInPlay[pos1] !== "" &&
            currentGame.tokensInPlay[pos2] !== "" &&
            currentGame.tokensInPlay[pos0] === currentGame.tokensInPlay[pos1] &&
            currentGame.tokensInPlay[pos1] === currentGame.tokensInPlay[pos2] )  {
                currentGame.gameState = "win";
                currentGame.winner = currentGame.tokensInPlay[pos0];
                updateMessage();
            }
    }
}

function reset()  {
    currentGame.tokensInPlay = ["", "", "", "", "", "", "", "", ""];
    currentGame.gameState = "in progress";
    currentGame.activeToken = currentGame.activePlayer.token;
    message.innerHTML = `It's ${currentGame.activeToken}'s turn`;
    var gridFields = document.querySelectorAll(".grid");
    for (var i = 0; i < gridFields.length; i++) {
        gridFields[i].innerText = "";
    }
    header.src = "assets/header.png";
    updateWins();
}

function updateGrid()   {
    var gridID = event.target.id;
    var target = document.getElementById(`${gridID}`);
    if (currentGame.gameState === "in progress" && target.innerText === "")    {
            currentGame.tokensInPlay.splice(gridID, 1, currentGame.activePlayer.placeholder);
            target.innerText = currentGame.activePlayer.token;
            updateMessage();
            switchPlayer();
            checkForWin();
            checkForDraw();
    }
}

function updateMessage()    {
    if (currentGame.gameState === "draw") {
        message.innerText = "It's a draw!";
        setTimeout(reset, 4000);
        playTheme();
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === currentGame.p2) {
        currentGame.p1.wins = (currentGame.p1.wins +1);
        header.src = "assets/header-p1-win.png";
        message.innerText = currentGame.p1.winMessage;
        window.localStorage.setItem("storage", JSON.stringify({currentGame}));
        setTimeout(reset, 6000);
        playTheme();
    } else if (currentGame.gameState === "win" && currentGame.activePlayer === currentGame.p1){
        currentGame.p2.wins = (currentGame.p2.wins +1);
        header.src = "assets/header-p2-win.png";
        message.innerText = currentGame.p2.winMessage;
        window.localStorage.setItem("storage", JSON.stringify({currentGame}));
        setTimeout(reset, 6000);
        playTheme();
    } else if (currentGame.gameState === "in progress" && currentGame.activePlayer === currentGame.p1)  {
        message.innerText = "It's 🔥's turn";
    } else if (currentGame.gameState === "in progress" && currentGame.activePlayer === currentGame.p2) {
        message.innerText = "It's 🍌's turn";
    }
}

function updateWins()   {
    var storage = JSON.parse(localStorage.getItem("storage"));
    p1Wins.innerText = `${storage.currentGame.p1.wins} wins`;
    p2Wins.innerText = `${storage.currentGame.p2.wins} wins`;
}

function clearWins()    {
    currentGame.p1.wins = 0;
    currentGame.p2.wins = 0;
    window.localStorage.setItem("storage", JSON.stringify({currentGame}));
    updateWins();
    reset();
}

function playTheme()    {
    if (currentGame.audio === "true" && currentGame.gameState === "win") {
        document.getElementById("themeWin").play();
    } else if (currentGame.audio === "true" && currentGame.gameState === "draw")    {
        document.getElementById("themeDraw").play();
    }
}

function toggleAudio()  {
    if (currentGame.audio === "true")   {
        currentGame.audio = "false";
        audioToggle.src = "assets/audio-off.png";
    } else {
        currentGame.audio = "true";
        audioToggle.src = "assets/audio-on.png";
    }
}
