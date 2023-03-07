# TIC-TAC-TOE

Did you know that the game of tic-tac-toe traces its origins back to ancient Egypt? The oldest-known game dates to right around 1300 BCE, and was played on a ceramic gameboard. Similar three-in-a-row games have since been played by the Romans, the Mayans, the Ancestral Puebloans, in Meiji Japan, and more recently, by bored gradeschoolers and aspiring software developers like myself. Instead of Xs and Os, this reinterpretation of tic tac toe pays homage to one of my favorite sitcoms, Arrested Development, by utilizing 🍌 tokens and 🔥 tokens to mark players' places on a 3x3 grid. To win, you'll need to get three identical tokens in a row horizontally, vertically, or diagonally. 

![Mayan Tic-Tac-Toe](assets/ttt-mayan.jpg "Mayan Tic-Tac-Toe") 
![Puebloan Tic-Tac-Toe](assets/ttt-puebloan.jpg "Puebloan Tic-Tac-Toe") 
![My Tic-Tac-Toe](assets/ttt-me.png "My Tic-Tac-Toe") 

## Installation

Fork this [repository](https://github.com/emlindvall/tic-tac-toe.git) to your GitHub account. In your forked respository, click the `code` drop-down menu and copy the SSH key. 

#### Option 1
- Open the terminal on your machine and navigate to the containing directory you’d like - to clone the repository folder and its contents to.
- On the command line, run “git clone” + the SSH key you copied earlier.
- A new folder will be created containing a local copy of the repository linked to the forked repository you created - enter the new directory.
- On the command line, run “open index.html”.

#### Option 2
- In the forked repository you created, open the “Settings” tab and select “Pages”  on the left pane.
- Under “Build and Deployment”, select “Deploy from a Branch” within the “Source” drop-down menu.
- Under “Branch”, select the “main” branch in the drop-down menu and hit the “Save” button.
- On the right-hand side of the main page of your repository, find the “Environments” section and click the link for “github-pages”. This may take some time to load at first.
- In the following page, hit the “View Deployment” button to view the site.

## Preview

![🍌 Win](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2I4ZDllMTM2ZTRkNjI3N2Q5ZTg4MmVkYWI5YjVlYzg5MDhhYzM5YyZjdD1n/NJaBhcXSnnq0JEk7Vq/giphy.gif) 
![🔥 Win](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQwNTAzMmU1NDk5YTkwZTVhMDBkMzNiZDg4YzFlYmU0ZDkyMDE2NiZjdD1n/TkxDe8OxfkuSSzOJys/giphy.gif) 
```python
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
```

## Context
I made this application during my time as a student in the [Turing School of Software and Design Front End Web Development program](https://frontend.turing.edu/), a four module, seven month focused on preparing students for a career as web developers working with Javascript, HTML, CSS, and the React framework. I began the program in January 2023, and am expected to graduate in August 2023. The application was built over the course of seven days, and completed with the [Project Specification and Rubric](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo-v2.html) in mind.

## Contributors
Em Lindvall [GitHub](https://github.com/emlindvall) | [LinkedIn](https://www.linkedin.com/in/emilylindvall/)

## Goals
The primary goals of this project was to continue growing and strengthening my understanding of HTML, CSS, and Javascript code, as well as refine my Git and GitHub habits. The secondary goal was to create a fully-functional application that met all of the project requirements in terms of design, usability, and DRYness. To meet these goals, I worked not only with the three aforementioned code languages, but also with VS Code reader, GitHub, and Gyatso Gif software, and researched new functionalities via websites like Mozilla Developer Network and Stack Overflow. 

## Wins + Challenges

#### Wins
- In addition to completing the MVP (minimum viable product) requirements, I also completed the optional extension to integrate local storage into my application. In order to do this, I had to self-teach this functionality from start to finish. I utilized a really fantastic [YouTube video](https://www.youtube.com/watch?v=LfeOLVGHiXI) suggested by one of my cohort-mates, put together by the channel LogRocket. Integrating this functionality gave me a huge sense of accomplishment, and was really the icing on the cake for this application. 
- I also got to have a lot of fun with this project; between coming up with the theme, integrating music into my application, and squeezing in a few additional features (e.g. an audio toggle, because I know as a user I'd actually hate that theme music!), I got to flex my creative muscles and think both like a developer and like a user. 

#### Challenges
- I hit a huge roadblock early on in this project-- I wrote all of the code from the ground up, so when I wrote out my basic HTML code, I put placeholder `src`'s in my script tag that didn't actually correspond to anything. This meant that when I went to start writing my JavaScript, I couldn't get a foothold in anywhere to test functionality since nothing would even console log; I was so certain that my JavaScript was written correctly, but nothing at all was working. Eventually I was able to get another pair of eyes on my project and my error was pointed out to me-- as soon as I got those `src`s in, bam! My JavaScript *was* written correctly after all. With that hurdle behind me, the rest of the project was relatively smooth sailing.
- I am still wrapping my head around the ideal way to structure Git branches, commits, comments, and pull requests. This project is lightyears ahead of my last solo (which did not utilize branches at all), so I know that I am growing in this area, but I'm cognizant that I have a long, long way to go in this area. 

