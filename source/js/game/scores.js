const scoreCategory = {
    btnradio1: 5,
    btnradio2: 1,
    btnradio3: 0.01    
}

function checkCategory() {
    return document.querySelector('input[name="attempts"]:checked')
}

function checkScore(attempts) {
    scoreCounts = scoreCounts + attempts * scoreCategory[checkCategory().id]
    return scoreCounts
}