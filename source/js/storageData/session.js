let winCounts = localStorage.getItem("win") === "" ? 0 : Number(localStorage.getItem("win"))
let loseCounts = localStorage.getItem("lose") === "" ? 0 : Number(localStorage.getItem("lose"))
let totalCounts = localStorage.getItem("total") === "" ? 0 : Number(localStorage.getItem("total"))

// let sessionWinContent = statsTable.childNodes[1].childNodes[1].textContent
// let sessionLoseContent = statsTable.childNodes[3].childNodes[1].textContent
// let sessionTotalContent = statsTable.childNodes[5].childNodes[1].textContent


// statsTable.addEventListener('DOMCharacterDataModified',statsTableCall)

// function statsTableCall(){
//     sessionWinContent = statsTable.childNodes[1].childNodes[1].textContent
//     sessionLoseContent = statsTable.childNodes[3].childNodes[1].textContent
//     sessionTotalContent = statsTable.childNodes[5].childNodes[1].textContent
//     if (sessionStorage.getItem("win")){
//         sessionWinContent = sessionStorage.getItem("win")
//     }
//     if(sessionStorage.getItem("lose")){
//         sessionLoseContent = sessionStorage.getItem("lose")
//     }
//     if(sessionStorage.getItem("total")){
//         sessionTotalContent = sessionStorage.getItem("total")
//     }
//     console.log("Evento disparado")
//     sessionStorage.setItem("win", sessionWinContent)
//     sessionStorage.setItem("lose", sessionLoseContent)
//     sessionStorage.setItem("total", sessionTotalContent)
//     console.log(sessionWinContent, sessionLoseContent, sessionTotalContent)
// }

if (localStorage.getItem("win")){
    spanWin.textContent += Number(localStorage.getItem("win"))
}
if(localStorage.getItem("lose")){
    spanLose.textContent += Number(localStorage.getItem("lose"))
}
if(localStorage.getItem("total")){
    spanTotal.textContent += Number(localStorage.getItem("total"))
}


function changeText(){
    localStorage.setItem("win", winCounts)
}

function changeTextLose(){
    localStorage.setItem("lose", loseCounts)
}

function changeTextTotal(){
    localStorage.setItem("total", totalCounts)
}

spanWin.addEventListener("DOMCharacterDataModified",changeText)
spanLose.addEventListener("DOMCharacterDataModified",changeTextLose)
spanTotal.addEventListener("DOMCharacterDataModified",changeTextTotal);