let arrayScores = []
let arrayNames = []

for (let item of scoreRanking) {
    arrayScores.push(Number(item.textContent))
}

for (let i = 0; i < scoreRanking.length; i++) {
    arrayNames.push(scoreRanking[i].previousElementSibling.textContent) //
}

let arrayRows = arrayNames.map((element, index) => [element, arrayScores[index]])

