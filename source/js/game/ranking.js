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

function checkNewScoreRanking(scoreCounts) {
    return arrayRows.some((row) => row[1] < scoreCounts);
  }
function getIndexNewRanking(scoreCounts) {
    return arrayRows.findIndex((row) => row[1] < scoreCounts);
  }

function getIndexOldRanking(userName) {
    return arrayRows.findIndex((row) => row[0].includes(userName));
  }

function openModalNewUser(){
    modalU.show()
}

function returnInputNewUser(){
    return inputUserName.value
}

let userNameDefault = sessionStorage.getItem("userName")

function saveNewData(){
    userName = returnInputNewUser()
    let newIndex = getIndexNewRanking(scoreCounts)
    if(userName === ""){
        updateArrayRowsWithUser(userNameDefault, newIndex)
        saveActualUserStorage(userNameDefault)
    }else {
        desactivateUserSession()
        updateArrayRowsWithUser(userName, newIndex)
        saveActualUserStorage(userName)
    }
}

function saveActualUserStorage(user){
    sessionStorage.setItem("userSession",userSession);
    sessionStorage.setItem("userName",user);
}

function desactivateUserSession(){
    userSession = false
}

function updateArrayRowsWithUser(username, index) {
    // Update array rows with username and index
    if(userSession){
        arrayRows.splice(getIndexOldRanking(userNameDefault),1)
        arrayRows.splice(index, 0, [username, scoreCounts])
        arrayRows.pop()
    }else {
        arrayRows.splice(getIndexOldRanking(userName),1)
        arrayRows.splice(getIndexNewRanking(scoreCounts),0,[userName,scoreCounts])
    }
    updateRanking(arrayRows)
}

function updateRanking(arrayRows) {
    for (let i = 0; i < 5; i++) {
        namesRanking[i].textContent = arrayRows[i][0]
        scoresRanking[i].textContent = arrayRows[i][1]
    }
}
