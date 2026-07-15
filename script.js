// ==========================
// SELECT ELEMENTS
// ==========================

const weaponBox = document.querySelector(".weapon-box");
const playerChoices = document.querySelector(".player-choices");
const resultBox = document.querySelector(".result-box");

const playerImg = document.querySelector(".player-choice img");
const computerImg = document.querySelector(".computer-choice img");

const resultText = document.querySelector(".result-text");

const playAgainBtn = document.querySelector(".play-again");

const wonScore = document.querySelector(".won");
const lostScore = document.querySelector(".lost");
const drawScore = document.querySelector(".draw");

const weapons = document.querySelectorAll(".weapon");

// ==========================
// SCORES
// ==========================

let won = 0;
let lost = 0;
let draw = 0;

// ==========================
// COMPUTER CHOICES
// ==========================

const computerChoices = [
    "Rock",
    "Paper",
    "Scissors"
];

// ==========================
// GAME RESULT TABLE
// ==========================

const resultTable = {

    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "Player",

    PaperRock: "Player",
    PaperPaper: "Draw",
    PaperScissors: "Computer",

    ScissorsRock: "Computer",
    ScissorsPaper: "Player",
    ScissorsScissors: "Draw"

};

// ==========================
// START GAME
// ==========================

weapons.forEach((weapon)=>{

    weapon.addEventListener("click",()=>{

        weaponBox.style.display="none";
        playerChoices.style.display="block";

        playerChoices.classList.add("active");

        playerImg.src="Images/Rock.png";
        computerImg.src="Images/Rock.png";

        setTimeout(()=>{

            playerChoices.classList.remove("active");

            const playerChoice = weapon.classList[1];

            const computerChoice =
            computerChoices[Math.floor(Math.random()*computerChoices.length)];

            playerImg.src=`Images/${playerChoice}.png`;
            computerImg.src=`Images/${computerChoice}.png`;

            const winner =
            resultTable[playerChoice + computerChoice];

            showResult(winner);

        },2500);

    });

});
// ==========================
// SHOW RESULT
// ==========================

function showResult(winner){

    resultBox.style.display = "block";

    if(winner === "Player"){

        resultText.innerHTML = "🎉 Congrats! You Won!";
        won++;
        wonScore.innerHTML = won;

    }
    else if(winner === "Computer"){

        resultText.innerHTML = "😢 You Lost!";
        lost++;
        lostScore.innerHTML = lost;

    }
    else{

        resultText.innerHTML = "🤝 Match Draw!";
        draw++;
        drawScore.innerHTML = draw;

    }

}

// ==========================
// PLAY AGAIN
// ==========================

playAgainBtn.addEventListener("click",()=>{

    // Hide result
    resultBox.style.display = "none";

    // Hide choices
    playerChoices.style.display = "none";

    // Show weapons
    weaponBox.style.display = "block";

    // Remove animation
    playerChoices.classList.remove("active");

    // Reset images
    playerImg.src = "Images/Rock.png";
    computerImg.src = "Images/Rock.png";

});
