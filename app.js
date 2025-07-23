let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};
const drawGame = () => {
    msg.innerText ="Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You Win!");
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;       
    }else {

        msg.innerText =`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};
const playGame = (userChoice) => {
    console.log("userChoice",userChoice);
    const compChoice  = genCompChoice();
    console.log("compchoice",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});

