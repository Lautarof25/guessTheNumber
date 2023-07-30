const getValueFromLocalStorage = (key) => {
    const value = sessionStorage.getItem(key);
    return value === null || isNaN(Number(value)) ? 0 : Number(value);
};  

const updateElementText = (element, value) => {
    element.textContent = value.toString();
};

let userSession = true
let userName = sessionStorage.getItem("userName") === null ? "" : userSession = false

let winCounts = getValueFromLocalStorage("win");
let loseCounts = getValueFromLocalStorage("lose");
let totalCounts = getValueFromLocalStorage("total");
let scoreCounts = getValueFromLocalStorage("score")

sessionStorage.setItem("userSessionSave",userSession);
sessionStorage.setItem("userName",userName);

updateElementText(spanWin, winCounts);
updateElementText(spanLose, loseCounts);
updateElementText(spanTotal, totalCounts);
updateElementText(spanScore, scoreCounts);

const observer = new MutationObserver(() => {
    sessionStorage.setItem("win", winCounts)
    sessionStorage.setItem("lose", loseCounts)
    sessionStorage.setItem("total", totalCounts)
    sessionStorage.setItem("score", scoreCounts)
    localStorage.setItem("arrayRows", JSON.stringify(arrayRows))
});

observer.observe(spanWin, { subtree: true, childList: true });
observer.observe(spanLose, { subtree: true, childList: true });
observer.observe(spanTotal, { subtree: true, childList: true });
observer.observe(spanScore, { subtree: true, childList: true });
observer.observe(rankingTable, { subtree: true, childList: true });