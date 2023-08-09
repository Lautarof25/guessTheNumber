// Create a Bootstrap modal instance
const modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num){
    document.getElementById("spanModal").textContent = randomDigit
    if(num == randomDigit){
        document.getElementById("titleModal").textContent = "🎉 🎈 You won!🎈 🎉"
        showModalAndPlaySound("winner")
        radioDiv.classList.remove("d-none");
        updateWinCounts();
        scoreCounts = checkScore(attempts+1)
        spanScoreUser.textContent = scoreCounts
        updateSpanWin();
        checkAndUpdateRanking();
        checkRadioAttemptsMessage()
        changeStyleResetButton()
    }else if(num != randomDigit && attempts == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Game over!🎲 ❌"
        showModalAndPlaySound();
        winnerText.classList.add("d-none");
        updateLoseCount();
        updateSpanLose();
        changeStyleResetButton()
    }
    goToTop()
}

function showModalAndPlaySound(mode) {
    modal.show();
    if(mode == "winner"){
        winGame.play()
    }else{
        gameOver.play();
    }
}

function changeStyleResetButton() {
    resetButton.classList.remove("bg-dark", "border");
    resetButton.classList.add("bg-success", "border-none");
}

function updateWinCounts() {
    winCounts++;
    totalCounts++;
}

function updateLoseCount() {
    loseCounts++;
    totalCounts++;
}

function updateSpanLose() {
    spanTotal.textContent = totalCounts;
    spanLose.textContent = loseCounts;
}

function updateSpanWin() {
    spanWin.textContent = winCounts;
    spanTotal.textContent = totalCounts;
    spanScore.textContent = scoreCounts;
}

function goToTop(){
    window.scrollTo(0, 0);
}

function checkAndUpdateRanking() {
    if (checkNewScoreRanking(scoreCounts) && userSession == true) {
        openModalNewUser();
    } else if (checkNewScoreRanking(scoreCounts)) {
        saveNewData();
    }
}

function checkRadioAttemptsMessage() {
    if (winCounts == 1) winnerText.classList.remove("d-none");
    else winnerText.classList.add("d-none");
}