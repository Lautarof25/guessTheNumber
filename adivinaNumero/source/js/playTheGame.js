const sectionExplanation = document.querySelector("#sectionExplanation")
const game = document.querySelector("#game")
const play = document.querySelector("#play")

play.addEventListener("click", skipSection)

function skipSection(){
    sectionExplanation.classList.add("d-none")
    game.classList.remove("d-none")
}


