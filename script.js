let userScore = 0;
let compScore = 0;

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const reset = document.getElementById("reset");


const genCompChoice = () => {
   options = ["stone", "paper", "scissor"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
}


drawGame = () => {
   msg.innerText = "It was a Draw"
   msg.style.backgroundColor = "brown"
}

const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin) {
      msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green"
      userScore++;
      userScorePara.innerText = userScore;
   } else {
      msg.innerText = `Computer Wins! ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red"
      compScore++;
      compScorePara.innerText = compScore;
   }
}

const playGame = (userChoice) => {
   console.log("user Choice = ", userChoice);
   const compChoice = genCompChoice();
   console.log("computer Choice = ", compChoice);

   if (userChoice === compChoice) {
      drawGame();
   } else {
      let userWin = true;
      if(userChoice === "stone") {
         userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
         userWin = compChoice === "scissor" ? false : true;
      } else {
        userWin = compChoice === "stone" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
   }
};


choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
   });
});

reset.addEventListener("click", () => {
   userScorePara.innerText = 0;
   compScorePara.innerText = 0;
   msg.innerText = "Play your move"
   msg.style.backgroundColor = "#44b2ed"
})



