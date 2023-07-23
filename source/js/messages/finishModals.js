// Create a Bootstrap modal instance
const modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num){
    document.getElementById("spanModal").textContent = randomDigit
    if(num == randomDigit){
        document.getElementById("titleModal").textContent = "🎉 🎈 ¡Ganaste!🎈 🎉"
        modal.show()
        winGame.play()
    }else if(num != randomDigit && attempts == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Perdiste!🎲 ❌"
        modal.show()
        gameOver.play()
    }
    window.scrollTo(0, 0);
}