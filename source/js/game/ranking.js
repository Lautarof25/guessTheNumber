let arrayScores = []
let arrayNames = []

for (let item of scoresRanking) {
    arrayScores.push(Number(item.textContent))
}

for (let i = 0; i < namesRanking.length; i++) {
    arrayNames.push(namesRanking[i].textContent) //
}

let arrayRows = arrayNames.map((element, index) => [element, arrayScores[index]])

function checkRanking(){
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts){
            arrayRows[i][1] = scoreCounts
            scoresRanking[i].textContent = Number(scoreCounts)
            namesRanking[i].textContent = enterName(i)
            break;
        }
    }
}

function enterName(index){
    arrayRows[index][0] = prompt("enter your name")
    return arrayRows[index][0]
}