// Create a Bootstrap modal instance
const modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num){
    document.getElementById("spanModal").textContent = randomDigit
    if(num == randomDigit){
        document.getElementById("titleModal").textContent = "🎉 🎈 You won!🎈 🎉"
        modal.show()
        winGame.play()
        radioDiv.classList.remove("d-none");
        winCounts++
        totalCounts++
        scoreCounts = checkScore(attempts+1)
        spanWin.textContent = winCounts
        spanTotal.textContent = totalCounts
        spanScore.textContent = scoreCounts
        // Add user Name if gets more points in ranking
        if(checkNewScoreRanking(scoreCounts) && userSession == true) {
            openModalNewUser()
        }else if(checkNewScoreRanking(scoreCounts)){
            saveNewData()
        }
        checkRadioAttemptsMessage()
        resetButton.classList.remove("bg-dark","border")
        resetButton.classList.add("bg-success","border-none")
    }else if(num != randomDigit && attempts == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Game over!🎲 ❌"
        modal.show()
        gameOver.play()
        winnerText.classList.add("d-none");
        loseCounts++
        totalCounts++
        spanTotal.textContent = totalCounts
        spanLose.textContent = loseCounts
        resetButton.classList.remove("bg-dark","border")
        resetButton.classList.add("bg-success","border-none")
    }
    window.scrollTo(0, 0);
    function checkRadioAttemptsMessage() {
        if (winCounts == 1) winnerText.classList.remove("d-none");
        else winnerText.classList.add("d-none");
    }
}