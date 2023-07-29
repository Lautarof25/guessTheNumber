let arrayScores = []
let arrayNames = []

for (let item of scoresRanking) {
    arrayScores.push(Number(item.textContent))
}

for (let i = 0; i < namesRanking.length; i++) {
    arrayNames.push(namesRanking[i].textContent)
}

let arrayRows = arrayNames.map((item, index) => [item, arrayScores[index]])

function checkRanking(scoreCounts) {
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts) {
            const promptName = enterName()
            arrayRows.splice(i, 0, [promptName, scoreCounts])
            arrayRows.pop()
            break;
        }
    }
}

function enterName() {
    let name = prompt("Enter your name")
    return name
}

function updateRanking() {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1].toFixed(2)
    }
}
updateRanking()