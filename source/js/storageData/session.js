let winCounts = localStorage.getItem("win") === "" ? 0 : Number(localStorage.getItem("win"))
let loseCounts = localStorage.getItem("lose") === "" ? 0 : Number(localStorage.getItem("lose"))
let totalCounts = localStorage.getItem("total") === "" ? 0 : Number(localStorage.getItem("total"))

if (localStorage.getItem("win")) {
    spanWin.textContent += Number(localStorage.getItem("win"))
}
if (localStorage.getItem("lose")) {
    spanLose.textContent += Number(localStorage.getItem("lose"))
}
if (localStorage.getItem("total")) {
    spanTotal.textContent += Number(localStorage.getItem("total"))
}

const observer = new MutationObserver(() => {
    localStorage.setItem("win", winCounts)
    localStorage.setItem("lose", loseCounts)
    localStorage.setItem("total", totalCounts)
});

observer.observe(spanWin, { subtree: true, childList: true });
observer.observe(spanLose, { subtree: true, childList: true });
observer.observe(spanTotal, { subtree: true, childList: true });