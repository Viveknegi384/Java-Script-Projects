let Computerchoice;
// let ComputerScore = 0;
// let Userscore = 0;

let score = {
    ComputerScore: 0,
    Userscore: 0,
    DisplayResult : function (){
        document.querySelector('#result').innerText = `ComputerScore:${score.ComputerScore} and UserScore :${score.Userscore}`
      },
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
    alert(`User choose Bat. Computer choose ${Computerchoice}. ${getwinner(choice,Computerchoice)}` )
}


score.DisplayResult();

