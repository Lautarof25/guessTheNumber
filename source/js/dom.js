const background = document.querySelector("#backgroundNumbers")
const rows = document.querySelector("#rows")
const progressBar = document.querySelector("#progressBar")
const infoSection = document.querySelector("#infoSection")
const gameSection = document.querySelector("#gameSection")

const playButton = document.querySelector("#playButton")
const resetButton = document.querySelector("#resetButton")
const infoButton = document.querySelector("#infoButton")
const statsButton = document.querySelector("#statsButton")
const rankingButton = document.querySelector("#rankingButton")

const radioDiv = document.querySelector("#radioDiv")
const inputGroup = document.querySelector("#inputGroup")
const resultDiv = document.querySelector("#resultDiv")
const characterDiv = document.querySelector("#characterDiv")
const res = document.querySelector("#result")
const modalResult = document.querySelector('#modalResult')
const modalUser = document.querySelector('#modalUser')
const inputUserName = document.querySelector('#inputUserName')
const buttonSaveUser = document.querySelector('#buttonSaveUser')

const buttonCollapse = document.querySelector('#buttonCollapse')
const btnradio1 = document.querySelector("#btnradio1")
const btnradio2 = document.querySelector("#btnradio2")
const btnradio3 = document.querySelector("#btnradio3")
const winnerText = document.querySelector("#winnerText")

const btnCloseResult = document.querySelector("#modalResult .btn-close")
const btnCloseResult2 = document.querySelector("#modalResult .btn-secondary")
const btnCloseInfo = document.querySelector("#rules .btn-close")
const btnCloseInfo2 = document.querySelector("#rules .btn-warning")
const btnCloseStats = document.querySelector("#stats .btn-close")
const btnCloseStats2 = document.querySelector("#stats .btn-warning")

const spanWin = document.querySelector("#spanWin")
const spanLose = document.querySelector("#spanLose")
const spanTotal = document.querySelector("#spanTotal")
const spanScore = document.querySelector("#spanScore")
const statsTable = document.querySelector("#statsTable") // This will replace the existing spans

const scoresRanking = document.querySelectorAll(".scoreRow")
const namesRanking = document.querySelectorAll(".nameRow")
const rankingTable = document.querySelectorAll("#rankingTable")

winCounts = sessionStorage.getItem("win") === "" ? 0 : Number(sessionStorage.getItem("win"))
loseCounts = sessionStorage.getItem("lose") === "" ? 0 : Number(sessionStorage.getItem("lose"))
scoreCounts = sessionStorage.getItem("score") === "" ? 0 : Number(sessionStorage.getItem("score"))
let arrayScores = []
let arrayNames = []
arrayRows = localStorage.getItem("arrayRows") === null ? arrayNames.map((item, index) => [item, arrayScores[index]]) : JSON.parse(localStorage.getItem("arrayRows"))
if(winCounts >= 1) radioDiv.classList.remove("d-none")