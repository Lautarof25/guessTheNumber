const infoSection = document.querySelector("#infoSection")
const gameSection = document.querySelector("#gameSection")
const playButton = document.querySelector("#playButton")

playButton.addEventListener("click", skipSection)

function skipSection() {
    infoSection.classList.add("d-none")
    setTimeout(() => {
        gameSection.classList.remove("d-none")
        gameSection.classList.remove("opacity")
        gameSection.classList.add("appear")
        setTimeout(() => {
            gameSection.classList.remove("appear")
        }, 200);
    }, 200);
    
    window.scrollTo(0, 0);
    openingSound.play()
    setTimeout(() => {
        numberGuess.focus()    
    }, 500);
}