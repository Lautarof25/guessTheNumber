const background = document.querySelector("#backgroundNumbers")
const rows = document.querySelector("#rows")
const progressBar = document.querySelector("#progressBar")
const infoSection = document.querySelector("#infoSection")
const gameSection = document.querySelector("#gameSection")
const footer = document.querySelector("#footer")
const rowsContainer = document.querySelector("#rowsContainer")

const resultDiv = document.querySelector("#resultDiv")
const characterDiv = document.querySelector("#characterDiv")
const modalResult = document.querySelector('#modalResult')

const result = document.querySelector("#result")

const winnerText = document.querySelector("#winnerText")
const spanScoreUser = document.querySelector("#spanScoreUser")

const btnCloseResult = document.querySelector("#modalResult .btn-close")
const btnCloseResult2 = document.querySelector("#modalResult .btn-secondary")
const btnCloseInfo = document.querySelector("#rules .btn-close")
const btnCloseInfo2 = document.querySelector("#rules .btn-warning")
const btnCloseStats = document.querySelector("#stats .btn-close")
const btnCloseStats2 = document.querySelector("#stats .btn-warning")

// When the page is reloaded
winCounts = sessionStorage.getItem("win") === "" ? 0 : Number(sessionStorage.getItem("win"))
loseCounts = sessionStorage.getItem("lose") === "" ? 0 : Number(sessionStorage.getItem("lose"))
scoreCounts = sessionStorage.getItem("score") === "" ? 0 : Number(sessionStorage.getItem("score"))

if(winCounts >= 1) radioDiv.classList.remove("d-none")