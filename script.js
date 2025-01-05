let userScore= 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const comScorePara =document.querySelector("#com-score");
 //Generate computer choice

const gencomChoice =() =>{
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()* 3)// automatic generate number  in form of integer not a string so  form of index generate a string
    return options[randIdx];
    //rock, paper , scissor
}

const drawGame = () =>{
  console.log("Game is Draw");
    msg.innerText = "Game is Draw and Play again..";
   msg.style.backgroundColor="skyblue";
   msg.style.color="black";

}
const showWinner = (userwin,userChoice,comChoice) =>{
 if(userwin){
    userScore++;
    userScorePara.innerText= userScore;
    console.log("I'm Winner!");
    msg.innerText=`Winner!! ${userChoice}  hit the ${comChoice}`;
    msg.style.backgroundColor= "yellow";
    msg.style.color="blue";
 }
 else{
   comScore++;
   comScorePara.innerText = comScore;
    console.log("I'm Not Winner!");
    msg.innerText =`Winner!! ${comChoice} hit the  ${userChoice}`;
    msg.style.backgroundColor= "red";
    msg.style.color="White";
 }
}; 
const playGame = (userChoice)=>{
 console.log("User Choiced", userChoice);
 // Computer choice get a choice options--> modulator
 const comChoice = gencomChoice();
 console.log("Computer Choice", comChoice);
//draw
       if(userChoice === comChoice){
       drawGame();  
    }
      else
      {
       let userwin =true;
        if(userChoice === "rock"){// scissor, paper
          userwin = comChoice==="paper"? false:true;
        }else if(userChoice === "paper")
        {
            //scissor,rock
           userwin = comChoice==="scissor"? false: true;
        }
        else {
         //paper,rock
            userwin = comChoice==="rock"? false :true;
        }
        showWinner(userwin,userChoice,comChoice);
       };
       };
    
choices.forEach((choice)=>{
choice.addEventListener("click",() =>{
 const userChoice = choice.getAttribute("id");
  playGame(userChoice);
});
});
