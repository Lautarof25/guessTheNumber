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

function checkNewScoreRanking() {
    // Return true if the user gets a better score in the default ranking 
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts) {
            return true;
        }
    }
}
function getIndexNewRanking() {
    // Return the index of the new ranking
    for (let i = 0; i < arrayRows.length; i++) {
        if (arrayRows[i][1] < scoreCounts) {
            return i;
        }
    }
}

function openModalNewUser(){
    modalU.show()
}

function returnInputNewUser(){
    return inputUserName.value
}

buttonSaveUser.addEventListener("click",saveNewData)

function saveNewData(){
    let newUsername = returnInputNewUser()
    let newIndex = getIndexNewRanking()
    updateArrayRowsWithUser(newUsername, newIndex)
    desactivateUserSession()
    saveActualUserStorage()
}

function saveActualUserStorage(){
    sessionStorage.setItem("userSession",userSession);
    sessionStorage.setItem("userName",userName);
}

function desactivateUserSession(){
    userSession = false
}

function updateArrayRowsWithUser(username, index) {
    if(!arrayRows.includes(username)){
        arrayRows.splice(index, 0, [username, scoreCounts])
        arrayRows.pop()
    }else {
        const currentIndex = index-1
        const currentName = arrayRows[index][0]
        const currentPoints = arrayRows[index][1]
        arrayRows.splice(index, 0, [username, scoreCounts])
        arrayRows[currentIndex][0] = currentName
        arrayRows[currentIndex][1] = currentPoints
        arrayRows.pop()
    }
    updateRanking(arrayRows)
}

function updateRanking(arrayRows) {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1]
    }
}
