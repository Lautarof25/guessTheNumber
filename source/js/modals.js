// Get the modal element by its ID
var modalResult = document.getElementById('modalResult');

// Create a Bootstrap modal instance
var modal = new bootstrap.Modal(modalResult);

// Show the modal
function checkWinner(num){
    document.getElementById("spanModal").textContent = randomDigit
    if(num == randomDigit){
        document.getElementById("titleModal").textContent = "🎉 🎈 ¡Ganaste!🎈 🎉"
        modal.show()
        winGame.play()
    }else if(num != randomDigit && attemps == 0) {
        document.getElementById("titleModal").textContent = "❌ 🎲¡Perdiste!🎲 ❌"
        modal.show()
        gameOver.play()
    }
}