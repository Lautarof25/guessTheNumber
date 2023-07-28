// Create a Bootstrap modal instance
const modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num){
    document.getElementById("spanModal").textContent = randomDigit
    if(num == randomDigit){
        document.getElementById("titleModal").textContent = "🎉 🎈 ¡Ganaste!🎈 🎉"
        modal.show()
        winGame.play()
        radioDiv.classList.remove("d-none");
        winCounts++
        totalCounts++
        spanWin.textContent = winCounts
        spanTotal.textContent = totalCounts
        checkRadioAttemptsMessage()
    }else if(num != randomDigit && attempts == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Perdiste!🎲 ❌"
        modal.show()
        gameOver.play()
        winnerText.classList.add("d-none");
        loseCounts++
        totalCounts++
        spanTotal.textContent = totalCounts
        spanLose.textContent = loseCounts
    }
    window.scrollTo(0, 0);
    function checkRadioAttemptsMessage() {
        if (winCounts == 1) winnerText.classList.remove("d-none");
        else winnerText.classList.add("d-none");
    }
}