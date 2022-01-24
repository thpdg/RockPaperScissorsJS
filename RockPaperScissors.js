let possibleHands = ["rock", "paper", "scissors"]
let emojiHands = ["💎","🧻","✂️"];
let winnerText
let hand1Wins = "Hand 1!";
let hand2Wins = "Hand 2!";

function initialize() {
    let hand1 = document.getElementById("hand1")
    let hand2 = document.getElementById("hand2")
    winnerText = document.getElementById("winner_text")
    document.getElementById("btn").addEventListener("click",play)
}

function play() {
    winnerText.innerHTML = "";
    generateHand(hand1);
    generateHand(hand2);
    declareWinner();
}

function generateHand(theHand) {
    let randomNum = Math.floor(Math.random() * 3);
    let currentHand = emojiHands[randomNum];
    theHand.innerHTML = currentHand;
    console.log(randomNum);
    theHand.textValue = randomNum;
    theHand.emojiContent = currentHand;

}

function declareWinner() {
    if(hand1.innerHTML==hand2.innerHTML) {
        noWinner("DRAW!");
        return;
    }
    switch(hand1.innerHTML){
        case "💎":
            if(hand2.innerHTML=="✂️"){
                setWinner(hand1,hand2,hand1Wins);
                return;
            }
            setWinner(hand2,hand1,hand2Wins);
            break;
        case "🧻":
            if(hand2.innerHTML=="💎"){
                setWinner(hand1,hand2,hand1Wins);
                return;
            }
            setWinner(hand2,hand1,hand2Wins);
            break;
        case "✂️":
            if(hand2.innerHTML=="🧻"){
                setWinner(hand1,hand2,hand1Wins);
                return;
            }
            setWinner(hand2,hand1,hand2Wins);
            break;
    }

    return;
}

function getPlayerChoice() {
    return 1;
}

function setWinner(winnerDiv, loserDiv,winText) {
    winnerDiv.classList.add("winner");
    loserDiv.classList.remove("winner");
    winnerText.innerHTML = winText;
}

function noWinner(winText) {
    hand1.classList.remove("winner");
    hand2.classList.remove("winner");
    winnerText.innerHTML = winText;
}