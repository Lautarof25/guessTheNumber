const getValueFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value === null || isNaN(Number(value)) ? 0 : Number(value);
};  

const updateElementText = (element, value) => {
    element.textContent = value.toString();
};

let winCounts = getValueFromLocalStorage("win");
let loseCounts = getValueFromLocalStorage("lose");
let totalCounts = getValueFromLocalStorage("total");
let scoreCounts = getValueFromLocalStorage("score");

updateElementText(spanWin, winCounts);
updateElementText(spanLose, loseCounts);
updateElementText(spanTotal, totalCounts);
updateElementText(spanScore, scoreCounts);

const observer = new MutationObserver(() => {
    localStorage.setItem("win", winCounts)
    localStorage.setItem("lose", loseCounts)
    localStorage.setItem("total", totalCounts)
    localStorage.setItem("score", scoreCounts)
});

observer.observe(spanWin, { subtree: true, childList: true });
observer.observe(spanLose, { subtree: true, childList: true });
observer.observe(spanTotal, { subtree: true, childList: true });
observer.observe(spanScore, { subtree: true, childList: true });