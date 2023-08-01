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

function getIndexNewRanking(){
    let indexRanking = checkNewScoreRanking()
    return indexRanking
}

function userNameFunction(){
    userName = prompt("Ingrese su nombre")
}

function saveActualUserStorage(){
    sessionStorage.setItem("userSession",userSession);
    sessionStorage.setItem("userName",userName);
}

function desactivateUserSession(){
    userSession = false
}

function updateArrayRowsWithUser(username, index) {
    arrayRows.splice(index, 0, [username, scoreCounts])
    arrayRows.pop()
}

function updateRanking(arrayRows) {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1]
    }
}
