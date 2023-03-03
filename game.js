// const Player = require('./player.js');

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

// class Game {
//     constructor()  {
//         this.p1 = new Player({number: 1, token: "Banana"});
//         this.p2 = new Player({number: 2, token: "Fire"});
//         // this.activeTurn = this.p1;
//         this.activePlayer = this.p1;
//         this.turnCounter = 1;
//     }
//     findActive()  {
//         if (this.turnCounter % 2 == 0)   {
//             this.activePlayer = p2;
//         } else {
//             this.activePlayer = p1;
//         }
//     }
// }

function checkForWins()  {
    var combo = ["1", "2", "3"];
    if (combo.length >= 3)  {
        for (var i = 0; i <= winningCombos.length; i++)   {
               var comparison = compareArrays(combo, winningCombos[i]);
               console.log(comparison);
               if (comparison === true) {
                    // var winner = Game.activePlayer;
                    // Player.increaseWins(winner);
                }
        }
    }
}

checkForWins();

function compareArrays(array1, array2)  {
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            console.log("they're not equal");
            return false;
        }
    }
    console.log("they're equal");
    return true;
}

compareArrays(array1, array2);


// function checkForWin(activeSquares) {
//     var combo = ["1", "2", "3"];
//     if (winningCombos[0].textContent === combo[0].textContent &&
//         winningCombos[1].textContent === combo[2].textContent &&
//         winningCombos[0].textContent !== "")    {
//             console.log("it's a win");
//             return true;
//         } else  {
//             console.log("it's not a win");
//             return false;
//         }
// }

// checkForWin();

// testing 
// console.log("creating new game;");
// var g = new Game();
// console.log(g);

// console.log("checking to see if the playters exist");
// console.log(g.p1);
// console.log(g.p2);

// console.log("taking turn 1");
// g.takeTurn(g.p1);
// console.log(g);





// module.exports = Game;