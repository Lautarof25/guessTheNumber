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

updateElementText(spanWin, winCounts);
updateElementText(spanLose, loseCounts);
updateElementText(spanTotal, totalCounts);

const observer = new MutationObserver(() => {
    localStorage.setItem("win", winCounts)
    localStorage.setItem("lose", loseCounts)
    localStorage.setItem("total", totalCounts)
});

observer.observe(spanWin, { subtree: true, childList: true });
observer.observe(spanLose, { subtree: true, childList: true });
observer.observe(spanTotal, { subtree: true, childList: true });