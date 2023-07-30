for (let item of scoresRanking) {
    arrayScores.push(Number(item.textContent))
}

for (let i = 0; i < namesRanking.length; i++) {
    arrayNames.push(namesRanking[i].textContent)
}

let arrayRows = localStorage.getItem("arrayRows") === null ? arrayNames.map((item, index) => [item, arrayScores[index]]) : JSON.parse(localStorage.getItem("arrayRows"))

let userName = ""

function checkRanking() {
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts) {
            userName = buttonSave()
            return i;
        }
    }
}

function updateArrayRows() {
    const indexRanking = checkRanking()
    if(indexRanking !== ""){
        arrayRows.splice(indexRanking, 0, [userName, scoreCounts])
        arrayRows.pop()
    }
}

function updateRanking(arrayRows) {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1]
    }
}