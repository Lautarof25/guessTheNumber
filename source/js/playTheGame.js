const sectionExplanation = document.querySelector("#sectionExplanation")
const game = document.querySelector("#game")
const play = document.querySelector("#play")

play.addEventListener("click", skipSection)

function skipSection() {
    sectionExplanation.classList.add("d-none")
    setTimeout(() => {
        game.classList.remove("d-none")
        game.classList.remove("opacity")
        game.classList.add("appear")
        setTimeout(() => {
            game.classList.remove("appear")
        }, 200);
    }, 200);
    window.scrollTo(0, 0);
    opening.play()
}