
let userScore=0;
let computerScore =0;
let draw=0;

function getComputerChoice(){
    const choices=["ROCK","PAPER","SCISSORS"];
    const randomNo =Math.floor(Math.random()*3);
    const computerChoice =choices[randomNo];
    var randomImageSource2= "<img src='images/" + computerChoice+".png' alt='rock'>";
    document.getElementById("ci").innerHTML=randomImageSource2;
    return computerChoice;
}
  const updateScore = () => {
    const playerScore = document.querySelector(".human input");
    const compScore = document.querySelector(".comp input");
    const drw=document.querySelector(".drw input")
    playerScore.value = userScore;
    compScore.value = computerScore;
    drw.value=draw;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const result = document.querySelector(".Result");
    //Checking for a tie
    if (playerChoice === computerChoice) {
       result.textContent = "It's a draw. We both played " + playerChoice;
      draw++;
      updateScore();
      return;
    }
    //Check for Rock
    if (playerChoice === "ROCK") {
      if (computerChoice === "SCISSORS") {
        result.textContent = "Human wins. Rock breaks Scissors.";
        userScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Computer Wins. Paper covers Rock.";
        computerScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "PAPER") {
      if (computerChoice === "SCISSORS") {
        result.textContent = "Computer Wins. Scissors cut Paper.";
        computerScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins. Paper covers Rock.";
        userScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        result.textContent = "Computer Wins. Rock breaks Scissors.";
        computerScore++;
        updateScore();
        return;
      } else {
        result.textContent = "Player Wins. Scissors cut Paper.";
        userScore++;
        updateScore();
        return;
      }
    }
  };

function myFunction() {
    document.getElementById("hi").innerHTML="<img src='images/ROCK.png' alt='rock'>";
    // getComputerChoice();
    compareHands("ROCK",getComputerChoice());
      }
function myunction() {
    document.getElementById("hi").innerHTML="<img src='images/PAPER.png' alt='rock'>";
    // getComputerChoice();
    compareHands("PAPER",getComputerChoice());
  }
function mynction() {
    document.getElementById("hi").innerHTML="<img src='images/SCISSORS.png' alt='rock'>";
    // getComputerChoice();
    compareHands("SCISSORS",getComputerChoice());
  }
function refresh(){
    window.location.reload("Refresh");
    alert("Quit this game and start another?");
  }
