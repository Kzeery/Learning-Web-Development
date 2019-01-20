var playerOneScore = document.querySelector("#playerOneScore");
var playerTwoScore = document.querySelector("#playerTwoScore");
var maxScore = document.querySelector("#maxScore");
var drop = document.querySelector("input");
var score1 = 0;
var score2 = 0;
drop.value = 5;
function resetGame() {
    playerOneScore.textContent = "0";
    playerTwoScore.textContent = "0";
    score1 = "0";
    score2 = "0";
    playerOneScore.classList.remove("winner");
    playerTwoScore.classList.remove("winner");
}
button1.addEventListener("click", function() {
    if(score1 < drop.value && score2 < drop.value) {
        score1++;
        playerOneScore.textContent = score1;
        if(score1 == drop.value) {
            playerOneScore.classList.add("winner");
        }
    }
});
button2.addEventListener("click", function() {
    if(score2 < drop.value && score1 < drop.value) {
        score2++;
        playerTwoScore.textContent = score2;
        if(score2 == drop.value) {
            playerTwoScore.classList.add("winner");
        }
    }
});
reset.addEventListener("click", resetGame);

drop.addEventListener("change", function() {
    maxScore.textContent = this.value;
    resetGame();
});



