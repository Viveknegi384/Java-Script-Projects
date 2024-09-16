let Computerchoice;
let ComputerScore = 0;
let Userscore = 0;

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
            Userscore++;
            return `User won`;
        }
        else{
            ComputerScore++;
            return `Computer won`;
        }
    }
    else if(Userchoice === "ball"){
        if(Computerchoice===`bat`){
            ComputerScore++;
            return `Computer won`;
        }
        else if(Computerchoice===`ball`){
            return `It's a tie`;
        }
        else{
            Userscore++;
            return `User won`;
        }
    }
    else{
        if(Computerchoice===`bat`){
            Userscore++;
            return `User won`;
        }
        else if(Computerchoice===`ball`){
            ComputerScore++;
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

function DisplayResult(){
  document.querySelector('#result').innerText = `ComputerScore:${ComputerScore} and UserScore :${Userscore}`
}
DisplayResult();

