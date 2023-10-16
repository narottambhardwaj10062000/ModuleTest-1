let decision;

if(localStorage.getItem("userScore") === null){
    localStorage.setItem("userScore",0);
}
else{
    document.getElementById("your").innerHTML = localStorage.getItem("userScore");
}

if(localStorage.getItem("compScore") === null){
    localStorage.setItem("compScore",0);
}
else{
    document.getElementById("computer").innerHTML = localStorage.getItem("compScore");
}

const options = {
    "rock" : "./Group 2 (2)-overlay.png",
    "paper" : "./Group 1-overlay.png",
    "scissor" : "./Group 3-overlay.png"
}

let again = () => {
    document.querySelector(".result").style.display = "none";
    document.querySelector(".lower").style.display = "flex";
    document.querySelector(".Next").style.display = "none";
}

let replaybtn = () => {
    document.querySelector(".result").style.display = "none";
    document.querySelector(".lower").style.display = "flex";
    document.querySelector(".replay").style.display = "none";
    document.querySelector(".playAgain").style.display = "flex";

}

let pickUserHand = (hand) => {

    let hands = document.querySelector(".lower");
    hands.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display = "flex";

    document.getElementById("pickedImage").src = options[hand];

    let userChoice = hand;

    let compChoice = getComputerChoice();

    finalResult(userChoice, compChoice);
}

let getComputerChoice = () => {
    const choices = ["rock","paper","scissor"];
    let compChoice = choices[Math.floor(Math.random()*3)];

    document.getElementById("CompImage").src = options[compChoice];

    return compChoice;
}

let finalResult = (userChoice, compChoice) => {
    if(userChoice == "rock" && compChoice == "scissor"){
        setDecision("YOU WIN");
        let updatedScore = parseInt(localStorage.getItem("userScore")) + 1;
        localStorage.setItem("userScore",updatedScore);
        setUserScore();
    }
    if(userChoice == "paper" && compChoice == "rock"){
        setDecision("YOU WIN");
        let updatedScore = parseInt(localStorage.getItem("userScore")) + 1;
        localStorage.setItem("userScore",updatedScore);
        setUserScore();
    }
    if(userChoice == "scissor" && compChoice == "paper"){
        setDecision("YOU WIN");
        let updatedScore = parseInt(localStorage.getItem("userScore")) + 1;
        localStorage.setItem("userScore",updatedScore);
        setUserScore();
    }

    if(userChoice == "rock" && compChoice == "paper"){
        setDecision("YOU LOST");
        let updatedScore = parseInt(localStorage.getItem("compScore")) + 1;
        localStorage.setItem("compScore",updatedScore);
        setCompScore();
    }
    if(userChoice == "paper" && compChoice == "scissor"){
        setDecision("YOU LOST");
        let updatedScore = parseInt(localStorage.getItem("compScore")) + 1;
        localStorage.setItem("compScore",updatedScore);
        setCompScore();
    }
    if(userChoice == "scissor" && compChoice == "rock"){
        setDecision("YOU LOST");
        let updatedScore = parseInt(localStorage.getItem("compScore")) + 1;
        localStorage.setItem("compScore",updatedScore);
        setCompScore();
    }

    if(userChoice == "rock" && compChoice == "rock"){
        setDecision("TIE UP");
    }
    if(userChoice == "paper" && compChoice == "paper"){
        setDecision("TIE UP");
    }
    if(userChoice == "scissor" && compChoice == "scissor"){
        setDecision("TIE UP");
    }
}

let setDecision = (text) => {
    if(text == "YOU WIN"){
        document.querySelector(".mainResult h1").innerText = text;
        document.querySelector(".mainResult h3").innerText = "AGAINST PC";
        document.querySelector(".Next").style.display = "flex";
        document.querySelector(".pulse").style.display = "flex";
        document.querySelector(".pulse2").style.display = "none";

    }
    else if(text == "YOU LOST"){
        document.querySelector(".mainResult h1").innerText = text;
        document.querySelector(".mainResult h3").innerText = "AGAINST PC";
        document.querySelector(".Next").style.display = "none";
        document.querySelector(".pulse2").style.display = "flex";
        document.querySelector(".pulse").style.display = "none";
    }
    else{
        document.querySelector(".mainResult h3").innerText = "";
        document.querySelector(".mainResult h1").innerText = text;
        document.querySelector(".playAgain").style.display = "none";
        document.querySelector(".replay").style.display = "flex";
        document.querySelector(".Next").style.display = "none";
        document.querySelector(".pulse2").style.display = "none";
        document.querySelector(".pulse").style.display = "none";
    }
}

let setUserScore = () => {
    document.getElementById("your").innerHTML = localStorage.getItem("userScore");
}

let setCompScore = (cScore) => {
    document.getElementById("computer").innerHTML = localStorage.getItem("compScore");
}


// next button 

let nextbtn = () => {
    document.querySelector(".xyz").style.display = "flex";
    document.querySelector(".lower").style.display = "none";
    document.querySelector(".upper").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".Next").style.display = "none";

}


let lastPlayAgain = () => {
    document.querySelector(".upper").style.display = "flex";
    document.querySelector(".lower").style.display = "flex";
    document.querySelector(".xyz").style.display = "none";
}

//Rules button and menu

let rulesBtn = () => {
    document.querySelector(".RulesBtn").style.display = "flex";
}

let cut = () => {
    document.querySelector(".RulesBtn").style.display = "none";
}


