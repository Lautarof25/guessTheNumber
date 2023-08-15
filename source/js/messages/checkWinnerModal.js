// Create a Bootstrap modal instance
const modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num) {
    document.getElementById("spanModal").textContent = randomDigit
    if (num == randomDigit) {
        document.getElementById("titleModal").textContent = "🎉 🎈¡You won!🎈 🎉"
        showModalAndPlaySound("winner")
        showRadioDiv()
        updateWinCounts();
        updateScoreCount();
        updateSpanWin();
        checkAndUpdateRanking();
        checkRadioAttemptsMessage()
        changeStyleResetButton()
    } else if (num != randomDigit && attempts == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Game over!🎲 ❌"
        showModalAndPlaySound();
        hideWinnertext();
        updateLoseCount();
        updateSpanLose();
        changeStyleResetButton()
    }
    goToTop()
}

function showModalAndPlaySound(mode) {
    modal.show();
    mode === "winner" ? winGame.play() : gameOver.play()
}

function showRadioDiv() {
    radioDiv.classList.remove("d-none");
}

function hideWinnertext() {
    winnerText.classList.add("d-none");
}

function updateWinCounts() {
    winCounts++;
    totalCounts++;
}

function updateScoreCount() {
    scoreCounts = checkScore(attempts + 1);
    spanScoreUser.textContent = scoreCounts;
}

function updateSpanWin() {
    spanWin.textContent = winCounts;
    spanTotal.textContent = totalCounts;
    spanScore.textContent = scoreCounts;
}

function updateLoseCount() {
    loseCounts++;
    totalCounts++;
}

function updateSpanLose() {
    spanTotal.textContent = totalCounts;
    spanLose.textContent = loseCounts;
}

function changeStyleResetButton() {
    resetButton.classList.remove("bg-dark", "border");
    resetButton.classList.add("bg-success", "border-none");
}

function goToTop() {
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