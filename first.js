let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const body=document.querySelector("body");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice" ,userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice",compChoice);

    if(userChoice===compChoice){
        console.log("draw");
        msg.innerText="draw";
        msg.style.backgroundColor="brown";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false: true;
        }
        else{
            userWin=compChoice==="rock"? false:true;
        }
    showWinner(userWin);
    }
};


choices.forEach((choice )=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
});