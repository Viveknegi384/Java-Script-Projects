let Computerchoice;
let scorestr = localStorage.getItem("score");
let score;

// Initialize the score from localStorage or set it to 0 if undefined
if (scorestr) {
  score = JSON.parse(scorestr);
} else {
  score = {
    ComputerScore: 0,
    Userscore: 0,
  };
}

// Function to display the current score on the webpage
function DisplayResult() {
  document.querySelector("#result").innerText = `ComputerScore: ${score.ComputerScore} and UserScore: ${score.Userscore}`;
}


function getComputerChoice(){
  let number=Math.random() * 3;
  if(number>0 && number<=1){
      Computerchoice=`bat`;
  }
  else if(number>1 && number<=2){
      Computerchoice=`ball`;
  }
  else{
      Computerchoice=`Stump`;
  }
    }

function getwinner(Userchoice,Computerchoice){
    if(Userchoice === "bat"){
        if(Computerchoice===`bat`){
            return `It's a tie`;
        }
        else if(Computerchoice===`ball`){
            score.Userscore++;
            return `User won`;
        }
        else{
            score.ComputerScore++;
            return `Computer won`;
        }
    }
    else if(Userchoice === "ball"){
        if(Computerchoice===`bat`){
            score.ComputerScore++;
            return `Computer won`;
        }
        else if(Computerchoice===`ball`){
            return `It's a tie`;
        }
        else{
            score.Userscore++;
            return `User won`;
        }
    }
    else{
        if(Computerchoice===`bat`){
            score.Userscore++;
            return `User won`;
        }
        else if(Computerchoice===`ball`){
            score.ComputerScore++;
            return `Computer won`;
        }
        else{
            return `Its a tie`;
        }
    }
}

function getpopup(choice){
    alert(`User choose ${choice}. Computer choose ${Computerchoice}. ${getwinner(choice,Computerchoice)}` )

    // Update the score in localStorage
  localStorage.setItem("score", JSON.stringify(score));

  // Update the score display on the webpage
  DisplayResult();
}

function resetscore() {
    // Reset the score to 0 for both the computer and the user
    score = {
      ComputerScore: 0,
      Userscore: 0,
    };
  
    // Clear the localStorage
    localStorage.removeItem("score");
  
    // Immediately update the score display on the webpage
    DisplayResult();
  }

DisplayResult();

