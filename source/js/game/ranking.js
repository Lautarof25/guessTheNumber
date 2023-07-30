let arrayNamesDefault = ["Mark","Felipe","Lautaro","Gal","Laura"]
let arrayScoresDefault = [100,50,25,10,5]

function addContentToRankingTable(){
    if(localStorageEmpty()){
        for (let i = 0; i < 5; i++) {
            namesRanking[i].textContent = arrayNamesDefault[i]
            scoresRanking[i].textContent = arrayScoresDefault[i]
        }
    }else {
        updateRanking(arrayRows)
    }
}

function loadDefaults(){
    addContentToRankingTable()
    return arrayNamesDefault.map((item, index) => [item, arrayScoresDefault[index]])
}

function localStorageEmpty(){
    return localStorage.getItem("arrayRows") === null
}

let arrayRows = localStorageEmpty() ? loadDefaults() : JSON.parse(localStorage.getItem("arrayRows"))

updateRanking(arrayRows)

let newIndex = 0


function checkNewScoreRanking() {
    // Return true if the user gets a better score in the default ranking 
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts) {
            newIndex = i
            return true;
        }
    }
}



function updateArrayRows() {
    const indexRanking = checkNewScoreRanking()
    if(indexRanking && userSession){
        if(userSession){
            userName = prompt("Ingrese su nombre")
        }
        arrayRows.splice(newIndex, 0, [userName, scoreCounts])
        arrayRows.pop()
        updateRanking(arrayRows)
    }
}

function updateRanking(arrayRows) {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1]
    }
}